let red = false;
let starter = false;

window.onload=function(){
	let a = document.getElementById("boundary1");
	let b = document.querySelectorAll(".boundary") ;
	let status = document.getElementById("status");
	let maze = document.getElementById("maze");
	let end= document.getElementById("end");

	function changeBoundary1(){
	

	b.forEach(function(item,index){
		b[index].addEventListener("mouseover",function(){
		
		b.forEach((item,index)=>{
			item.classList.add("youlose");
			red = true;
		});
		status.innerHTML = "You Lose";

	});
			});
	



	
}// end function

function ender(){
	
	
	end.addEventListener("mouseover",()=>{

			if (red === false){
				status.innerHTML = "You Win";
			}
			
	});
									
}//end function


function start(){
	
	let start = document.getElementById("start");
	start.addEventListener("click",function(){
		status.innerHTML = "Move your mouse over the \"S\" to begin.";
		let a = document.getElementById("boundary1");
		starter = true;
		if  (red === true){
			//jndsjn
				let a = document.getElementById("boundary1");
	let b = document.querySelectorAll(".boundary") ;
	b.forEach(function(item,index){
		item.classList.remove("youlose");
		red = false;
		
	});
			//sdd
		}
		
	});
	
}


function ifLeaveArea(){
	
	maze.addEventListener("mouseleave",function(){
		
		if (starter === true){
		
		status.innerHTML = "You Lose";
		changeColor();
							}
	});
}

function changeColor(){
	b.forEach(function(item,index){
		
		item.classList.add("youlose");
		

	
			});
	red = true;
}




	changeBoundary1();
	ifLeaveArea();
	ender();
	start();


}






