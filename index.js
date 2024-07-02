

// function clock(){
//     let today=new Date()
//     let seconde= today.getSeconds();
//     let munite=today.getMinutes();
//     let Hours=today.getHours();
//     const pm ="PM"
//     const am ="AM"
//     if(Hours>=0 && Hours<12){
//         document.getElementById("half").innerHTML=am
//     }else{
//         document.getElementById("half").innerHTML=pm
//     }
    

//    seconde=seconde<10 ? "0"+seconde:seconde
//    munite=munite<10 ? "0"+munite:munite
//    Hours=Hours<10 ? "0"+Hours:Hours






//     document.getElementById('S').innerHTML=seconde

//     document.getElementById('M').innerHTML=munite
//     document.getElementById('H').innerHTML=Hours
// }

// setInterval(clock,1000)




















  //test current time with console 
  const today = new Date();
const houres = today.getHours();
const munitee = today.getMinutes();
const seconde = today.getSeconds();
console.log(houres,munitee,seconde)

//REAPET FUNCTION MANY TIME EVERY 10SECONEDE 
function func(){
    const today = new Date();
    const houres = today.getHours();
    const munitee = today.getMinutes();
    const seconde = today.getSeconds();
//CONDITION PUT ZERO IF NUMBER <10 YA3NI FIH WAHD RA9M 
    const s=document.getElementById('S').innerHTML=seconde < 10 ? "0"+seconde : seconde;
    const m=document.getElementById('M').innerHTML=munitee < 10 ? "0"+munitee : munitee;
    const h=document.getElementById('H').innerHTML=houres < 10 ? "0"+houres : houres;
//pm or am 

const TYPE=document.getElementById('type').innerHTML=houres>=0 && houres < 12 ? "AM" : "PM";
    
   }
   
  setInterval(func,10)