var planets = [
    {planet: 'Mercury', position: '1', orbit_time: '0.24', nat_satellites: '0'},
    {planet: 'Venus', position: '2', orbit_time: '0.62', nat_satellites: '0'},
    {planet: 'Earth', position: '3', orbit_time: '1', nat_satellites: '1'},
    {planet: 'Mars', position: '4', orbit_time: '1.88', nat_satellites: '2'},
    {planet: 'Jupiter', position: '5', orbit_time: '11.86', nat_satellites: '67'},
    {planet: 'Saturn', position: '6', orbit_time: '29.46', nat_satellites: '62'},
    {planet: 'Uranus', position: '7', orbit_time: '84.32', nat_satellites: '27'},
    {planet: 'Neptune', position: '8', orbit_time: '164.79', nat_satellites: '14'}
];

var listPlanets = function () {
    for (var i = 0; i < planets.length; i++) {
        document.write(planets[i].planet + ' is planet #' + planets[i].position + 
        	' from the Sun. Time to complete its orbit is ' + planets[i].orbit_time + ' earth year(s). It has ' + planets[i].nat_satellites + ' natural satellite(s).<br>' );
    }
}

// listPlanets();

var num = window.prompt("Please enter a number between 1 and 8");

if (1 <= num && num <= 8) {
    listPlanets();
} else {
    alert("The value you entered is not within range. Please reload the page and enter a value thatis within 1 and 8, inclusive."); 
    window.location.reload();
}