var link, label, inh;
window.onload = function()
{
    link = document.getElementById("MenuTreeViewt2");
    link.onclick = play;
    link.setAttribute("href", "#")
}

function play()
{
    label = document.getElementById("hall_slider");
    inh = label.innerHTML;
    label.innerHTML = `
    <video id="video1" width="750" onended="reset()">
    <source src="https://raw.githubusercontent.com/rci69/f/main/Maximizing%20Alphaness.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
    </video>`
    var myVideo=document.getElementById("video1"); 

    if(myVideo.muted)
        myVideo.muted = false;
    if(myVideo.hidden)
        myVideo.hidden = false;
    if (myVideo.paused) 
        myVideo.play();
    link.onclick = function(){};
}

function reset()
{
    label.innerHTML = inh;
    link.setAttribute("href", "Student/frmStudentMealOnOff.aspx");
}
