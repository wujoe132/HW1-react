import React, { Component } from 'react';
import './App.css';
import Article from "./components/article";
import Gallery from "./components/gallery";
import articles from "../data/articles";
import images from "../data/images"

class App extends Component {
constructor (props){
    super(props);
    this.state = {
        articles: articles,
        images: images
    }
}
  render() {
    return (
      <div >
        <Gallery images= { this.state.images }/>
        <Article articles={ this.state.articles }/>
      </div>
    );
  }
}

export default App;
