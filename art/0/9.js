rbvj = function(){
var numParticles = 25;
var movers=4
var d=200
var d2=120
var frames=400;
var angle;
var theta = 0;

var dir = 1;

var particles = [];
for (var i = 0; i < numParticles; i++) {
  addParticle(i);
}

function addParticle(i){
      var particle = {
        x: 0,
        y: 0,
        size: 10,
        speedx: 0,
        speedy: 0,
        r:random(1000),
        strokeColor: rgb(random(100,255)),
        fillColor: rgb(random(100,255)),
        strokeWeight: 2,
        size: random(10),
        me: i,
        flip: dir
    }
    dir *=-1;
    particles.push(particle);
}


draw = function() {

  ctx.background(0);
  for (var i = 0; i < particles.length; i++) {

    var s = Sound.mapRawSound(i, particles.length *2, 0, w/2);
    particles[i].x = Math.sin(theta/10)*w/2 +w/2 + (s*particles[i].flip);

  }
  moveParticles();

  theta += 2*Math.PI/frames;

}

function moveParticles(){
  for (var i = 0; i < particles.length; i++) {
    particle = particles[i];
    ctx.strokeStyle= particle.strokeColor;
    ctx.lineWidth = particle.strokeWeight;
    ctx.line(particle.x, 0, particle.x, window.innerHeight);
  };

}



}();
