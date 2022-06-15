const { Component } = React;
const { render } = ReactDOM;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout_clicked: false,
      form1_next: false,
      form2_next: false,
      confirmBtn: false,
      fullname:'',
      password:'',
      address_line1:'',
      address_line2:'',
      city:'',
      state:'',
      zipcode:'',
      phone_number:'',
      credit_card_num :'',
      expiry_date:'',
      CVV:'',
      billing_zipcode:'',
    }
  }
  handleCheckoutBtn(e) {
    e.preventDefault();
    this.setState({checkout_clicked: !this.state.checkout_clicked});
  }
  handleNextForm1(e) {
    e.preventDefault();
    this.setState({form1_next: !this.state.form1_next});
  }
  handleNextForm2(e) {
    e.preventDefault();
    this.setState({form2_next: !this.state.form2_next});
  }
  handleConfirm(e) {
    e.preventDefault();
    this.setState({confirmBtn: !this.state.confirmBtn});
    console.log('You did it!!!')
  }
  render() {
    return (
      <div>
        <h1>Ready to check out?</h1>
        <form>
          <input type="submit" value="Check Out" onClick={this.handleCheckoutBtn.bind(this)}/>
        </form>
        {this.state.checkout_clicked &&
          <Form1
            handleNextForm1={this.handleNextForm1.bind(this)}
            form1_next={this.state.form1_next}
            handleNextForm2={this.handleNextForm2.bind(this)}
            form2_next={this.state.form2_next}
            handleConfirm={this.handleConfirm.bind(this)}
            confirmBtn={this.state.confirmBtn}
          />
        }
      </div>
    )
  }
}

const Form1 = (props) => {
  return (
    <div>
      <h3>Please fill out Form #1:</h3>
      <form>
        <label htmlFor="name">Full name: </label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" required />
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" id="password" required />

          <input type="submit" value="Next" onClick={(e)=>{props.handleNextForm1(e)}}/>
      </form>
      {props.form1_next &&
        <Form2
          handleNextForm2={props.handleNextForm2}
          form2_next={props.form2_next}
          handleConfirm={props.handleConfirm}
          confirmBtn={props.confirmBtn}
        />
      }
   </div>
  )
}

const Form2 = (props) => {
  return (
    <div>
      <h3>Please fill out Form #2:</h3>
      <form>
        <label htmlFor="address_line1">Address: </label>
          <input type="text" name="address_line1" id="address_line1" required />
          <label htmlFor="address_line2">Address (optional): </label>
          <input type="text" name="address_line2" id="address_line2" />
          <label htmlFor="city">City: </label>
          <input type="text" name="city" id="city" required />
          <label htmlFor="state">State: </label>
          <input type="text" name="state" id="state" required />
          <label htmlFor="zipcode">Zipcode: </label>
          <input type="text" name="zipcode" id="zipcode" required />
          <label htmlFor="phone_number">Phone number: </label>
          <input type="text" name="phone_number" id="phone_number" required />

          <input type="submit" value="Next" onClick={(e)=>{props.handleNextForm2(e)}}/>
      </form>
      {props.form2_next &&
        <Form3
        handleConfirm={props.handleConfirm}
          confirmBtn={props.confirmBtn}
        />
      }
   </div>
  )
}

const Form3 = (props) => {
  return (
    <div>
      <h3>Please fill out Form #3:</h3>
      <form>
          <label htmlFor="credit_card_num">Credit card number: </label>
          <input type="text" name="credit_card_num" id="credit_card_num" required />
          <label htmlFor="expiry_date ">Expiry date: </label>
          <input type="text" name="expiry_date " id="expiry_date " />
          <label htmlFor="CVV">CVV: </label>
          <input type="text" name="CVV" id="CVV" />
          <label htmlFor="billing_zipcode">Billing zipcode: </label>
          <input type="text" name="billing_zipcode" id="billing_zipcode" required />

          <input type="submit" value="Confirm" onClick={(e)=>{props.handleConfirm(e)}}/>
      </form>
   </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));