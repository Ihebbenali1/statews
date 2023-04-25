import React from 'react';
import Timer from './Timer';


class User extends React.Component {

    constructor() {
      super();
      this.state={
        person: {
          fullName: 'Iheb Ali',
          bio: 'Very short tempered person', 
          imgSrc:"https://www.facebook.com/photo.php?fbid=2792320747646844&set=pb.100006068370270.-2207520000.&type=3",
          profession: 'Fullstack Web Developer'
        },
        show:false,
         
      }
    }
    
  
  
  render() {
    return (<div className="App">
  
  <img src={this.state.person.imgSrc} alt="" />
  <h1>{this.state.person.fullName}</h1>
  <p>{this.state.person.bio}</p>
  <h3>{this.state.person.profession}</h3>
  <Timer />

  
  
    </div>)
  }
  }

  export default User