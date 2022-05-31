console.log("Start!");
console.log("done", location.href, location.port, location.protocol, location.hostname, location.host);

//Текущая версия-----------
let ver = document.getElementById("VER");
curVer = "Ver. 0.1.13_(30.05.22)";
ver.innerHTML = curVer;

//Логин--------------------
let lgScreen = document.getElementById("LogInScreen");
let btn_Go = document.getElementById("sub");
let LgForm = document.forms.login;
let LgInput = LgForm.elements.ans;
let LgError = document.getElementById("LgError");
let closeNote = document.getElementById("closeNote");

document.addEventListener('keydown', function(event) {
  if (event.code === "Enter"){
    console.log("go!");
    console.log(LgInput.value);
    if (LgInput.value.toLowerCase().replace(/\s+/g, '') === "клоун" || LgInput.value.toLowerCase().replace(/\s+/g, '') === "кулон" || LgInput.value.toLowerCase().replace(/\s+/g, '') === "колун") {
      // lgScreen.classList.add("Anim_Hide");
      lgScreen.style.display = "none";
      function showNote(message) {
        document.getElementById("Note").classList.add("AnimNote");
        closeNote.addEventListener('click', function (message) {
          document.getElementById("Note").style.display = "none";
        })
      }
      setTimeout(showNote, 1500)
    }
    else{
      LgError.style.display = "flex";
    }
  }
})

btn_Go.addEventListener('click', function () {
  console.log("go!");
  console.log(LgInput.value);
  if (LgInput.value.toLowerCase().replace(/\s+/g, '') === "клоун" || LgInput.value.toLowerCase().replace(/\s+/g, '') === "кулон" || LgInput.value.toLowerCase().replace(/\s+/g, '') === "колун") {
    // lgScreen.classList.add("Anim_Hide");
    lgScreen.style.display = "none";
    function showNote(message) {
      document.getElementById("Note").classList.add("AnimNote");
      closeNote.addEventListener('click', function (message) {
        document.getElementById("Note").style.display = "none";
      })
    }
    setTimeout(showNote, 1500)
  }
  else{
    LgError.style.display = "flex";
  }
})
//-------------------------

// function pass() {
//   let nameUser = prompt ("Введите кодовое слово.\nСпрашивать у админа.");
//   let password = "Кулон";
//   let password2 = "Колун";
//   let password3 = "Клоун";
//   if (nameUser == password || nameUser == password2 || nameUser == password3) {
//     if (nameUser) { 
//         alert("Добро пожаловать в агенство клоунов, Клоунище!");  document.getElementById("nameUser").innerHTML = nameUser +", добро пожаловать на сайт!";
//       }
//     else {
//         document.getElementById("nameUser").innerHTML = "Гость, добро пожаловать на сайт!";
//       }
//     }
//   else {
//     pass();
//   }
// }