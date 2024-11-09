import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  // capitalize first letter function
 const capi = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let a='lop'

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light bg-danger" style={{borderRadius:'11px',fontFamily:'monospace',fontWeight:'bold',fontSize:'larger'}} to="/">
          Zammy News
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${props.active === 'gen' ? 'text-success' : ''}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item"><Link className={`nav-link ${props.active === "bus" ? 'text-success' : ''}`} to="/business">Business</Link></li>
            <li className="nav-item"><Link className={`nav-link ${props.active === 'ent' ? 'text-success' : ''}`} to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className={`nav-link ${props.active === 'hea' ? 'text-success' : ''}`} to="/health">Health</Link></li>
            <li className="nav-item"><Link className={`nav-link ${props.active === 'sci' ? 'text-success' : ''}`} to="/science">Science</Link></li>
            <li className="nav-item"><Link className={`nav-link ${props.active === 'spo' ? 'text-success' : ''}`} to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className={`nav-link ${props.active === 'tec' ? 'text-success' : ''}`} to="/technology">Technology</Link></li>

            {/* <li className="nav-item">
              <Link className={`nav-link ${props.active === 'gen' ? 'text-success' : ''}`} to="/">
                About
              </Link>
            </li> */}
          </ul>
          <form className="d-flex">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button> */}
            <div className="form-check form-switch mx-4">
              <input
                className="form-check-input my-3"
                type="checkbox"
                role="switch"
                onClick={props.togglemod}
                id="flexSwitchCheckDefault"
                checked={props.mode==='dark'?true:false}
              />
              <label
                className={`form-check-label text-${props.mode==='dark'?'warning':'warning'}`}
                htmlFor="flexSwitchCheckDefault"
                style={{width:'50px'}}
              >
                {capi(props.mode)+' Mode' }
              </label>
            </div>
          </form>
        </div>
      </div>
      {console.log(props.active)}
    </nav>
  );

}
Navbar.defaultProps = {
  active: 'gen'
}
Navbar.propTypes = {
  active: PropTypes.string
}

export default Navbar;
