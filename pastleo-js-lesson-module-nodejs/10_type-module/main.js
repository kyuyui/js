import addOne from './addOne.js';
import { removeGreeting } from './utilis.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-one').addEventListener()
  { removeGreeting }

  addOne();
})
const timeoutPromise = time => new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve();
  }, time);
})

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('add-one').addEventListener('click', async () => {
//     const greetingDiv = document.getElementById('greeting');
//     if (greetingDiv) {
//       greetingDiv.remove();
//     }
//     const timeDiv = document.createElement('div');
//     timeDiv.textContent = 'Loading...';
//     document.getElementById('container').appendChild(timeDiv);

//     await timeoutPromise(Math.random() * 1000);

//     timeDiv.textContent = (new Date()).toString();
//   })

//   document.getElementById('add-three').addEventListener('click', () => {
//     const greetingDiv = document.getElementById('greeting');
//     if (greetingDiv) {
//       greetingDiv.remove();
//     }

//     Array(3).fill().forEach(async () => {
//       const timeDiv = document.createElement('div');
//       timeDiv.textContent = 'Loading...';
//       document.getElementById('container').appendChild(timeDiv);

//       await timeoutPromise(Math.random() * 2000 + 1000);

//       timeDiv.textContent = (new Date()).toString();
//     });
//   })
// })