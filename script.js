// Footer appearing or disappearing
window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= scrollableHeight - 100) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});

// Hobby of the day constantly changes on page reload

const hobbies = [
    "Photography",
    "Hiking",
    "Disney Pin Trading",
    "Reading",
    "Spending time with friends"
];


function getRandomHobby() {
    return hobbies[Math.floor(Math.random() * hobbies.length)];
}

function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

function setHobbyOfTheDay() {
    const today = getTodayDate();

    const newHobby = getRandomHobby();
    localStorage.setItem('hobbyOfTheDay', newHobby);
    localStorage.setItem('hobbyDate', today);
    return newHobby;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hobby-of-the-day').textContent = setHobbyOfTheDay();
});

