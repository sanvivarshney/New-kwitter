
  var firebaseConfig = {
    apiKey: "AIzaSyDLAWzoMIXbfh7ws2CAWk8lqg4AF1igi38",
    authDomain: "kwitter-project-7abac.firebaseapp.com",
    databaseURL: "https://kwitter-project-7abac-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-7abac",
    storageBucket: "kwitter-project-7abac.appspot.com",
    messagingSenderId: "239321335416",
    appId: "1:239321335416:web:3373c661041ba29ba38f8d",
    measurementId: "G-NLZ8KS2DJ3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

      document.getElementById("trending_rooms").innerHTML += room_name;

      localStorage.setItem("room_name", room_name)

      window.location = "kwitter_page.html";
    }


   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room name -" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html"
  }

  function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}