import React, { Component } from "react";

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogPic: '',
        }
    }

    getDogPic = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dogPic: data.message,
                })
            })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Dog index</h1>
                    <button onClick={this.getDogPic}>get Dog Pic</button>
                    <img src={this.state.dogPic} alt="dog"/>
                </div>
            </div>
        )
    }

}