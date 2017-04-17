
rbvj = function(){

var sz = 14;

var Wave = function(_num_particles, _x, _y, _me) {

	ctx.strokeStyle = rgba(0,0,0,0.8);
	var particles = [];
	var radius = 50;
	var rot = 0;
	var num_particles = _num_particles;
	var x = _x;
	var y = _y;
	var me = _me;

	this.setup = function(){
		for (var i = 0; i < num_particles; i++) {
			var c = random(225);
			//var c = 0;
		    var cc = rgba(c, c, c, 1);
			this.addParticle(x, y, cc, me);
		}
	}

	this.draw = function(){
		this.moveParticles();
	}

	this.addParticle = function(_x, _y, _colour, _me){
		var particle = {
			x: _x,
			y: _y,
			c: _colour,
			me: _me,
			stroke_width: 4,
			speedx: 0,
			speedy: random(2,20),
			sz: radius+ _me*26,
			angle: 0
		}
		particles.push(particle);
	}


	this.moveParticles = function(){

		for (var i = 0; i < particles.length; i++) {

			p = particles[i];

			//DISTRIBUTED MAPPED SOUND VALUE
			var s = Sound.mapSound(p.me, num_waves);
			p.speedx = tween(p.speedx, map(s, 0, 255, 0, 360)-180, 20);
			var arc =  p.speedx * Math.PI;
			p.angle += p.speedx/50;

			// DRAW ARCS
			ctx.translate(w/2, h/2);
			ctx.rotate(radians(p.angle+180));

			ctx.fillStyle = p.c;
			ctx.fillEllipse(0, s, sz, sz);
			ctx.fillStyle = p.c;
			ctx.fillEllipse(s, 0, sz, sz);

			ctx.fillStyle = p.c;
			ctx.fillEllipse(0, -s, sz, sz);

			ctx.fillStyle = p.c;
			ctx.fillEllipse(-s, 0, sz, sz);

			ctx.rotate(radians(-p.angle-180));
			ctx.translate(-w/2, -h/2);

		};

	}

this.setup();

}


// SETUP WAVES CLASS

var waves = [];
var grid_w = 20;
var grid_h = 20;
var num_waves = grid_w * grid_h;
var spacing_x = w/grid_w;
var spacing_y = h/grid_h;
var grid = makeGrid(grid_w, grid_h);
var num_particles = 2;

for (var i = 0; i < num_waves; i++) {
	waves[i] = new Wave(num_particles, grid[i][0]*spacing_x+spacing_x/2,grid[i][1]*spacing_y + spacing_y/2, i);
};



// DRAW WAVES CLASS

draw = function() {
	ctx.background(255, 0.8);
	for (var i = 0; i < num_waves; i++) {
		waves[i].draw();
	};
}

}();
