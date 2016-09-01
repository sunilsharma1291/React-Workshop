import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.heading}</h1>
            <Header firstText = 'Header'/>
            <Footer firstText = 'Footer'/>
         </div>
      );
   }
}

App.propTypes = {
   heading: React.PropTypes.string.isRequired
}

App.defaultProps = {
  heading:'This is the Main component'
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <p>{this.props.heading}</p>
            <h1>{this.props.firstText}</h1>
         </div>
      );
   }
}

Header.defaultProps = {
  heading:'This is from header component'
}

class Footer extends React.Component {
   render() {
      return (
         <div>
            <p>{this.props.heading}</p>
            <h1>{this.props.firstText}</h1>
         </div>
      );
   }
}

Footer.defaultProps = {
  heading:'This is from footer component'
}

export default App;