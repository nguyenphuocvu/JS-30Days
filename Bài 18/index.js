const  timeNodes = Array.from(document.querySelectorAll('[data-time]'))
console.log(timeNodes);
const seconds = timeNodes
     .map(node => node.dataset.time)
     .map(timeCode => {
         const [mins , secs] = timeCode.split(':');
         return (mins * 60) + secs
         console.log(mins , secs);
         
     })
     .reduce((total , vidSecounds) => total + vidSecounds)

     let secondsLeft = seconds
     const hours = Math.floor(secondsLeft / 3600)
     secondsLeft = secondsLeft % 3600

     const mins = Math.floor(secondsLeft / 60)
     secondsLeft = secondsLeft % 60

     console.log(hours , mins , secondsLeft);
     


