 var button = document.getElementById("cadsbot");
        var infodiv = document.getElementById("infodiv");
var objecttjh = document.getElementById("animation");
var aha  = function() {
    objecttjh.style.opacity = 0
}
aha();
var goTime = new Date().getTime
var opacitycontrol = function() {
    var currtime = new Date().getTime

    var newtime = (50 + ((currtime - goTime)/1000) * 30)
    



if (objecttjh.style.opacity <= 1) {
    objecttjh.style.opacity = (parseFloat(objecttjh.style.opacity)+ 0.1);
}
else {
    window.clearInterval(opacitycontrol);
}
}
var opacitytime = window.setInterval(opacitycontrol, 60)
var margincontrol = function() {
    var currtime = new Date().getTime
    var newmargin = (50 +((currtime + goTime)/1000) *30)
if (objecttjh.style.marginTop <= 1) {
    objecttjh.style.marginTop = (parseFloat(objecttjh.style.marginTop) + 1) + "px";
}else {
    window.clearInterval(margintime)

}


}
var margintime = window.setInterval(margincontrol, 1000)
button.addEventListener("click", () => {window.location.href = "https://fidelizamais.netlify.app/my/cadastro";});
