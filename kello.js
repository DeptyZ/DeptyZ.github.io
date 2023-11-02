let time = document.getElementById("kello");
updateTime();
function updateTime() {
    let d = new Date();
    let hours = String(d.getHours()).padStart(2, '0');
    let minutes = String(d.getMinutes()).padStart(2, '0');
    let seconds = String(d.getSeconds()).padStart(2, '0'); 
    time.innerHTML = `KELLO ON &nbsp; ${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);