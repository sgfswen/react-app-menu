import React from 'react';

class FoodItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: props.food.name,
			price: props.food.price,
			number: 0,
			totalPrice: 0
		};
	}

	updateIncrease(e) {
		this.setState({
			number: this.state.number + 1,
			totalPrice: (this.state.number + 1) * this.state.price
		});
	}

	updateDecrease(e) {
		if (this.state.number === 0) {
			return;
		} else {
			this.setState({
				number: this.state.number - 1,
				totalPrice: (this.state.number - 1) * this.state.price
			});
		}
	}

  	render() {
    	return (
    	<li>
      		{/* <h1>This is FoodItem</h1> */}
      		<p>Food: {this.state.name}, Price: {this.state.price}&nbsp;&nbsp;&nbsp;&nbsp;
      		<button onClick={this.updateIncrease.bind(this)}>+</button>&nbsp;{this.state.number}&nbsp;
      		<button onClick={this.updateDecrease.bind(this)}>-</button>&nbsp;Total Price: {this.state.totalPrice}
      		</p>
      		<hr/>
    	</li>
    	)
  	}
}

FoodItem.defaultProps = {
	name: "burger",
	price: 9.99,
	number: 0,
	totalPrice: 0
}

export default FoodItem;