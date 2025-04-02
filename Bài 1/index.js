document.addEventListener('keydown', clickDrumKit);

function clickDrumKit(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;

    const audio = key.querySelector("audio"); 
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
   
}




