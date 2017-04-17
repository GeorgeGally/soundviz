rbvj = function(){
var numParticles=120;

var ss = 0;
var r = 0.0;

draw = function() {
  ctx.clearRect(0,0,w,h);


   var x = map(Math.sin(r),-1,1,22,688);
  //float x = (sin(r) + 1) * width/2;
  r+=0.0002;
  //ss++;
  ctx.save();
  ctx.translate(window.innerWidth/2,window.innerHeight/2);
  ctx.lineWidth = 3;
  r += Sound.mapRawSound(10, 100, 0, 1)/100;

   for (var i = 0; i < numParticles; ++i) {
    ctx.strokeStyle = rgba(Sound.mapSound(i, numParticles *2, 0,255),0.5);
    ctx.rotate(radians(r));
    ctx.strokeEllipse(x, x, i/ss, i/ss);
    ctx.strokeEllipse(i, 0, x+i, x);
   }
   ctx.restore();

}

}();
