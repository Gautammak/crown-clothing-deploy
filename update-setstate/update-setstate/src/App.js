// import logo from './logo.svg';
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 1,
    };
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        return {
          meaningOfLife:
            parseInt(prevState.meaningOfLife) + prevProps.increment,
        };
      },
      () => console.log(this.state.meaningOfLife)
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.meaningOfLife}</p>
          <button onClick={this.handleClick}>Update state</button>
        </header>
      </div>
    );
  }
}

export default App;
