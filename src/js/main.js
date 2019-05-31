// initialize basic nodes
const month = document.getElementById('month');
const day = document.getElementById('day');
const date = document.getElementById('date');
const digitTime = document.getElementById('digit-time');
const hoursHand = document.querySelector('.clock__hour');
const minutesHand = document.querySelector('.clock__minute');
const secondsHand = document.querySelector('.clock__second');

// display current date
const displayClock = () => {
    let now = new Date();

    // get current date and time info
    let currentMonth = now.toLocaleString('en-us', {month: 'short'});
    let currentDate = now.toLocaleString('en-us', {day: 'numeric'});
    let currentDay = now.toLocaleString('en-us', {weekday: 'short'});
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();

    // display current date and time info
    month.textContent = currentMonth;
    day.textContent = currentDay;
    date.textContent = currentDate;
    digitTime.textContent = `${currentHours}:${currentMinutes}`;

    // call function that displays current analog time
    displayAnalogTime();
};

setInterval(displayClock, 1000);

// display current analog time
function displayAnalogTime() {

    let currentSeconds = getSecondsToday();

    // current seconds to display
    let secToDisplay = Math.floor(currentSeconds % 60);

    // current minutes to display
    let minToDisplay = ( (currentSeconds / 60) % 60 );
    minToDisplay = minToDisplay.toFixed(3);

    // current hours to display
    let hourToDisplay = ( (currentSeconds / (60 * 60)) );
    hourToDisplay = hourToDisplay > 12 ? hourToDisplay - 12 : hourToDisplay;

    // display current values in analog format
    hoursHand.style.transform = 'rotate(' + (360 * hourToDisplay) / 12  + 'deg)';
    minutesHand.style.transform = 'rotate(' + (360 * minToDisplay) / 60 + 'deg)';
    secondsHand.style.transform = 'rotate(' + (360 * secToDisplay) / 60 + 'deg)';
}

// get the number of seconds passed today
function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let difference = now - today;

    return Math.floor(difference / 1000);
}

displayClock();