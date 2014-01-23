// system job
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}


// funny color toggling
var color = '0000ff';
var wrapper = $('#photo_wrap');
function toggleColor() {
    $(wrapper).css('background-color', '#' + color);
    color = (color == '0000ff') ? '00ff00' : '0000ff';
}

setInterval(function() {
    toggleColor()
}, 200);

// canvas eraser job
var canvas = document.getElementById('magician');
var ctx = canvas.getContext('2d');
var width  = 375; var height = 500;
canvas.height = height; canvas.width = width;
var image = document.getElementById('real_photo');
var offset = $(canvas).offset();
offset.top = offset.top - height;
$(window).resize( function() {
    offset = $(canvas).offset();
    offset.top = offset.top - height;
});

with (ctx) {
    lineCap = "round";
    drawImage(image, 0, 0);
    globalCompositeOperation = "destination-out";
    lineWidth = 15;
    strokeStyle = "green";
}

image.remove();

canvas.addEventListener('mousedown', function(e) {
    this.down = true;
    this.X = e.pageX - offset.left;
    this.Y = e.pageY - offset.top;
}, 0);
canvas.addEventListener('mouseup', function() {
    this.down = false;          
}, 0);
canvas.addEventListener('mousemove', function(e) {
    if (this.down) {
        ctx.beginPath();
        ctx.moveTo(this.X, this.Y);
        ctx.lineTo(e.pageX - offset.left, e.pageY - offset.top);
        ctx.stroke();
        this.X = e.pageX - offset.left;
        this.Y = e.pageY - offset.top;
    }
}, 0);