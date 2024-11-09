import React from "react";
// import PropTypes from 'prop-types'

const NewsItems = (props) => {
  let { time, author, ctitle, description, imgurl, sourcen, url, mode } = props;

  return (
    <a className="text-dark" style={{ display: 'block', textDecoration: 'none' }} href={url} target='_blank' rel="noopener noreferrer" >
      <div className="card" style={mode === 'dark' ? { backgroundColor: '#3B3B3B' } : { backgroundColor: 'white' }}>
        <div style={{ display: 'flex', position: 'absolute', right: '0' }}>
          <span className="badge bg-danger">
            {sourcen}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <img src={imgurl} className="card-img-top" alt="..." />
        <div className={`card-body text-${mode === 'dark' ? 'light' : 'dark'}`}>
          <h5 className="card-title">{ctitle}...</h5>
          <p className="card-text">
            {description}...
          </p>
          <p className="card-text"><small style={mode === 'dark' ? { color: 'tomato' } : { color: 'crimson' }}> by {author} on  {new Date(time).toGMTString()} </small></p>
          <button className={`btn btn-${mode === 'dark' ? 'outline-light' : 'dark'}`}>
            Read More...
          </button>
        </div>
      </div>
    </a>
  );

}

export default NewsItems;