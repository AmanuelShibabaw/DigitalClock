function digitalClock(){
    var now = new Date();
    var hours = now.getHours();
    var minutes =now.getMinutes();
    var seconds = now.getSeconds();
    hours = hours<10?"0"+hours : hours;
    minutes = minutes<10?"0"+minutes : minutes;
    seconds = seconds<10?"0"+seconds : seconds;
    document.querySelector('.hours').innerHTML=hours;
    document.querySelector('.minutes').innerHTML=minutes;
    document.querySelector('.seconds').innerHTML=seconds;
}
setInterval(digitalClock,1000);