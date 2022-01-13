import React, { Component } from "react"; //& react component

export default class DogIndex extends Component { //class component, we export
    constructor(props) {// a method that stores the default values of state variables
        super(props);//In JavaScript, super refers to the parent class constructor. (In our example, it points to the React.Component implementation.) allows variables to be used anywhere. global not local
        this.state = { // initializes setting state for vars
            dogPic: '', // state variable
        }
    }

    getDogPic = () => { //function
        fetch('https://dog.ceo/api/breeds/image/random') // api fetch
            .then(response => response.json()) // jsonifies response
            .then(data => {
                this.setState({
                    dogPic: data.message, // assigns data to the variables empty string
                })
            })
            .catch((error) => console.log(error))// catches errors
    }

    render() { //displays to the dom
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Dog index</h1>
                    {/* use onClick to call getDogPic function */}
                    <button onClick={this.getDogPic}>get Dog Pic</button>
                    {/* using this keyword to set the src to the state var of dogPic */}
                    <img src={this.state.dogPic} alt="dog"/>
                </div>
            </div>
        )
    }

}