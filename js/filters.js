// filters
var ud = 'undefined';
var cover = document.getElementById('cover');

var FILTER_VALS = {};
var covers = ['red', 'green', 'blue', 'purple'];
var el = document.querySelector('canvas');

function go(me, className) {
  var activeButton = document.querySelector('button.active');
  if (activeButton) {
    activeButton.classList.remove('active');
    el.classList.remove(activeButton.textContent);
  }

  me.classList.add('active');
  el.classList.toggle(className);
}




function set(filter, value) {
  FILTER_VALS[filter] = typeof value == 'number' ? Math.round(value * 10) / 10 : value;
  if (value == 0 || (typeof value == 'string' && value.indexOf('0') == 0)) {
    delete FILTER_VALS[filter];
  }
  render();
}

function render() {
  var vals = [];
  Object.keys(FILTER_VALS).sort().forEach(function(key, i) {
    vals.push(key + '(' + FILTER_VALS[key] + ')');
  });
  var val = vals.join(' ');
  el.style.webkitFilter = val;
  //document.querySelector('output').textContent = '-webkit-filter: ' + (val ? val : 'none') + ';';
}

function changeCover(value) {
	for (var i = 0; i < covers.length; i++) {
		$(cover).removeClass(covers[i]);
	};
	$(cover).addClass(value);
}


// function pixelate(blocksize) {
//
//   blocksize = blocksize || 20;
//   var imgData=ctx.getImageData(0,0,w,h);
//   ctx.clearRect(0,0,w,h);
//     //var sourceBuffer8 = new Uint8Array(imgData.data.buffer);
//     //var sourceBuffer8 = new Uint8ClampedArray(imgData.data.buffer);
//     var sourceBuffer32 = new Uint32Array(imgData.data.buffer);
//     for(var x = 0; x < w; x += blocksize) {
//         for(var y = 0; y < h; y += blocksize) {
//
//           var pos = (x + y * w);
//           var b = (sourceBuffer32[pos] >> 16) & 0xff;
//           var g = (sourceBuffer32[pos] >> 8) & 0xff;
//           var r = (sourceBuffer32[pos] >> 0) & 0xff;
//           ctx.fillStyle = rgb(r,g,b);
//           if (blockshape == 0) {
//             ctx.fillRect(x, y, blocksize, blocksize);
//           } else {
//             ctx.fillEllipse(x, y, blocksize, blocksize);
//           };
//
//         }
//     }
// }


function scanLines(gap){
	gap = gap || random(3,10);
	for (var y = 0; y < height; y+=gap*2) {
		ctx.fillStyle = rgba(0,0.9);
		ctx.fillRect(0, y, w, gap);
	};
}



function strobe(){
		 if (random(100)>8) {
   ctx.fillStyle="black";
   //console.log('xx')
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
  }
}
