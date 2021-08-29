const time = function() {
    let getDate = new Date();
    document.getElementById('time').innerHTML = getDate.toLocaleTimeString();
}

setInterval(function() {time();}, 1000);
