var max= 0;
var list= [
      ];
    //create a function to reserve a room with name
    function reserveOne() {
      //open input box for name
    
    var guestName= document.getElementById('name').value;
    //clear the input box for a blank one
    document.getElementById('name').value= "";
    //add new names to the end of the current
    list.push(guestName);
    //take the name and add it to the array 'list'
    if (list.length < 5) {
      document.getElementById('people').innerHTML = list;
    }
    else {
      //I will make the box dissapear when there are too many people
      document.getElementById('name').style.visibility = "hidden";
    }
      
    }
    function everyoneOutRoomOne() {
      list = [];
      document.getElementById('people').innerHTML = list;
      window.alert("Room Clear");
      //Show box again when the room is clear
      document.getElementById('name').style.visibility = "visible";
    }
    