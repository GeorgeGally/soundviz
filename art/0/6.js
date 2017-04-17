rbvj = function(){

var circs = [];
var r = width/14;
var vol = 0;
ctx.strokeStyle = rgb(0);

var gx = randomInt(3, 25);
var gy = Math.floor(h/15);

var grid = new Grid(gx, gy);
var engine = new particleEngine(gx * gy, grid);


function reset() {
  console.log("reset");
  gx = randomInt(4, 15);
  grid = new Grid(gx, gy);
  engine = new particleEngine(gx * gy, grid);
  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.lw = random(45)
  }
}

reset();

draw = function() {
  ctx.background(255);
  if (chance(400)) reset();
  for (var i=0; i<engine.particles.length; i++){

    var p = engine.particles[i];
    vol = Sound.mapSound(i%100, 100, -4, 4) - random(0.3);
    if (vol > 0) p.pos.y = tween(p.pos.y, p.pos.y + vol, 10);
    if (p.pos.y > height) p.pos.y = 0;
    if (p.pos.y < 0) p.pos.y = height;
    ctx.lineWidth = p.lw;

      ctx.line(p.pos.x - grid.spacing_x/2, p.pos.y, p.pos.x + grid.spacing_x/2 - 5, p.pos.y);

  }

}
}();
