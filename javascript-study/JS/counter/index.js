



const root=document.createElement("h1");
document.body.appendChild(root);
let count=0;// javascript state
root.innerHTML=count;

const add=document.createElement("button");
document.body.appendChild(add);

add.innerHTML="Add";
add.addEventListener("click",()=>{
  count++;  //update state
  root.innerHTML=count;
})
const subs=document.createElement("button");
document.body.appendChild(subs);
subs.innerHTML="subs";
subs.addEventListener("click",()=>{
  count--;  //update state
  root.innerHTML=count;
})


const reset=document.createElement("button");
document.body.appendChild(reset).innerHTML="reset";
reset.addEventListener("click",()=>{
  count=0;  //update state
  root.innerHTML=count;
})




