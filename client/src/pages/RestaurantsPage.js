import React from 'react';

class RestaurantsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: {}
    }
  }

  componentDidMount = () => {
    this.getListOfRestaurants();
  }

  getListOfRestaurants = () => {
    fetch('/api/places')
    .then(res => res.json())
    .then(res => this.setState({
      restaurants: res
    }));
  }

  

  getRandomRestaurant = () => {
    
  }

  render() {
    return (
      <div>Lists of Restaurants
        <button onClick={this.getListOfRestaurants}>Get random restaurant!</button>
      </div>
      
    )
  }
}

export default RestaurantsPage;