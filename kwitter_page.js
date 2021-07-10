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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("msg_output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 console.log(firebase_message_id);
 console.log(message_data);
 Name = message_data['name'];
 message = message_data['message'];
 like = message_data['like'];
 name_with_tag = "<h4>" + Name + "<img class = 'user_tick' src='tick.png'></h4>";
 message_with_tag = "<h4 class='message'>"+message+"</h4>";
 like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+" value ="+like+" onclick = 'updateLike(this.id)' >";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like + "</span></button><hr>";

 row = name_with_tag + message_with_tag + like_button + span_with_tag ;
 document.getElementById("msg_output").innerHTML += row;


//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_like = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
      

}

function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}