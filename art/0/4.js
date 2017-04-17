rbvj = function(){
var particles = [];

var vol = 0;
var gx = randomInt(2, 15);

ctx.lineWidth = 1;

var gy = Math.floor(h/6)

var grid = new Grid(gx, gy);
var engine = new particleEngine(gx * gy, grid);


function reset() {
  console.log("reset");
  gx = randomInt(2, 15);
  grid = new Grid(gx, gy);
  engine = new particleEngine(gx * gy, grid);
}


draw = function() {
  if (chance(200)) reset();
  ctx.background(255);
  for (var i=0; i < engine.particles.length; i++){
    var p = engine.particles[i];
    vol = Sound.mapRawSound(i, engine.particles.length *2, 0, 6);
    ctx.fillStyle = rgb(0);
    ctx.fillRect(p.pos.x - (grid.spacing_x -10)/2, p.pos.y, grid.spacing_x -10, vol);

  }

}

}();
