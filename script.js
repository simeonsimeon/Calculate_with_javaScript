

let tamil=document.getElementById("tamil");
let eng=document.getElementById("english");
let maths=document.getElementById("maths");
let science=document.getElementById("science");
let social=document.getElementById("social");
let namee=document.getElementById("name");
var btn2=document.getElementById("btn1")
t=tamil.value
e=english.value
m=maths.value
s=science.value
ss=social.value

function ttt(){
    let table=document.getElementById("table");
    let row=table.insertRow(table.length);
    let c1=row.insertCell(0);
    let c2=row.insertCell(1);
    let c3=row.insertCell(2);
    let c4=row.insertCell(3);
    let c5=row.insertCell(4);
    let c6=row.insertCell(5);
    let c7=row.insertCell(6)
    let c8=row.insertCell(7);
    let c9=row.insertCell(8);

    c1.innerText=namee.value;
    c2.innerText=tamil.value;
    c3.innerText=english.value;
    c4.innerText=maths.value;
    c5.innerText=science.value;
    c6.innerText=social.value;
    var edit=document.createElement("button");
    var delet=document.createElement("button");
    edit.innerHTML="Edit";
    delet.innerHTML="Delete";
    c9.appendChild(edit);
    c9.appendChild(delet);
    

   var tot=parseInt(tamil.value)+parseInt(english.value)+parseInt(maths.value)+parseInt(science.value)+parseInt(social.value);
   console.log(tot)
   
   c7.innerText=tot;
   let easy=tot/5;
   c8.innerText=easy;
   namee.value=""
   tamil.value=""
   english.value=""
   maths.value=""
   science.value=""
   social.value=""
   edit.addEventListener("click",function(){
    btn1.style.opacity="1"
    namee.value=c1.innerText
    tamil.value=c2.innerText
    english.value=c3.innerText
    maths.value=c4.innerText
    science.value=c5.innerText
    social.value=c6.innerText
    btn.style.opacity=0;
    btn1.addEventListener("click",function(){
        c1.innerText=""
        c2.innerText=""
        c3.innerText=""
        c4.innerText=""
        c5.innerText=""
        c6.innerText=""
     c1.innerText=namee.value
     c2.innerText=  tamil.value
     c3.innerText=  english.value
     c4.innerText=  maths.value
     c5.innerText=  science.value
     c6.innerText=  social.value
     var tot=parseInt(tamil.value)+parseInt(english.value)+parseInt(maths.value)+parseInt(science.value)+parseInt(social.value);
   console.log(tot)
   
   c7.innerText=tot;
   let easy=tot/5;
   c8.innerText=easy;
   namee.value=""
   tamil.value=""
   english.value=""
   maths.value=""
   science.value=""
   social.value=""
   btn.style.opacity=1;
    })
   })
   delet.addEventListener("click",function(){
    let clear=this.parentNode.parentNode;
    let table=clear.parentNode;
    table.removeChild(clear);
   })


}
let btn=document.getElementById("btn");
console.log(btn);
btn.addEventListener("click",function(){
    ttt()
    btn1.style.opacity="0"
})