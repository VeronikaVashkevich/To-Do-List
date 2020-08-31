	//id of task - saveTask
	//id of time - saveTime
	//id of meet - savemeet
	//localStorage.setItem("secondTask", document.getElementById(id).value);

function add(id) {
		if(document.getElementById(id).id==="saveTask1") 
		{
			localStorage.setItem("firstTask", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveTask2") 
		{
			localStorage.setItem("secondTask", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveTask3") 
		{
			localStorage.setItem("thirdTask", document.getElementById(id).value);
		}

		//

		if(document.getElementById(id).id==="saveTime1") 
		{
			localStorage.setItem("firstTime", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveTime2") 
		{
			localStorage.setItem("secondTime", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveTime3") 
		{
			localStorage.setItem("thirdTime", document.getElementById(id).value);
		}

		//

		if(document.getElementById(id).id==="saveMeet1") 
		{
			localStorage.setItem("firstMeet", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveMeet2") 
		{
			localStorage.setItem("secondMeet", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveMeet3") 
		{
			localStorage.setItem("thirdMeet", document.getElementById(id).value);
		}
		
		//

		if(document.getElementById(id).id==="saveName1") 
		{
			localStorage.setItem("firstName", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveName2") 
		{
			localStorage.setItem("secondName", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveName3") 
		{
			localStorage.setItem("thirdName", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveName4") 
		{
			localStorage.setItem("fourthName", document.getElementById(id).value);
		}

		//

		if(document.getElementById(id).id==="saveTel1") 
		{
			localStorage.setItem("firstTel", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveTel2") 
		{
			localStorage.setItem("secondTel", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveTel3") 
		{
			localStorage.setItem("thirdTel", document.getElementById(id).value);
		}
		if(document.getElementById(id).id==="saveTel4") 
		{
			localStorage.setItem("fourthTel", document.getElementById(id).value);
		}
	}
function load() {
	document.getElementById("saveTask1").innerHTML=localStorage.getItem("firstTask");
	document.getElementById("saveTask2").innerHTML=localStorage.getItem("secondTask");
	document.getElementById("saveTask3").innerHTML=localStorage.getItem("thirdTask");

	//

	document.getElementById("saveTime1").value=localStorage.getItem("firstTime");
	document.getElementById("saveTime2").value=localStorage.getItem("secondTime");
	document.getElementById("saveTime3").value=localStorage.getItem("thirdTime");

	//
	
	document.getElementById("saveMeet1").value=localStorage.getItem("firstMeet");
	document.getElementById("saveMeet2").value=localStorage.getItem("secondMeet");
	document.getElementById("saveMeet3").value=localStorage.getItem("thirdMeet");

	//

	document.getElementById("saveName1").value=localStorage.getItem("firstName");
	document.getElementById("saveName2").value=localStorage.getItem("secondName");
	document.getElementById("saveName3").value=localStorage.getItem("thirdName");
	document.getElementById("saveName4").value=localStorage.getItem("fourthName");
	
	//

	document.getElementById("saveTel1").value=localStorage.getItem("firstTel");
	document.getElementById("saveTel2").value=localStorage.getItem("secondTel");
	document.getElementById("saveTel3").value=localStorage.getItem("thirdTel");
	document.getElementById("saveTel4").value=localStorage.getItem("fourthTel");
}