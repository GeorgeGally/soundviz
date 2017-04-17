rbvj = function(){

var circSize= 30;
var t = 0;
var numDots = 120;
var circs = [];
var hiFreq;
var loFreq;
var r=180;
var rot;
ctx.lineWidth = 1;
resetMe();

function resetMe(){
  rot = 0;
  hiFreq = 0;
  loFreq = 1000;
  r = 180;
  t = 0;

  for (var i=0; i<numDots; i++){

    var circle =  {
      r: r,
      me: i,
      x: r * Math.cos(t),
      y: r * Math.sin(t),
      orgi_x: r * Math.cos(t),
      orgi_y: r * Math.sin(t),
      theta: t
    }
    circs.push(circle);
    t  +=  radians(360/numDots);
  }

  for (var i=0; i<numDots; i++){
    drawCirc(circs[i],80);
  }
 }

this.draw = function()  {

  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

  for (var i=0; i<numDots; i++){
    var vol = Sound.mapRawSound(i, numDots *2, 0, 100);
    //var vol = findMapping(mic.getSprectrum(i*6),800);
    drawCirc(circs[i],vol);

  }

  if (randomInt(100)>90) resetMe();

}


function drawCirc( p, _rr){

    ctx.save();
    ctx.translate(width/2, height/2);
    p.r -= (r-_rr)/5;
    p.r = clamp(p.r, 140,400);
    rot+=0.0001;
    var xx = r * Math.cos(p.r)
    var yy = r * Math.cos(p.r)
    //ctx.strokeStyle = randomColor({luminosity: 'dark'});
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.line(p.x, p.y, p.x+xx, p.y+yy);
    ctx.rotate(rot);
    p.x = p.r * Math.cos(p.theta);
    p.y = p.r * Math.sin(p.theta);
    ctx.restore();

  }

}

rbvj();
