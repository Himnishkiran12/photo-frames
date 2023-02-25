function preload(){
    
}
function setup(){
canvas = createCanvas(1000,700);
canvas.position(130,210);
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,50,50,900,600);
fill(210,105,30);
stroke(210,105,30);
circle(50,50,20);
circle(950,50,20);
circle(50,650,20);
circle(950,650,20);
fill(139,69,19);
stroke(139,69,19);
rect(60,45,880,10);
rect(60,645,880,10);
rect(45,59,10,580);
rect(945,59,10,580);
}
function take_snapshot(){
save("isthisyou.png");
}