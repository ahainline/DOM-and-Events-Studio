// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    const takeOffButton = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    takeOffButton.addEventListener('click', () => {
        const takeOffConfirmed = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (takeOffConfirmed === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = (Number(shuttleHeight.innerHTML) + 10000);
        }
    });
});