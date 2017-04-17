rbvj = function(){

var grid_w = 80;
var grid_h = 50;
var grid = createGrid(grid_w, grid_h);
var mode = randomInt(2)
var blocks = new particleEngine(grid.length-1);
var speed = random(1+i/2);
for (var i = 0; i < blocks.particles.length; i++) {
  var b = blocks.particles[i];
  b.position = new Vector(grid[i].x, grid[i].y);
  b.c =  (chance(2)) ? rgb(255): rgb(0);
  b.w = w/grid_w;
  b.h = h/grid_h;
  if (b.me > grid_w) {
    b.speed = blocks.particles[b.me-grid_w].speed;
  } else{
    if (i%4 == 0 && i > 4) {
      b.speed = blocks.particles[b.me-4].speed;
    } else {
      speed = random(1+i/100);
      b.speed = new Vector(0,speed);
    }

  }

}

draw = function() {
  ctx.background(0);
  blocks.draw();
  for (var i = 0; i < blocks.particles.length; i++) {
    var b = blocks.particles[i];
    var s = Sound.mapSound(i, blocks.particles.length*2, 0, 255);
    ctx.fillStyle = rgb(s);
    if(mode == 1) {
      ctx.fillRect(b.position.x, b.position.y, b.h-5, b.h-5);
    } else {
      ctx.fillEllipse(b.position.x, b.position.y, b.h-5, b.h-5);
    }

  }
}
}();
