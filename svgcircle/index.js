function fnDefinePosition() {
    var xr = document.getElementById('xrange').value;
    var yr = document.getElementById('yrange').value;
    var circle = document.getElementsByTagName('circle');
    var xpos = circle[0].setAttribute('cx', xr);
    var ypos = circle[0].setAttribute('cy', yr);
    /*var tcircle = document.getElementById('scircle');
    tcircle.setAttribute('cx', xr);
    tcircle.setAttribute('cy', yr);*/

}
