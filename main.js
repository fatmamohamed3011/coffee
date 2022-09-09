let navIcon1 = document.querySelectorAll("label")[0];
let navIcon2 = document.querySelectorAll("label")[1];
let body = document.querySelectorAll("body");


navIcon1.onclick = function(){
    navIcon1.classList.remove("checkbtn");
    navIcon2.classList.add("checkbtn");
    
};

navIcon2.onclick = function(){
    navIcon2.classList.remove("checkbtn");
    navIcon1.classList.add("checkbtn");
};

let numb1 = document.getElementById("count1");
let numb2 = document.getElementById("count2");
let numb3 = document.getElementById("count3");
let numb4 = document.getElementById("count4");

function animatedCounter(ele,str,end,dur){
    let range = end-str;
    let current = str;
    let increment = 0;

    if(end>str){
        increment=1;
    }else{
        increment=-1;
    }
// setInterval تنفذ كود خلال وقت محدد
    let termer = setInterval(function(){
        current+=increment;
        ele.textContent = current;
        if(current==end){
            clearInterval(termer);
        }
    },dur)
}

animatedCounter(numb1,500,236,.000500);
animatedCounter(numb2,300,562,.000500);
animatedCounter(numb3,500,213,.000500);
animatedCounter(numb4,200,156,.000500);


const checkBox = document.getElementById('check')

checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    const div = document.createElement('div')
    div.className = 'layout'
    document.body.appendChild(div)
  } else {
    if (document.querySelector('.layout')) {
      document.querySelector('.layout').remove()
    }
  }
})

const darkMood = document.getElementById('dark')
darkMood.addEventListener('change', () => {
  if (darkMood.checked) {
    const div = document.createElement('div')
    div.className = 'layout'
    document.body.appendChild(div)
  } else {
    if (document.querySelector('.layout')) {
      document.querySelector('.layout').remove()
    }
  }
})





let but = document.querySelector(".i-foot");
let pElement = document.querySelector(".js-p");

but.onclick = function(){
  pElement.innerHTML= "Submitting.....";
};

