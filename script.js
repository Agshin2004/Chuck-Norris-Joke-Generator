const jokeDiv = document.querySelector('#joke');
const btn = document.querySelector('#joke-btn');


function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random/')
    .then(res => {
      if (!res.ok) {
        alert('Something went wrong!');
      }
      return res.json()
    })
    .then(joke => {
      addJokeToDOM(joke.value);
    })
    .catch(error => {
      addJokeToDOM(`Something Went Wrong :(, here's the error: ${error}`);
    });
}

function addJokeToDOM(joke) {
  if (joke.length > 190) {
    alert('page will refresh in 5 seconds');
    setTimeout(() => getJoke(), 5000)
  }
  jokeDiv.innerHTML = joke;
}


function init() {
  // Event Listeners
  btn.addEventListener('click', getJoke);

  // Function calls
  getJoke();
}

init();
