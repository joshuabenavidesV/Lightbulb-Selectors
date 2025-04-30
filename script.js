// Write your code here
const lightbulb1 = document.querySelector("#lightbulb1")
const  lightbulb2 = document.querySelector("#lightbulb2")
const lightbulb3 = document.querySelector("#lightbulb3")

const output = document.querySelector(".subtitle")
let count =0;
lightbulb1.addEventListener("click",function(){
    count++
    if(count === 1){
    output.innerHTML = "You've clicked the light " + count + " time"
    lightbulb1.classList.toggle("active");
    }
    else {
    output.innerHTML = "You've clicked the lights " + count + " times"
    lightbulb1.classList.toggle("active");
    }
   })
lightbulb2.addEventListener("click",function(){
    count++
    if(count === 1){
        output.innerHTML = "You've clicked the light " + count + " time"
        lightbulb2.classList.toggle("active");
        }
        else {
        output.innerHTML = "You've clicked the lights " + count + " times"
        lightbulb2.classList.toggle("active");
        }
   })
lightbulb3.addEventListener("click",function(){
    count++
    if(count === 1){
        output.innerHTML = "You've clicked the light " + count + " time"
        lightbulb3.classList.toggle("active");
        }
        else {
        output.innerHTML = "You've clicked the lights " + count + " times"
        lightbulb3.classList.toggle("active");
        }
   })
   