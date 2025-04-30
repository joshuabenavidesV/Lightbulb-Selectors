// Write your code here
const lightbulb1 = document.querySelector(".item.lightbulb.active#lightbulb1")
const  lightbulb2 = document.querySelector(".item.lightbulb#lightbulb2")
const lightbulb3 = document.querySelector(".item.lightbulb#lightbulb3")

const output = document.querySelector(".subtitle")
let count =0;
lightbulb1.addEventListener("click",function(){
    count++
    output.innerHTML = "You've clicked the lights " + count + " times"
    this.classList.toggle("active");
   })
lightbulb2.addEventListener("click",function(){
    count++
    output.innerHTML = "You've clicked the lights " + count + " times"
    this.classList.toggle("active");
   })
lightbulb3.addEventListener("click",function(){
    count++
    output.innerHTML = "You've clicked the lights " + count + " times"
    this.classList.toggle("active");
   })
   