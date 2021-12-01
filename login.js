const firebaseConfig = {
    apiKey: "AIzaSyCPstsVMO4zsYzw2XbFI5aRwy7-MBrf4DA",
    authDomain: "spartan-restaurant-contact.firebaseapp.com",
    projectId: "spartan-restaurant-contact",
    storageBucket: "spartan-restaurant-contact.appspot.com",
    messagingSenderId: "360773606800",
    appId: "1:360773606800:web:63518419cc0d63400e2715"
  };
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val();
});
function send(){
    var email = document.getElementById("email").value;
    var username = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var tel = document.getElementById("tel").value;

    detailsRef.push().set({
        email: email,
        name: username,
        message: message,
        tel: tel,
    });
}