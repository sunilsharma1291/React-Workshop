import React from 'react';
import {Link } from 'react-router';


class App extends React.Component {
   render() {
   	const {history} = this.props;
   	const marginFromTop = {
   		marginTop:'30px'
   	}
      return (
         <div className="container" style={marginFromTop}>

	         <nav className="navbar navbar-default">
	         	<ul className="nav navbar-nav">
	         	   <li className= {history.isActive('home')?'active':''}>
		         		<Link to="home">
         					<button type="button" className="btn btn-success">Home</button> 
	         			</Link>
         			</li>
	         	   <li className= {history.isActive('about')?'active':''}>
		         	   <Link to="about"> 
			         	   <button type="button" className="btn btn-primary">About</button> 
		         	   </Link>
	         	   </li>
	         	   <li className= {history.isActive('contact')?'active':''}>
		         	   <Link to="contact">
			         	   <button type="button" className="btn btn-warning">Contact</button>
		         	   </Link></li>
	         	</ul>
	         </nav>
	            
	          {this.props.children}
         </div>
      )
   }
}

export default App;


