import React, { Component } from 'react';
import './App.css';
import ReactInfinitScroller from './lib/react-infinite-scroller'
require('./mock/index')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tracks: [],
      hasMoreItems: true
    }
  }
  loadItems(page) {

    this.setState({
      tracks: [{
        "url": "http://aaa.aa",
        "img": "http://aaa.aa",
        "title": "hahahah",
      }, {
        "url": "http://aaa.aa",
        "img": "http://aaa.aa",
        "title": "hahahah",
      }, {
        "url": "http://aaa.aa",
        "img": "http://aaa.aa",
        "title": "hahahah",
      }, {
        "url": "http://aaa.aa",
        "img": "http://aaa.aa",
        "title": "hahahah",
      }, {
        "url": "http://aaa.aa",
        "img": "http://aaa.aa",
        "title": "hahahah",
      }, {
        "url": "http://aaa.aa",
        "img": "http://aaa.aa",
        "title": "hahahah",
      }, {
        "url": "http://aaa.aa",
        "img": "http://aaa.aa",
        "title": "hahahah",
      }, {
        "url": "http://aaa.aa",
        "img": "http://aaa.aa",
        "title": "hahahah",
      }, {
        "url": "http://aaa.aa",
        "img": "http://aaa.aa",
        "title": "hahahah",
      }, {
        "url": "http://aaa.aa",
        "img": "http://aaa.aa",
        "title": "hahahah",
      }]
    })

    /* fetch('/api/a').then(res =>
      console.log(res)
      //res.json()
    ).then(data =>
      console.log(data)
    ) */
  }

  render() {
    const { hasMoreItems, tracks } = this.state
    const loader = <div className="loader">Loading ...</div>;

    let items = [];
    tracks.map((val, i) => {
      items.push(
        <div className="track" key={val.id}>
          <a href={val.url} target="_blank">
            <img src={val.img} width="150" height="150" />
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
          loadMore={(e) => this.loadItems(e)}
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
