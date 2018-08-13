// tells the next image to appear

var tomatoNumber = 2;
var pullupcounter = 0;
var isFinished = false;	

function changeImage() {
	if(!isFinished){
		if (tomatoNumber==23){
			tomatoNumber = 1;
		}
    	var image = document.getElementById('myImage');
    	image.src = "img/"+ tomatoNumber +".png";
    	tomatoNumber ++;
   
   		pullupcounter = Math.round((tomatoNumber-1)/2);

   		//select counter

   		if(pullupcounter==11){
   			isFinished = true;
   		} else {
   			$("#pullupcounts").text(pullupcounter);
   		}//sete counter ele to tomatoNumber var
	}else {
		alert("Tomato Successfully Ripened");
	}

}
