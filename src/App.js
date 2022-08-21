
import './App.css';
import ApprovalCard from './components/ApprovalCard';
import Comment from './components/Comment';
import SeasonDisplay from './components/SeasonDisplay';
import Loading from './components/Loading';
import { faker } from "@faker-js/faker";
import React from 'react';




//Class based COmponent of App IMPLEMENTT IT ON SUNDAY MORN!!!! 

class App extends React.Component {
  
  // State Initialization with constructor
  // constructor(props) {
  //   super(props);

  //   //Implement State
  //   this.state = {
  //     lat: null,
  //     long: null,
  //     errorMsg: ''
  //   }
  // }

  // State initialization w/o constructor
  state = {
    lat: null,
    long: null,
    errorMsg: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(`Latitude -> ${pos.coords.latitude}, Longtitude -> ${pos.coords.longitude}`)
        this.setState({
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        })

      },
      (err) => {
        console.log(err)
        this.setState({
          errorMsg: err.message
        })
      }
    );
  }

  renderContent(){
    if (this.state.errorMsg && !this.state.lat) {
      return <p>Error Message: {this.state.errorMsg}</p>
    }

    if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay 
                lat={this.state.lat}/>
    }

    else {
      return <Loading message="Please allow location"/>
    }
  }

  // Try to have only one return statement in the render method!! 
  render() {
    return this.renderContent()  
  }
}

export default App;
