const cnv = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 250;
let y = 200;
let r1 = 100;
let r2 = 100;
let m1 = 10;
let m2 = 10;
let a1 = Math.PI/2;
let a2 = Math.PI/2;
let a1_v = 0;
let a2_v = 0;
let g = 1;


cnv.width = 500;
cnv.height=500;
window.onload = function(){
    init();
}
function init(){
    loop();
}
function draw(){
    ctx.clearRect(0,0,cnv.width,cnv.height);
    draw(ctx);
}

function loop(){
    ctx.clearRect(0,0,cnv.width,cnv.height);
    window.requestAnimationFrame(loop,cnv);
    draw();
}


function draw(){
    let num1 = -g*(2*m1+m2)*Math.sin(a1);
    let num2 = -m2*g*Math.sin(a1-2*a2);
    let num3 = -2*Math.sin(a1-a2)*m2;
    let num4 = a2_v*a2_v*r2+a1_v*a1_v*r1*Math.cos(a1-a2);
    let den = r1*(2*m1+m2-m2*Math.cos(2*a1-2*a2));
    let a1_a = (num1+num2+num3*num4)/den
    
    num1 = 2*Math.sin(a1-a2);
    num2 = (a1_v*a1_v*(m1+m2));
    num3 = g*(m1+m2)*Math.cos(a1);
    num4 = a2_v*a2_v*r2*m2*Math.cos(a1-a2);
    den = r2*(2*m1+m2-m2*Math.cos(2*a1-2*a2));
    let a2_a = (num1*(num2+num3+num4))/den
    
let x1 = x+r1*Math.sin(a1);
let y1 = y+r1*Math.cos(a1);

let x2 = x1+r2*Math.sin(a2);
let y2 = y1+r2*Math.cos(a2);





ctx.beginPath();
ctx.moveTo(x,y)
ctx.lineTo(x1,y1);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x1+x,y1+y);
ctx.arc(x1,y1,m1,0,2*Math.PI)
ctx.fill()

ctx.beginPath()
ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.stroke()

ctx.beginPath();
ctx.moveTo(x2,y2);
ctx.arc(x2,y2,m2,0,2*Math.PI)
ctx.fill();

a1_v += a1_a;
a2_v += a2_a;
a1 += a1_v
a2 += a2_v




}