import React, { Component } from "react";
import style from "./style"

class Gallery extends Component {
    // constructor(props){
    //     super(props)
    // }
    render (){
        return (
            <div>
                {/* {this.props.images.map((images, index) => {
                    return (
                        <div>
                            <img src={ images.src }></img>
                        </div>
                    )
                })} */}
                <div>
                    <img style={ style.img }src={ this.props.images[0].src }></img> 
                    <div style={ style.block}>
                        <h1 style={ style.title }>{this.props.articles[0].title}</h1>
                        <p>{this.props.articles[0].content}</p>
                    </div>
                </div>
                <div>
                    <img style={ style.img }src={ this.props.images[1].src }></img> 
                    <div style={ style.block}>
                        <h1 style={ style.title }>{this.props.articles[1].title}</h1>
                        <p>{this.props.articles[1].content}</p>
                    </div>
                </div>
                <div>
                    <img style={ style.img }src={ this.props.images[2].src }></img> 
                    <div style={ style.block}>
                        <h1 style={ style.title }>{this.props.articles[2].title}</h1>
                        <p>{this.props.articles[2].content}</p>
                    </div>
                </div>
                <div>
                    <img style={ style.img }src={ this.props.images[3].src }></img> 
                    <div style={ style.block}>
                        <h1 style={ style.title }>{this.props.articles[3].title}</h1>
                        <p>{this.props.articles[3].content}</p>
                    </div>
                </div>
                <div>
                    <img style={ style.img }src={ this.props.images[4].src }></img> 
                    <div style={ style.block}>
                        <h1 style={ style.title }>{this.props.articles[4].title}</h1>
                        <p>{this.props.articles[4].content}</p>
                    </div>
                </div>
                <div>
                    <img style={ style.img }src={ this.props.images[5].src }></img> 
                    <div style={ style.block}>
                        <h1 style={ style.title }>{this.props.articles[5].title}</h1>
                        <p>{this.props.articles[5].content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;