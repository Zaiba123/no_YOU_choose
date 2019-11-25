import location from './location';

restaurants = (event) => {
    location.getCurrLocation((pos) => {
        var crd = pos.coords;
        var lng = pos.coords.longitude;
        var lat = pos.coords.latitude;
        fetch('/api/places?lat=' + lat + '2&lng=' + lng + '&keyword=pizza')
            .then(res => res.json())
            .then(res => {
                console.log(res);

            })
    })


}
export default restaurants;