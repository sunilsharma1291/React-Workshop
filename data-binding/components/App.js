import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               person: 'A',
               id: 1
            },
				
            {
               person: 'B',
               id: 2
            },
				
            {
               person: 'C',
               id: 3
            }
         ]
      }

   }

   render() {
      return (
            <div className="container">
            	<table className = "table table-bordered table-striped">
	         	  <tbody>
	         	  <tr>
	         	    <th>person</th>
	         	    <th>id</th> 
	         	  </tr>
		               {this.state.data.map((dataLoop, count) => <Content key={count} personData = {dataLoop}/>)}
               	   </tbody>
                   </table>
            </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (       
     	  <tr>
     	    <td>{this.props.personData.person}</td>
     	    <td>{this.props.personData.id}</td> 
     	  </tr>	         	
      );
   }
}

export default App;