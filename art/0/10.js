rbvj = function(){

var numParticles = 55;
var movers = 4;
var d = 200;
var d2 = 120;
var frames=400;
var angle;
var theta = 0;
var stage = 0;
var dir = 1;

var particles = [];
for (var i = 0; i < numParticles; i++) {
  x = map(i, 0, numParticles, 0, width);
  addParticle(i, x);
}

function addParticle(i, x){
      var particle = {
        x: x,
        x2: x,
        y: 0,
        size: 10,
        speedx: 0,
        speedy: 0,
        h: 0,
        kind: "rect",
        r:0,
        strokeColor: rgb(sticky(random(50,255), 40)),
        fillColor: rgba(sticky(random(50,255), 40)),
        strokeWeight: 4,
        size: 8,
        me: i,
        flip: dir
    }
    dir *=-1;
    particles.push(particle);
}



draw = function() {
  ctx.background(0);
  for (var i = 0; i < particles.length; i++) {
     var f  = Sound.mapRawSound(i, particles.length *2, 1, 20);
    particles[i].speedx = f;
    particles[i].r = tween(particles[i].r, f/10*particles[i].flip, 10);
    particles[i].size = 5+tween(particles[i].size,f, 10);
  }

  if (stage == 0){
    moveParticles0();
  } else if (stage == 1){
    moveParticles1();
  } else if (stage == 2){
    moveParticles2();
  } else if (stage == 3){
    moveParticles3();
  }

  if(chance(5555)) stage = 2;
  if(chance(5555)) stage = 3;
  //console.log(stage);
}

function moveParticles3(){
  for (var i = 0; i < particles.length; i++) {
    particle = particles[i];
    ctx.save();
    ctx.translate(particle.x, height/2);
    //ctx.rotate(particle.r);
    particle.x = Math.sin((particle.x + particle.speedx)/20)*w;
    ctx.fillStyle= particle.fillColor;
    ctx.fillRect(particle.x-particle.size/2, -height/2-200, particle.size, h+200);
    ctx.restore();
  };
}

function moveParticles1(f){
  for (var i = 0; i < particles.length; i++) {
    particle = particles[i];
    particle.size = 8;
    ctx.fillStyle= particle.fillColor;
    particle.x = (tween(particle.x,(particle.x + particle.speedx*20),10))%w;

    ctx.fillRect(particle.x, 0, particle.size, h);
    ctx.restore();
  };
  if (chance(500))
    { stage = 2;

    }
}

function moveParticles2(f){
  for (var i = 0; i < particles.length; i++) {
    particle = particles[i];
    particle.size = particle.speedx*20;
    ctx.fillStyle= particle.fillColor;
    particle.x = (tween(particle.x,(particle.x + particles[0].speedx*20),10))%w;

    ctx.fillRect(particle.x, 0, particle.size, h);
    ctx.restore();
  };
  if (chance(300))  stage = 3;
}

function moveParticles0(){
  for (var i = 0; i < particles.length; i++) {
    particle = particles[i];
    particle.size = 8;
    ctx.fillStyle= particle.fillColor;
    if (particle.h < h+20) {particle.h += 5; } else {
    if (chance(1500))  stage = 1;  }
    ctx.fillRect(particle.x-particle.size/2, 00, particle.size, particle.h);
    ctx.restore();
  };
}


}();
