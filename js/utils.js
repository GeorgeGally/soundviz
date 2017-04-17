


function showUI(){
  var ui  = document.getElementById('ui');
  console.log("showUI");
  ui_on = !ui_on;
  if(ui_on) {
    ui.classList.remove('hide');
  } else {
    ui.classList.add('hide');
  }


}

function UiUtilities(){
  var ui  = document.getElementById('ui');

  if(chance(900)) changeFile( randomInt(98, 122) );

  var ui_txt = " < File: " + currentFile + " > " ;
  if(Sound.volume > 0) {

  ui_txt += "   Volume: " +  pad((Sound.volume),3);
  ui_txt += " | Bass: "   +  pad(Sound.getBassVol(),3);
  ui_txt += "  Mids: "    +  pad(Sound.getMidsVol(),3);
  ui_txt += "  Highs: "   +  pad(Sound.getHighsVol(),3);
  ui_txt += " | Sensitivity : " + microMuffle.toFixed(2);
  if (chance(5000)) {
    pixelateOn = true;
    blocksize = randomInt(10, 50);
    console.log("pixelateOn");
  }
  if (pixelateOn == true) {
    pixelate(blocksize);
    if (chance(150)) pixelateOn = false;
  }

  if (chance(5000)) {
    strobeOn = true;
    console.log("strobeOn");
  }
  if (strobeOn == true) {
    strobe();
    if (chance(150)) strobeOn = false;
  }

  if (chance(5000)) {
    scanLinesOn = true;
    console.log("scanLinesOn");
  }
  if (scanLinesOn == true) {
    scanLines();
    if (chance(150)) scanLinesOn = false;
  }


  ui.innerHTML = '<p>' + ui_txt +'</p>';
  }
}




function pad(n) {
  n = Math.round(n);
  if (n<=999) { n = ("00"+n).slice(-4); }
  return n;
}

function resetEverything(){
	resize();
	strobeOn = false;
	scanLinesOn = false;
	window.cancelAnimationFrame(animate);
	animate = null;
	pixelateOn = false;
}

function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
