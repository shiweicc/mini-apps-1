const { Component } = React;
const { render } = ReactDOM;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <h1>Hello world in react!</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));