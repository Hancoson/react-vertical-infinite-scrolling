# React-vertical-infinite-scrolling

- [Demo](https://hancoson.github.io/react-vertical-infinite-scrolling/build/index.html)

## Intro

This plugin is an infinite scroll plugin for React.js, it can help you create an infinite scroll list fastly.

## Installation

```sh
npm i react-ivertical-infinite-scrolling --save
```

or

```sh
yarn add react-ivertical-infinite-scrolling
```

## Usage & Guide

```sh
import ReactInfinitScroller from 'react-vertical-infinite-scrolling'
```

```jsx
<ReactInfinitScroller
    pageStart={0}
    loadMore={(e) => this.loadItems(e)}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
    {items} // <-- This is the content you want to load
</ReactInfinitScroller>
```