import React, { Component } from "react";

class Gallery extends Component {
    // constructor(props){
    //     super(props)
    // }
    render (){
        return (
            <div>
                {this.props.images.map((images, index) => {
                    return (
                        <div>
                            <img src={ images.src }></img>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Gallery;