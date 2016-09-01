import React from 'react';

class About extends React.Component {
   render() {
   	const {history, params, location} = this.props;
   	console.log(params);
      return (
            <div className="jumbotron">
   	           <h1>About Example</h1>
   	           <p>ható szöveg miközben a szöveg elrendezését 
   	           nézi. A Lorem Ipsum használatának.</p>
            </div>
      )
   }
}

export default About;
