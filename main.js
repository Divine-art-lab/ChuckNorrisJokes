const xhr = new XMLHttpRequest();

 let jokeElement = document.querySelector('#jokes');
const generateJoke = () => {
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      
      jokeElement.textContent = data.value;
    } else if (this.status === 0) {
      jokeElement.textContent = 'Loading...'
    } else {
      jokeElement.textContent = `Something went wrong (Not funny)`
    }
  }
  
  xhr.send()
}

document.querySelector('button').addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke)