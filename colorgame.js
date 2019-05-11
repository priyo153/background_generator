var disp_boxArray=document.querySelectorAll(".box");
var disp_red=document.querySelectorAll("span")[0];
var disp_green=document.querySelectorAll("span")[1];
var disp_blue=document.querySelectorAll("span")[2];
var disp_header=document.querySelector(".header");

var disp_msg=document.querySelector(".msg");
var disp_reset=document.querySelector("#reset");
var disp_easy=document.querySelector("#easy");
var disp_hard=document.querySelector("#hard");

var gameover=false;
let status="hard";
var selected=0;
var count=6;

class box{
	index=0;
	 red=0;
	 green=0;
	 blue=0;
	 vsible=0;

	generate(){
		this.red= Math.floor((Math.random()*255));
		this.green=Math.floor((Math.random()*255));
		this.blue=Math.floor((Math.random()*255));
		this.visible=true;
	}


}

let boxArray = [];

disp_hard.classList.add("selected");
disp_easy.classList.remove("selected");

disp_reset.addEventListener("click",function(){

	

	if(status==="hard"){

		disp_hard.classList.add("selected");
		disp_easy.classList.remove("selected");
		count=6;
		reset();
	}

	else{

		disp_hard.classList.remove("selected");
		disp_easy.classList.add("selected");
		count=3;
		reset();


	}

});

disp_easy.addEventListener("click",function(){


	disp_hard.classList.remove("selected");
	disp_easy.classList.add("selected");
	status="easy";
	count=3;
	reset();
});

disp_hard.addEventListener("click",function(){

	disp_hard.classList.add("selected");
	disp_easy.classList.remove("selected");
	status="hard";
	count=6;
	reset();
});


reset();

function reset(){


for(i=0;i<6;i++){
	disp_boxArray[i].removeEventListener("click",function(){});
}

boxArray=[];
gameover=false;
disp_header.style.backgroundColor="#5966D7"
selected=Math.floor((Math.random()*count-1)+1);
disp_msg.innerHTML="Pick a color!!!"

if(count===3)
{
		for(j=3;j<6;j++)
		{
			disp_boxArray[j].style.backgroundColor="#2D2E37";
		}
}


for(let i=0;i<count;i++){

    
	boxArray.push(new box());
	boxArray[i].generate();
	boxArray[i].index=i;
	disp_boxArray[i].style.backgroundColor="rgb("+boxArray[i].red+","+boxArray[i].green+","+boxArray[i].blue+")";




	disp_boxArray[i].addEventListener("click",function(){
		

		if(gameover===false)
		if(boxArray[i].index===selected){

			for(j=0;j<count;j++){
				disp_boxArray[j].style.backgroundColor="rgb("+boxArray[i].red+","+boxArray[i].green+","+boxArray[i].blue+")";
				disp_header.style.backgroundColor="rgb("+boxArray[i].red+","+boxArray[i].green+","+boxArray[i].blue+")"
				gameover=true;

				disp_msg.innerHTML="Correct!!!"
			}
		}
		else{

			this.style.backgroundColor="#2D2E37";
			disp_msg.innerHTML="Try Again!!!"


		}




		
		
	});



}


disp_red.innerHTML= boxArray[selected].red;
disp_green.innerHTML= boxArray[selected].green;
disp_blue.innerHTML= boxArray[selected].blue;




}