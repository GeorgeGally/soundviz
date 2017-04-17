rbvj = function(){

  var particles = [];
  ctx.lineWidth = 1;
  var gx = randomInt(2, 15);
  var gy = 25;

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
      var vol = Sound.mapSound(i, engine.particles.length, 0, 10);
      ctx.fillStyle = rgb(0);
      ctx.fillRect(p.pos.x - (grid.spacing_x -10)/2, p.pos.y, grid.spacing_x -5, 1.5 * Math.abs(vol));
      p.pos.y +=1;
      if(p.pos.y > h) p.pos.y = 0;
    }

  }

// draw = function() {
//
//    ctx.background(255);
//    ctx.fillStyle = rgb(0);
//    for (var i=0; i < engine.particles.length; i++) {
//      var p = engine.particles[i];
//      console.log(p);
//      var vol = Sound.mapSound(i, particles.length, 0, 12);
//      //var vol = map(Sound.spectrum[i%particles.length], 0, 100, 0, 12);
//      ctx.fillRect(p.pos.x, p.pos.y, grid.spacing_x - 5, 2 * Math.abs(vol));
//      p.pos.y +=1;
//      if(p.pos.y > h) p.pos.y = 0;
//    }
//
// }

}();
