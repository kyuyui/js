export const timeoutPromise = time => new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
  
  export const removeGreeting = () => {
    const greetingDiv = document.getElementById('greeting');
    if (greetingDiv) {
      greetingDiv.remove();
    }
  }