
//  page transfred

document.getElementById("discover_something").addEventListener("click", function(){

     window.location.href = "./main.html"
})

// random collor
let changeBtn = document.querySelector("button");

changeBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = generateRandomColor();
});

function generateRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}


// time change

const now = new Date()
const time = now.toLocaleString()
document.getElementById("time_change").innerText = time


// button number -- 1
document.getElementById("Completed_btn_1").addEventListener("click", function(x){
    alert("board undated successully");

    
x.target.style.backgroundColor = "red";
x.target.disabled = true;


      
      
    const task = document.getElementById("Task_Assigned").innerText;
     const convertNumber = parseInt(task);

     const biyog = convertNumber - 1;
     document.getElementById("Task_Assigned").innerText = biyog;

     const navbarNumber = document.getElementById("navbar_number").innerText;
     const convertednumber = parseInt(navbarNumber);
     const sum = convertednumber + 1;
     document.getElementById("navbar_number").innerText = sum;

     if(biyog == 0){
        alert("All board undated successully ")
     }


       const now = new Date();
       const hours = now.getHours();
       const minutes = now.getMinutes();
       const secend = now.getSeconds();
       const timeSet =` ${hours}: ${minutes}: ${secend}`;
       const maincontainar = document.getElementById("Activity_log1");
       const fixMobile = document.getElementById("fix_mobile").innerText;
       const p = document.createElement("p");
       p.innerHTML = `you have complated the task <h1>${fixMobile}</h1>${timeSet}`;
       maincontainar.appendChild(p)
       
       
})
// button number -- 2
document.getElementById("Completed_btn_2").addEventListener("click", function(x){
    alert("board undated successully");
    x.target.style.backgroundColor = "red";
x.target.disabled = true;


    const task = document.getElementById("Task_Assigned").innerText;
     const convertNumber = parseInt(task);

     const biyog = convertNumber - 1;
     document.getElementById("Task_Assigned").innerText = biyog;

     const navbarNumber = document.getElementById("navbar_number").innerText;
     const convertednumber = parseInt(navbarNumber);
     const sum = convertednumber + 1;
     document.getElementById("navbar_number").innerText = sum;

     if(biyog == 0){
        alert("All board undated successully ")
     }
     const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const secend = now.getSeconds();
     const timeSet =` ${hours}: ${minutes}: ${secend}`;
     const maincontainar = document.getElementById("Activity_log2");
     const fixMobile = document.getElementById("fix_mobile").innerText;
     const p = document.createElement("p");
     p.innerHTML = `you have complated the task <h1>${fixMobile}</h1>${timeSet}`;
     maincontainar.appendChild(p)

})
// button number -- 3
document.getElementById("Completed_btn_3").addEventListener("click", function(x){
    alert("board undated successully");
    x.target.style.backgroundColor = "red";
x.target.disabled = true;


    const task = document.getElementById("Task_Assigned").innerText;
     const convertNumber = parseInt(task);

     const biyog = convertNumber - 1;
     document.getElementById("Task_Assigned").innerText = biyog;

     const navbarNumber = document.getElementById("navbar_number").innerText;
     const convertednumber = parseInt(navbarNumber);
     const sum = convertednumber + 1;
     document.getElementById("navbar_number").innerText = sum;

     if(biyog == 0){
        alert("All board undated successully ")
     }
     const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const secend = now.getSeconds();
     const timeSet =` ${hours}: ${minutes}: ${secend}`;
     const maincontainar = document.getElementById("Activity_log3");
     const fixMobile = document.getElementById("fix_mobile").innerText;
     const p = document.createElement("p");
     p.innerHTML = `you have complated the task <h1>${fixMobile}</h1>${timeSet}`;
     maincontainar.appendChild(p)

})
// button number -- 4
document.getElementById("Completed_btn_4").addEventListener("click", function(x){
    alert("board undated successully");
    x.target.style.backgroundColor = "red";
x.target.disabled = true;


    const task = document.getElementById("Task_Assigned").innerText;
     const convertNumber = parseInt(task);

     const biyog = convertNumber - 1;
     document.getElementById("Task_Assigned").innerText = biyog;

     const navbarNumber = document.getElementById("navbar_number").innerText;
     const convertednumber = parseInt(navbarNumber);
     const sum = convertednumber + 1;
     document.getElementById("navbar_number").innerText = sum;

     if(biyog == 0){
        alert("All board undated successully ")
     }
     const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const secend = now.getSeconds();
     const timeSet =` ${hours}: ${minutes}: ${secend}`;
     const maincontainar = document.getElementById("Activity_log4");
     const fixMobile = document.getElementById("fix_mobile").innerText;
     const p = document.createElement("p");
     p.innerHTML = `you have complated the task <h1>${fixMobile}</h1>${timeSet}`;
     maincontainar.appendChild(p)
})
// button number -- 5
document.getElementById("Completed_btn_5").addEventListener("click", function(x){
    alert("board undated successully");
    x.target.style.backgroundColor = "red";
x.target.disabled = true;


    const task = document.getElementById("Task_Assigned").innerText;
     const convertNumber = parseInt(task);

     const biyog = convertNumber - 1;
     document.getElementById("Task_Assigned").innerText = biyog;

     const navbarNumber = document.getElementById("navbar_number").innerText;
     const convertednumber = parseInt(navbarNumber);
     const sum = convertednumber + 1;
     document.getElementById("navbar_number").innerText = sum;

     if(biyog == 0){
        alert("All board undated successully ")
     }
     const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const secend = now.getSeconds();
     const timeSet =` ${hours}: ${minutes}: ${secend}`;
     const maincontainar = document.getElementById("Activity_log5");
     const fixMobile = document.getElementById("fix_mobile").innerText;
     const p = document.createElement("p");
     p.innerHTML = `you have complated the task <h1>${fixMobile}</h1>${timeSet}`;
     maincontainar.appendChild(p)

})
// button number -- 6
document.getElementById("Completed_btn_6").addEventListener("click", function(x){
    alert("board undated successully");
    x.target.style.backgroundColor = "red";
x.target.disabled = true;


    const task = document.getElementById("Task_Assigned").innerText;
     const convertNumber = parseInt(task);

     const biyog = convertNumber - 1;
     document.getElementById("Task_Assigned").innerText = biyog;

     const navbarNumber = document.getElementById("navbar_number").innerText;
     const convertednumber = parseInt(navbarNumber);
     const sum = convertednumber + 1;
     document.getElementById("navbar_number").innerText = sum;

     if(biyog == 0){
        alert("All board undated successully ")
     }
     const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const secend = now.getSeconds();
     const timeSet =` ${hours}: ${minutes}: ${secend}`;
     const maincontainar = document.getElementById("Activity_log6");
     const fixMobile = document.getElementById("fix_mobile").innerText;
     const p = document.createElement("p");
     p.innerHTML = `you have complated the task <h1>${fixMobile}</h1>${timeSet}`;
     maincontainar.appendChild(p)

})

// Clear_History

document.getElementById("Clear_History").addEventListener("click", function(){
 document.getElementById('Activity_log1').innerText = "";
 document.getElementById('Activity_log2').innerText = "";
 document.getElementById('Activity_log3').innerText = "";
 document.getElementById('Activity_log4').innerText = "";
 document.getElementById('Activity_log5').innerText = "";
 document.getElementById('Activity_log6').innerText = "";

})