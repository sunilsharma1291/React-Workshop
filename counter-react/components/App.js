import React, { Component } from "react";
var AppStyle = {
    h1Style:{
         color:'red',
         background:'yellow',
         fontSize:'36px',
         fontFamily:'calibri'
    },

    buttonStyle: {
      background: 'blue',
      color: '#fff',
      fontSize: '16px',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '4px',
      marginRight: '20px',
      boxShadow: '0px 0px 4px 1px #ccc'
    }
  }

export default class App extends React.Component {

   constructor(props) {
      super(props);
    
      this.state = {
         counter: 0
      }

      this.incrementHandler = this.incrementHandler.bind(this);
      this.resetCounter = this.resetCounter.bind(this);
   };

   incrementHandler() {
      this.setState({counter: this.state.counter + 1})
   }

    resetCounter(){
      this.setState({
        counter: 0
      });
  }

   render() {
      return (
         <div>
            <h1 style={AppStyle.h1Style}>This is the header Component</h1>
            <button onClick = {this.incrementHandler} style = {AppStyle.buttonStyle}>INCREMENT</button>
            <button onClick = {this.resetCounter} style = {AppStyle.buttonStyle}> reset </button>
            <br/> 
            <Customdirective myNumber = {this.state.counter}></Customdirective>
         </div>
      );
   }
}

class Customdirective extends React.Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
  
   render() {
      return (
         <div>
            <h3>This is the result</h3>
            <samp>{this.props.myNumber}</samp>
         </div>
      );
   }
}
