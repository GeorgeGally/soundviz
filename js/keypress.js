var gui;
var pressakey = 1;
var bankDestination = 0;
var thisKey;
var microMuffle=0;
var pressedKeys= 0;
var catNum= 0;
var currentFile = 0;
var currentKey = 0;
var currentSet = 0;
var currentBank = 0;
var clock, showCursor;
var shiftNumbers = [33,64,35,36,37,94,38,42,40,41];
var mic_level = 0;
var ui_show = 0;
var mouseSetting = "SHOW";
var qualitySetting = "HIGH";
var fileName = 0;
var fileLocation = "";
var black = false;
var cover_colours = ["#ffffff","red","blue","yellow","pink","purple"];
var cover_count = 0;
var animate;
var ui = 0;



$(this).keypress(function(){

	var thisKey = event.keyCode;

	//console.log( "KeyCode " + thisKey );

	// keys a-z
	if (thisKey>=97 && thisKey<=122) {
		//console.log ("CHANGE FILE " + thisKey);
		changeFile(thisKey+1);

	// keys 0-9 - keycode 48-57
	} else if (thisKey>= 48 && thisKey<= 57) {

	} else if (thisKey == 220 && clock == false) {

		clock = true;

	} else if (thisKey == 39) {

		strobeOn = !strobeOn;

	} else if (thisKey == 47) {

		showUI();

	} else if (thisKey == 32) {

		changeFile( randomInt(98, 122) );

	} else if (thisKey == 97) {

	} else if (thisKey == 98) {

	} else if (thisKey == 45) { //MICROPHONE keys [ + ]:

		console.log("Reduce Gain: "+ microMuffle);
		microMuffle = microMuffle-0.1;

	} else if (thisKey == 61) {

		microMuffle = microMuffle+0.1;
		console.log("Add Gain: "+ microMuffle)

	} else if (thisKey == 43) {

		console.log("Reduce Gain: "+ microMuffle);
		microMuffle = microMuffle-0.5;

	} else if (thisKey == 95) {

		microMuffle = microMuffle+0.5;
		console.log("Add Gain: "+ microMuffle);

	} else if (thisKey == 93) {

		//cover_count = (cover_count + 1)%6;

	} else if (thisKey == 92) {


	} else if (thisKey == 59) {

		scanLinesOn = !scanLinesOn;

	} else if (thisKey == 91) {

		blocksize = randomInt(10, 50);
		pixelateOn = !pixelateOn;
		console.log("pixelateOn: " + pixelateOn);
	// MOUSE SETTINGS
	} else if (thisKey == 9) {
  		if (!showCursor) {
   			showCursor = true;
  			noCursor();
  		} else {
   			showCursor= false;
   			console.log(" Show cursor");
  			cursor();
	}



}

})

var fileref;

function changeFile( thisKey ) {

	resetEverything();

	if (fileref != undefined) document.getElementsByTagName("head")[0].removeChild(fileref);

		ctx.globalCompositeOperation = "source-over";
		currentFile = thisKey-97;
		console.log ("changeFile: " + currentFile);
		var loc = currentSet +'/' +currentFile;
		var filename = 'art/' +  loc + '.js';
		fileref = document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename);
        document.getElementsByTagName("head")[0].appendChild(fileref);
        //document.location.hash = loc;
				setHash(loc);
}

// hack to include genre and filename in location hash
function setHash(loc){
	var hashes = window.location.hash.split('#');
	//console.log(hashes);
	if(hashes.length > 1) {
		var genre = hashes[1];
		window.location.hash = genre + "#" + loc;
	}


}
