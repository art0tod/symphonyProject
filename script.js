console.log("Start!");
console.log("done", location.href, location.port, location.protocol, location.hostname, location.host);
let ver = document.getElementById("VER");
curVer = "Ver. 0.1.10_(21.05.22)";
ver.innerHTML = curVer;

//Логин--------------------
let lgScreen = document.getElementById("LogInScreen");
let btn_Go = document.getElementById("sub");
let LgForm = document.forms.login;
let LgInput = LgForm.elements.ans;
btn_Go.addEventListener('mousedown', function() {
  console.log("go!");
  console.log(LgInput.value);
  if (LgInput.value == "Клоун" || LgInput.value == "Кулон" || LgInput.value == "Колун") {
    lgScreen.style.display = "none";

    function script() {
      alert(`Сайт всё ещё находится в разработке!\nВерсия сайта ${curVer}`, location.href, location.port, location.protocol, location.hostname, location.host)
    }
    setTimeout(script, 2500)
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