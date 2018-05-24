<p align="center">
  <img src="http://7xtxh3.com1.z0.glb.clouddn.com/react-vertical-infinite-scrolling-1.gif" alt="Agenda" width="300" height="100" data-canonical-src="https://cdn.rawgit.com/agenda/agenda/master/agenda.svg" style="max-width:100%;">

</p>

<p align="center">
An infinite scroll plugin for React.js
</p>
<p align="center">

[![GitHub license](https://img.shields.io/github/license/Hancoson/react-vertical-infinite-scrolling.svg)](https://github.com/Hancoson/react-vertical-infinite-scrolling/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-vertical-infinite-scrolling.svg)](https://www.npmjs.com/package/react-vertical-infinite-scrolling)
[![GitHub license](https://img.shields.io/github/license/Hancoson/react-vertical-infinite-scrolling.svg)](https://github.com/Hancoson/react-vertical-infinite-scrolling/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/react-vertical-infinite-scrolling.svg)](https://www.npmjs.com/package/react-vertical-infinite-scrolling)
</p>


# React-vertical-infinite-scrolling

- [Demo](https://hancoson.github.io/react-vertical-infinite-scrolling/dist)

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