const jokeContent = document.querySelector('.js-joke-content');
const jokeButton = document.querySelector('.js-joke-button');
const jokeLoader = document.querySelector('.js-loading-state');

const fetchJoke = async () => {
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => data.joke); // Extract the 'joke' property from the response JSON
};

const showLoader = () => {
    loadingDelayed = setTimeout(() => {
        jokeLoader.classList.remove('u-hidden');
    }, 300)

    jokeContent.classList.add('u-hidden');
};

const removeLoader = () => {
    if (loadingDelayed) {
        clearTimeout(loadingDelayed)
        loadingDelayed = null
    }
    jokeLoader.classList.add('u-hidden'); // Fixed typo: classlist should be classList
    jokeContent.classList.remove('u-hidden');
};

const generateJoke = async () => {
    showLoader();
    const joke = await fetchJoke();

    console.log(joke);
    jokeContent.innerHTML = joke;
    removeLoader();
};

const init = function () {
    console.log('script loaded');
    generateJoke();
    jokeButton.addEventListener('click', generateJoke);
};

init();
