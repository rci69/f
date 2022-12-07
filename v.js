var label, inh;
const style = document.createElement("style")
style.textContent = "a { pointer-events: none; }"
document.head.appendChild(style)
document.body.onclick = function(){play()};

function play()
{
    label = document.getElementById("hall_slider");
    inh = label.innerHTML;
    label.innerHTML = `
    <video id="video1" width="740" onended="reset()">
    <source src="https://raw.githubusercontent.com/rci69/f/main/Maximizing%20Alphaness.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
    </video>`
    var myVideo=document.getElementById("video1"); 
    myVideo.muted = false;
    myVideo.hidden = false;
    if (myVideo.paused) 
        myVideo.play();
    document.body.onclick = function(){};
}

function reset()
{
    label.innerHTML = inh;
    style.parentNode.removeChild(style);
}
