import React from 'react';

class CheckoutControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isCheckedOut: false
		};
	}

	checkOut(e) {
		this.setState({
			isCheckedOut: true
		});
	}

	refresh(e) {
		this.setState({
			isCheckedOut: false
		});
	}

	render(){
		return (
			<Button isCheckedOut={this.state.isCheckedOut} onClick={this.state.isCheckedOut ? 
				this.refresh.bind(this) : this.checkOut.bind(this)}/>
		);
	}
}

function Button(props) {
	if (props.isCheckedOut==false) {
		return (
			<div>
				<button onClick={props.onClick}>Check out</button>
				<h2>Please check out your items!</h2>
			</div>
		);
	} else {
		return (
			<div>
				<button onClick={props.onClick}>Refresh</button>
				<h2>Thank you for shopping with Ethan!</h2>
			</div>
		);
	}
	 
}

export default CheckoutControl;