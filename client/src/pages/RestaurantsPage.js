//import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';



class Items extends React.Component {
  constructor(){
    super();

    this.state={
      'items':[]
    }
  }
  componentDidMount(){
    this.getItems();
  }
  getItems(){
    fetch('/api/places/')
    .then(results => results.json())
    .then(results => this.setState({'items':results}));
  }

  // getListOfRestaurants = () => {
  //   fetch('/api/places')
  //   .then(res => res.json)
  // }

  success(pos) {
    var crd = pos.coords;
    var lng = pos.coords.longitude;
    var lat = pos.coords.latitude;
    fetch('/api/places?lat='+lat+'2&lng='+lng+'&keyword=pizza')
    .then(results => results.json())
    .then(results => this.setState({'items': results}));
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  render() {
    return (
      <div> {this.state.getItems}</div>
      // <ul>{this.state.items.map(function(item,index){
      //   return <RestaurantsPage item={item} key={index} />
      // })}</ul>
    )
  }
}

ReactDOM.render(
  <Items />,
  document.getElementById('root')
);

export default Items;