rbvj = function(){

var vol = 0;
ctx.fillStyle = rgb(0);
var gx = randomInt(3, 25);
var gy = randomInt(3, 25);

var grid = new Grid(gx, gy);
var engine = new particleEngine(gx * gy, grid);

function reset() {
  console.log("reset");
  gx = randomInt(4, 115);
  gy = randomInt(4, 200);
  grid = new Grid(gx, gy);
  engine = new particleEngine(gx * gy, grid);
}


draw = function() {
  ctx.background(255);
  if (chance(400)) reset();

  for (var i=0; i < engine.particles.length; i++){

    var p = engine.particles[i];
    vol = Sound.mapSound(i%100, 100, 1, grid.spacing_x-1) - random(0.3);
    //vol = Sound.mapRawSound(i, engine.particles.length * 2, 0, 6);
    p.r = tween(p.r, vol, 2);
    ctx.fillRect(p.pos.x, p.pos.y, p.r, grid.spacing_y -2);
    //if (chance(10)) p.pos.x+=1;
    //if(p.pos.x + p.r > w) p.pos.x = 0;
  }

}

}();
