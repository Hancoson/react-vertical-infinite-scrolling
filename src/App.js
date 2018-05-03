import React, { Component } from 'react';
import './App.css';
import ReactInfinitScroller from './lib/react-infinite-scroller'

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

    fetch('/api.json').then((res) => {
      console.log(res)
    })



  }

  render() {
    const { hasMoreItems, tracks } = this.state
    const loader = <div className="loader">Loading ...</div>;

    let items = [];
    tracks.map((val, i) => {
      items.push(
        <div className="track" key={val.id}>
          <a href={val.permalink_url} target="_blank">
            <img src={val.artwork_url} width="150" height="150" />
            <p className="title">{val.title}</p>
          </a>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React-infinite-scroller</h1>
        </header>
        <ReactInfinitScroller
          pageStart={0}
          loadMore={() => this.loadItems()}
          hasMore={hasMoreItems}
          loader={loader}>

          <div className="tracks">
            {items}
          </div>
        </ReactInfinitScroller>
      </div>
    );
  }
}

export default App;
