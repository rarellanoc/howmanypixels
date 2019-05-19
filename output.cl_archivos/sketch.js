
var scale;

var ns;



var so = 'H,o,w,_,m,a,n,y,_,p,i,x,e,l,s,_,d,o,_,y,o,u,_,r,e,a,l,l,y,_,n,e,e,d,?,?,?,?';

var s;
function setup() {
  // put setup code here



  s = splitTokens(so,',');

  scale = 15;
  var canvas = createCanvas(5*scale,7* scale);
  canvas.parent('sketch-holder');

  fill(0);
  stroke(0);
  pixelDensity(1);
  background(255);

  ns = 0;


}

function draw() {
  // put drawing code here

  background(255);

  var res = scale/ 3;
  textSize(7*scale);

  frameRate(5);


  fill(0);
  textAlign(CENTER, BASELINE);
  text(s[ns], width/2, height - scale);

  console.log(s[ns]);



  loadPixels();


  for(var i = 0; i < width; i ++){

    for(var j = 0; j < height; j++){


    		var x = i * res
    		var y = j * res;



    		var pos = (i * res + (j *res * width)) * 4;

    		if (pixels[pos] < 30) {

    			//console.log('white')
    			fill(255,255,255);
    			//stroke(0);

    			rect(x, y, res, res);


    		} else {

	    		stroke(255);
	    		fill(0,0,0);
	    		rect(x, y, res, res);
	    		//console.log('red')


    		}

      		
      
  		}
    }
  


    if (ns < s.length) {

    	ns = ns + 1;
    	console.log(ns);
    	//console.log(s.length);

    } else {


    	ns = 0;
    }
  //updatePixels();

}