// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.getElementById('modal');
  errorModal.classList.add('hidden');

  // Function to simulate making a server request
  function mimicServerCall(url="http://mimicServer.example.com", config={}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }

  // Function to handle heart click
  function handleHeartClick(event) {
    const heart = event.target;

    if (heart.classList.contains('like-glyph')) {
      mimicServerCall()
        .then(() => {
          if (heart.innerText === '♡') {
            heart.innerText = '♥';
            heart.classList.add('activated-heart');
          } else {
            heart.innerText = '♡';
            heart.classList.remove('activated-heart');
          }
        })
        .catch((error) => {
          errorModal.classList.remove('hidden');
          const errorMessage = document.getElementById('modal-message');
          errorMessage.innerText = error;

          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    }
  }

  // Add click event listener to all heart elements
  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach(heart => {
    heart.addEventListener('click', handleHeartClick);
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
