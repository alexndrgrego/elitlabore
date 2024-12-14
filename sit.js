const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(50, 75);
ctx.lineTo(150, 75);
ctx.lineTo(200, 125);
ctx.stroke();
