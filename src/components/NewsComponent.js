import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loadbar from "./Loadbar";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComponent extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      load: false,
      page: 1,
      pagecount: 0,
      ttlresult: 0
    };
    document.title = `Newz - ${this.props.category}`
  }
  static defaultProps = {
    pagesize: '9',
    country: 'in',
    category: 'general'
  }
  static propTypes = {
    pagesize: PropTypes.string,
    country: PropTypes.string,
    category: PropTypes.string
  }
  // 0->load 1->next 2->previous
  // populate page
  pgload = async (check) => {
    this.props.setprogress('2');
    let url = "";
    if (check === 1) {
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1
        }&pageSize=${this.props.pagesize}`;
    } else if (check === 2) {
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1
        }&pageSize=${this.props.pagesize}`;
    } else {
      console.log(this.props.category);
      console.log(this.props.country);
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    }
    this.setState({
      load: true,
    });
    let data = await fetch(url);
    this.props.setprogress('40');
    let parsedata = await data.json();
    this.props.setprogress('80');
    this.setState({
      pagecount: Math.ceil(parsedata.totalResults / this.props.pagesize),
      articles: parsedata.articles,
      load: false,
      ttlresult: parsedata.totalResults,
    });
    this.props.setprogress('100');
  };
  // capitalize first letter function
  capi = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount() {
    await this.pgload(0);
    console.log("pagie:" + this.state.page);
  }
  // faltu function
  printo = () => {
    console.log(this.state.page);
  };
  // next button
  handleNext = async () => {
    console.log(this.state.page);
    this.setState({
      page: this.state.page + 1,
    });
    console.log("next");
    this.pgload(1);
  };
  // prev button
  handlePrev = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.pgload(2);
  };
  // fetchmore func
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      ttlresult: parsedata.totalResults,
    });
  }
  // render
  render() {
    return (
      <>

        <h2 style={this.props.mode==='dark'?{ textAlign: "center", color: 'white',marginTop:'103px' }:
        {textAlign: "center", color: 'darkolivegreen',marginTop:'103px'}}
        >
          {this.props.category === 'general' ? 'ZammyNews - Top Headlines' : `ZammyNews - Top ${this.capi(this.props.category)} Headlines`}
        </h2>
        {this.state.load && <Loadbar />}
        {/* infinite Scrollbar */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.ttlresult}
          loader={<Loadbar />}
        >
          {/* container row */}
          <div className="container my-4">
            <div className=" container row">
              {
                this.state.articles.map((e) => {
                  return (
                    // container column
                    <div className="col-md-4 my-3" key={e.url}>
                      <NewsItems
                        ctitle={e.title ? e.title.slice(0, 51) : ""}
                        description={
                          e.description ? e.description.slice(0, 91) : ""
                        }
                        imgurl={
                          e.urlToImage
                            ? e.urlToImage
                            : "https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg"
                        }
                        author={e.author ? e.author : 'Unknown'}
                        time={e.publishedAt}
                        sourcen={e.source.name}
                        url={e.url}
                        mode={this.props.mode}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default NewsComponent;