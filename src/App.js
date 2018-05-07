import React, { Component } from 'react';
import ReactInfinitScroller from './lib/react-vertical-infinite-scrolling'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tracks: [],
      hasMoreItems: true
    }
  }
  loadItems(page) {
    const that = this;

    if (page > 20) {
      this.setState({ hasMoreItems: false })
      return;
    }

    setTimeout(() => {
      const newData = [
        {
          num: `${page} - 1`
        },
        {
          num: `${page} - 2`
        },
        {
          num: `${page} - 3`
        },
        {
          num: `${page} - 4`
        },
        {
          num: `${page} - 5`
        },
        {
          num: `${page} - 6`
        },
        {
          num: `${page} - 7`
        },
        {
          num: `${page} - 8`
        },
        {
          num: `${page} - 9`
        },
        {
          num: `${page} - 10`
        }
      ]
      const newTracks = that.state.tracks
      newTracks.push(newData)
      that.setState({
        tracks: newTracks
      })
    }, 500)
  }

  render() {
    const { hasMoreItems, tracks } = this.state
    const loader = <div className="loader" key={0}>Loading ...</div>;

    let items = [];
    tracks.map((val, i) => {
      val.map((v, index) => {
        items.push(
          <div className="item" key={`${i}-${index}`}>
            <img className="media-left" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4=" />
            <div className="media-right">
              <h6>#{v.num}</h6>
              <p>React-vertical-infinite-scrolling</p>
            </div>
          </div>
        );
      })

    });
    return (
      <div>
        <header>
          <h1>React Vertical Infinite Scrolling</h1>
          <h4>An infinite scroll plugin for React.js</h4>

          <a href="https://github.com/Hancoson/react-vertical-infinite-scrolling" target="_blank" className="github-corner">
            <svg width="80" height="80" viewBox="0 0 250 250" style={{ fill: '#333', color: '#fff', position: 'absolute', top: '0', border: '0', right: '0', zIndex: '999' }} aria-hidden="true">
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
              <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: '130px 106px' }} className="octo-arm"></path>
              <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
            </svg>
          </a>

        </header>
        <div className="container">
          <ReactInfinitScroller
            pageStart={0}
            loadMore={(e) => this.loadItems(e)}
            hasMore={hasMoreItems}
            loader={loader}
            threshold={100}
          >

            <div className="row">
              {items}
            </div>
          </ReactInfinitScroller>
        </div>
        <footer>
          Made with love by <a href="http://vsoui.com">Hancoson</a>
        </footer>
      </div>
    );
  }
}

export default App;
