
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyD-9xH26a9lFLy1qhOOTp-Js4RIg3KAX-Y",
  authDomain: "classt-c79fa.firebaseapp.com",
  databaseURL: "https://classt-c79fa-default-rtdb.firebaseio.com",
  projectId: "classt-c79fa",
  storageBucket: "classt-c79fa.appspot.com",
  messagingSenderId: "831668499944",
  appId: "1:831668499944:web:c67b1dd316d2c18e6d605d",
  measurementId: "G-B19TRQ157E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

