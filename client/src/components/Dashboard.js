import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchTab, setFavorite, changePage } from '../actions/main_dispatches';

class Dashboard extends Component {

  copyLinkAddress = link => {
    let input = document.createElement('input');

    input.value = link;
    input.style.position = 'absolute';
    input.style.left = '-9999px';

    document.body.appendChild(input);
    input.select();

    document.execCommand('copy');
    input.remove();
  }

  render() {
    let listing = this.props.show_favorites ? this.props.favorites : this.props.results;

    return(
      <section className="dashboard" >
        <div className="tabs row">
          <span className={`${!this.props.show_favorites ? 'active' : ''}`} onClick={() => this.props.switchTab(false)}>Results</span>
        </div>

        {!this.props.results.length && !this.props.show_favorites ? <h3>Search for a gif using the search bar above</h3> : ''}

        {this.props.results.length && !this.props.show_favorites ? <p className="query">Gif results for "{this.props.query}"</p> : ''}
        <div className="listing">
          {listing.map((gif, index) => (
            <div
              key={gif.id ? gif.id : gif.gif_id}
              className="giphy column bottom"
              style={{ backgroundImage: `url(${gif.url})` }}>
              <div className="giphy-controls row split">
                {this.props.show_favorites ?
                  <button onClick={(e) => this.props.setFavorite(gif, index, true)}>Remove</button>
                  : ""}
                <button onClick={() => this.copyLinkAddress(gif.url)}>Copy Link</button>
              </div>
            </div>
          ))}
        </div>
        {this.props.results.length && !this.props.show_favorites ? (
          <div className="pagination row x-center y-center">
            <span onClick={() => this.props.changePage(false)}><i className="fa fa-arrow-left"></i></span>
            <span className="page">{this.props.current_page}</span>
            <span onClick={() => this.props.changePage(true)}><i className="fa fa-arrow-right"></i></span>
          </div>
        ) : ''}
      </section>
    )
  }
}
const mapActionsToProps = {
  switchTab,
  setFavorite,
  changePage
}
const mapStateToProps = (state, props) => {
  return {
    show_favorites: state.show_favorites,
    results: state.results,
    favorites: state.favorites,
    query: state.query,
    current_page: state.current_page
  }
}
export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
