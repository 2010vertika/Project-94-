 var firebaseConfig = {
  apiKey: "AIzaSyDdnBTZMAO7AGhk5m5qbIhZuYg03D8gm_g",
  authDomain: "c-94-project-5d74e.firebaseapp.com",
  databaseURL: "https://c-94-project-5d74e-default-rtdb.firebaseio.com",
  projectId: "c-94-project-5d74e",
  storageBucket: "c-94-project-5d74e.appspot.com",
  messagingSenderId: "1089003919662",
  appId: "1:1089003919662:web:f61ab20bd2f7b150c602bf"
};

firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = "Welcome " + username + "!";

function add_room() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding the room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("room_name -" + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "<hr> </div>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}


