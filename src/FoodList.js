import React from 'react';
import FoodItem from './FoodItem';

class FoodList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			foods: props.food_raw_data
		};
	}


  	render() {
  		let items = this.state.foods;
    	return (
    		<ul>
    			{items.map((item) => <FoodItem key={item.name} food={item} />)}
    		</ul>
    	)
  	}
}

export default FoodList;
