rbvj = function(){

var numParticles = 150;
var movers=4
var d=200
var d2=120
var frames=400;
var angle;
var theta = 0;

var dir = 1;

var particles = [];
var offset = map(1, 0, numParticles, 0, window.innerWidth)/2;

for (var i = 0; i < numParticles; i++) {
  addParticle(i);
}

function addParticle(i){
    var x = map(i, 0, numParticles, 0, window.innerWidth);
      var particle = {
        x: 0,
        y: 0,
        centerx: 0,
        centery: 0,
        center_trail: true,
        height: 400,
        center: false,
        speedx: 0,
        speedy: 0,
        kind: "circ",
        r:random(1000),
        strokeColor: rgb(random(100,255)),
        fillColor: rgba(0,random(55),random(0,255),random(0,255)),
        strokeWeight: randomInt(1,4),
        size: 450,
        me: i,
        flip: dir,
        dir: dir
    }
    dir *=-1;
    particles.push(particle);
}



draw = function() {
  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
  for (var i = 0; i < particles.length; i++) {
    var f = Sound.mapRawSound(i, particles.length *2, 0, w/2);
    particles[i].strokeWeight = clamp(f/5,2,10);
    particles[i].size = tween(particles[i].size, f*6, 10);

  }
  moveParticles();

}

function moveParticles(){
  ctx.save();
  ctx.translate(w/2, h/2);
  for (var i = 0; i < particles.length; i++) {
    particle = particles[i];
      ctx.strokeStyle = particles[i].strokeColor;
      ctx.lineWidth = particles[i].strokeWeight;
      ctx.globalCompositeOperation = 'lighten';
      ctx.HstrokeEllipse(0, 0, particle.size, particle.size);
  };
  ctx.restore();
}




}();
