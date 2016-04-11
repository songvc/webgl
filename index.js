var canvas = document.createElement('canvas');
canvas.width = window.innterWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

var gl = canvas.getContext('wengl');

gl.clearColor(1,0,1,1);
gl.clear(gl.COLOR_BUFFER_BIT);
