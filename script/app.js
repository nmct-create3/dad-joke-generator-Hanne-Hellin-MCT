const jokeContent = document.querySelector('.js-joke-content');
const jokeButton = document.querySelector('.js-joke-button');

const fetchJoke = async () => {
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => data.joke); // Extract the 'joke' property from the response JSON
};

const generateJoke = async () => {

    const joke = await fetchJoke();
    console.log(joke);
    jokeContent.innerHTML = joke;

};

const init = function () {
    console.log('script loaded');
    generateJoke();
    jokeButton.addEventListener('click', generateJoke)
};

init();
