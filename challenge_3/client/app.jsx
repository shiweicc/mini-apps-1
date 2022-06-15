const { Component } = React;
const { render } = ReactDOM;
import Form1 from './components/form1.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout_clicked: false,
      form1_filled: false,
      form2_filled: false,
      form3_filled: false,
    }
  }

  handleCheckoutBtn() {
    this.setState({checkout_clicked: true});
  }

  render() {
    return (
      <div>
        <h1>Ready to check out?</h1>
        <form>
          <input type="submit" value="Check Out" onClick={this.handleCheckoutBtn.bind(this)}/>
        </form>
        {/* {this.state.checkout_clicked && <form1 />} */}
        {/* <Form1 /> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));