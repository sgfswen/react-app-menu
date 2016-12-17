import React from 'react';
import FoodList from './FoodList';
import CheckoutControl from './CheckoutControl';


const FOOD_RAW_DATA = [
  {name: 'Chicken Burger', price: 9.99 },
  {name: 'Beef Burger', price: 10.50 },
  {name: 'Vegetable Sandwich', price: 7.05 },
  {name: 'Fried Rice', price: 13.80 },
];

class App extends React.Component {
  render() {
    return (
    <div>
      <h1>Hi Ethan</h1>
      <hr/>
      <FoodList food_raw_data={FOOD_RAW_DATA} / >
      <hr/>
      <CheckoutControl />
    </div>
    )
  }
}


export default App;