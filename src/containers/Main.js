import React from 'react';
import './Main.css';
import NavigationContainer from './NavigationContainer';
import MoviesContainer from './MoviesContainer';
import WOW from "wowjs";
class Main extends React.Component {
  componentDidMount(){
		const wow = new WOW.WOW();
    wow.init();
	}

  render() {
    return (
      <section className="main ">
        <NavigationContainer/>
         
        
        <MoviesContainer/>
        
        
      </section>
    );
  }
}

export default Main;
