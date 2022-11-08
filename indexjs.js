// Firebase inicializar
const firebaseConfig = {
    apiKey: "AIzaSyDQNrWeyBnvS6R00ozh2_W6acPOUujvsLA",
    authDomain: "loginresgister-7f6b2.firebaseapp.com",
    projectId: "loginresgister-7f6b2",
    storageBucket: "loginresgister-7f6b2.appspot.com",
    messagingSenderId: "761823578464",
    appId: "1:761823578464:web:cc3f8d50b47079b30bb605"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
  
  //começa js
document.getElementById('registerForm').addEventListener('submit', submitForm);

var InfoRef = firebase.database().ref();

function submitForm(e) {
        e.preventDefault();
        //Pega valores
        var name= getIdValue('name');
        var email= getIdValue('email');
        var psw = getIdValue('psw');
        var pswrepeat = getIdValue('pswrepeat');

        saveInfo(name, email, psw, pswrepeat);
        //console.log(name);

}

function getIdValue(id) {
    return document.getElementById(id).value;

}

//Salva informações no firebase
function saveInfo(name, email, psw, pswrepeat){
    var newInfoRef = InfoRef.push();
    newInfoRef.set({
        name:name,
        email:email,
        psw:psw,
        pswrepeat:pswrepeat
    });
}