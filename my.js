var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width  = window.innerWidth;
var height = window.innerHeight;
canvas.height = height;
canvas.width = width;

ctx.fillRect(100,100,100,100);

canvas.addEventListener('mousedown', function(e) {
    this.down = true;   
    this.X = e.pageX ;
    this.Y = e.pageY ;
    this.color = rgb();
}, 0);
canvas.addEventListener('mouseup', function() {
    this.down = false;          
}, 0);
canvas.addEventListener('mousemove', function(e) {

    if(this.down) {
         with(ctx) {
            ctx.lineCap = "round";
            beginPath();
            moveTo(this.X, this.Y);
            lineTo(e.pageX , e.pageY );
            globalCompositeOperation = "destination-out";
            strokeStyle = "rgba(0,0,0,1)";
            ctx.lineWidth = 10;
            ctx.lineHeight = 20;
            stroke();
         }
         this.X = e.pageX ;
         this.Y = e.pageY ;
    }
}, 0);