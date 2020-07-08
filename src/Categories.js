import React, { Component } from 'react'
import Images from './Images';
import Images1 from "./Images1";
import Images2 from "./Images2";
import Images3 from "./Images3";

export class Categories extends Component {
    constructor(props){
        super(props);
        this.state={
            showImage: false,
            showImage1:false,
            showImage2:false,
            showImage3:false
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleClicke=this.handleClicke.bind(this);
        this.handleClicked=this.handleClicked.bind(this);
        this.handleClickedi=this.handleClickedi.bind(this);
    }
    handleClick = (e) =>{
        this.setState({
            showImage: e,
            showImage1:false,
            showImage2:false,
            showImage3:false
        });
    }
    handleClicke = (e) =>{
        this.setState({
            showImage1: e,
            showImage: false,
            showImage2: false,
            showImage3:false
        });
    }
    handleClicked = (e) =>{
        this.setState({
            showImage2: e,
            showImage: false,
            showImage1: false,
            showImage3:false
        });
    }
    handleClickedi = (e) =>{
        this.setState({
            showImage2: false,
            showImage: false,
            showImage1: false,
            showImage3:e
        });
    }
    render() {
        return (
           <div>
               <div className="category">
               <div>
                <button style={btnStyle} onClick={this.handleClick}>Mountain</button>
                </div> 
                <div>
                <button style={btnStyle} onClick={this.handleClicke}>Beaches</button>
                </div> 
                <div>
                <button style={btnStyle} onClick={this.handleClicked}>Birds</button>
                </div> 
                <div>
                <button style={btnStyle} onClick={this.handleClickedi}>Food</button>
                </div> 
                </div>  
                <div>
                {this.state.showImage && (<Images />)}
                {this.state.showImage1 && (<Images1 />)}
                {this.state.showImage2 && (<Images2 />)}
                {this.state.showImage3 && (<Images3 />)}
                </div>
                
                  
            </div>
            
        )
    }
}
const btnStyle={
    backgroundColor: 'black',
    color: 'white',
    borderColor:'black',
    borderRadius: '4px',
    width: '80px',
    padding: '10px',
    fontFamily: 'Roboto Slab',
    fontSize: '15px',
    cursor: 'pointer'
}
export default Categories
