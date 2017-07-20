var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <p>It is {temp}° Degree in {location}!</p>
        </div>
    );
}

module.exports = WeatherMessage;
