
var activities=[];
var mode;
var current;
//This function checks if the conditions of the input text are satisfied
function checkConditions(){
  //Grab elements from the input form
  var items = document.getElementById("formnew").value;
  //Check if the length of input is greater than 5
  if(items.length<3){
    alert("Please enter a longer activity");
    var items = document.getElementById("formnew").value=" ";
  }
  //Check if the length of input is smaller than 5
  else if(items.length>30){
    alert("Please enter a shorter activity");
    var items = document.getElementById("formnew").value=" ";
  }
  //Continue to add to the list if the conditions are satisfied
  else{
    var i;
    for (i = 0; i < activities.length; i++) {
          if(items==activities[i]){
            alert("Item already exists!!We dont allow cheater!!");
            console.log("Item already exists!!We dont allow cheater!!");
            return;
    }
  }


  //Create elements
  addItem()

  }
}


function addItem(){
  //Grab the input from the form
  var items = document.getElementById("formnew").value;
  //Add the input into the array of activities
  activities.push(items);
  localStorage.setItem("test",JSON.stringify(activities));

  var element = document.createElement("li");
  var element2 =document.createElement("button");
  var element3 =document.createElement("button");
  var element4 = document.createElement("span");
  //Create Nodes
  var text = document.createTextNode(items);
  var text2 = document.createTextNode("Edit");
  var text3 = document.createTextNode("Remove");
  //Add classNames to elements
  element2.className = "editbutton";
  element3.className = "newbutton";
  element4.className ="activity";
  //Add children to elements
  element.appendChild(element4);
  element.appendChild(element3);
  element.appendChild(element2);
  element2.appendChild(text2);
  element3.appendChild(text3);
  element4.appendChild(text);
  document.getElementById("listitems").appendChild(element);
  //Set value of form to empty space
  var items = document.getElementById("formnew").value=" ";
  //Add addEventListener to created buttons and spans(elements)
  var buttons = document.getElementsByClassName("newbutton");
  var edit = document.getElementsByClassName("editbutton");
  var spans = document.getElementsByClassName("activity");
  //Loop over all elements and add listeners
  var i;
  for (i = 0; i < edit.length; i++) {
    console.log("addEventListenertoEdit");
    edit[i].addEventListener("click",onEdit);
    spans[i].addEventListener("click",onCheck);
    buttons[i].addEventListener("click",onClose);
  }
  console.log(activities);
  //window.location.reload();

}


//This function adds html/items to the To-do-list
function addHtml(){
  activities = JSON.parse(localStorage.getItem("test"));
  console.log(activities);

  for(var index in activities){
  var element = document.createElement("li");
  var element2 =document.createElement("button");
  var element3 =document.createElement("button");
  var element4 = document.createElement("span");
  //Create Nodes
  var text = document.createTextNode(activities[index]);
  var text2 = document.createTextNode("Edit");
  var text3 = document.createTextNode("Remove");
  //Add classNames to elements
  element2.className = "editbutton";
  element3.className = "newbutton";
  element4.className ="activity";
  //Add children to elements
  element.appendChild(element4);
  element.appendChild(element3);
  element.appendChild(element2);
  element2.appendChild(text2);
  element3.appendChild(text3);
  element4.appendChild(text);
  document.getElementById("listitems").appendChild(element);
  //Set value of form to empty space
  var items = document.getElementById("formnew").value=" ";
  //Add addEventListener to created buttons and spans(elements)
  var buttons = document.getElementsByClassName("newbutton");
  var edit = document.getElementsByClassName("editbutton");
  var spans = document.getElementsByClassName("activity");
  //Loop over all elements and add listeners
  var i;
  for (i = 0; i < edit.length; i++) {
    console.log("addEventListenertoEdit");
    edit[i].addEventListener("click",onEdit);
    spans[i].addEventListener("click",onCheck);
    buttons[i].addEventListener("click",onClose);
  }
  console.log(activities);
  //window.location.reload();

}
}

//This function checks activites if they are pressed on by a mouse
function onCheck(){
  //Take all objects with className activity
  var close = document.getElementsByClassName("activity");
  var i;
  //Check if they are already checked
  if(mode==" "){
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function(){
      this.style.textDecoration = "line-through";
      }
    }
  //Change the mode
  mode = "checked";
}
// If already checked uncheck the item
else if(mode="checked"){
  for (i = 0; i < close.length; i++) {

      close[i].onclick = function(){
      this.style.textDecoration = "none";
      }
  }
  //Change the mode
  mode = " ";
  }

}

//This function removes an item from the list once it is pressed on
function onClose(){
  //Collect all delete/remove buttons buttons
  var remove = document.getElementsByClassName("newbutton");
  //Loop over all the buttons and look for the one which has been clicked
  var j;
  for (j = 0; j < remove.length; j++) {
    //If the button is found call the funtion()
    remove[j].onclick = function(j){
    var div = this.parentElement;
    div.style.display = 'none';
    console.log(div.firstChild.innerText);
    activities = JSON.parse(localStorage.getItem("test"));

    for(var i in activities){
      if(activities[i]===div.firstChild.innerText){
        activities.splice(i,1);
        localStorage.setItem("test",JSON.stringify(activities));
      }
    }
    console.log(activities);
  }
  }
}

function onEdit(){
  activities = JSON.parse(localStorage.getItem("test"));
  var close = document.getElementsByClassName("editbutton");
  var i;

  for (i = 0; i < close.length; i++) {
    //if(activities[i]== localStorage)
      close[i].onclick = function(){
      var div = this.parentElement;

      document.getElementById("formnew").value = div.firstChild.innerText;
      var edit = document.getElementsByClassName("editbutton");
      activities.splice(i,1);

      var j;
      for (j = 0; j < edit.length; j++) {
        //if(activities[i]== localStorage)
          edit[j].onclick = function(j){
          var parent = this.parentElement;
          div.firstChild.innerText=document.getElementById("formnew").value;
          localStorage.push(document.getElementById("formnew").value);
        }
      }

          var editb = document.getElementsByClassName("editbutton");
          var i;
          for(var i in editb ){
            editb[i].onclick = function(){
              console.log("editb");
              var parent = this.parentElement;
              div.firstChild.innerText=document.getElementById("formnew").value;
              activities.splice(i,1);
              localStorage.setItem("test",JSON.stringify(activities));
            }
          }



    }
  }

}



window.onload = function(){
  console.log("reload");
  addHtml();
}
