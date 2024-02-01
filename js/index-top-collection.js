const clockContainer=document.querySelector('.top-collection-clock');
function updateClock() {
    clockContainer.innerText=new Date().toLocaleTimeString('uk');
}
setInterval(updateClock,1000);