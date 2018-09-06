import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateSearch } from '../actions/main_actions';
import { getSearchResults } from '../actions/main_dispatches';

const logoStyle = {
  fontSize: '28px',
  fontFamily: 'Monoton',
  fontWeight: '100',
  display: "flex"
};

const searchStyle = {
  borderRadius: '8px',
  background: 'rgba(255,255,255,0.2)',
  color: 'white'
};

const linkStyle = {
  opacity: "0.8",
  fontSize: "25px",
  display: "flex",
  position: "relative",
  marginLeft: "400px",
  marginRight: "5px"
};

const Header = props => (
  <header className="row split y-center">
    <div className="row y-center">
      <Link to="/">
        <h4 style={logoStyle} onClick={props.handleStartFalse}><i className="fa fa-bolt"></i> GifWorld</h4>
      </Link>

        <div className="input-wrap">
          <input type="text" style={searchStyle}
            className="search"
            placeholder="Search"
            onKeyUp={props.getSearchResults}
            onChange={props.updateSearch}
            value={props.search} />
          <i className="fa fa-search" onClick={props.getSearchResults}></i>
        </div>
    </div>
</header>
);

const mapActionToProps = {
  updateSearch,
  getSearchResults
}

const mapStateToProps = (state, props) => ({
  search: state.search
});


export default connect(mapStateToProps, mapActionToProps)(Header);
