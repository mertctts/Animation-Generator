const box = document.getElementById("box");
const animType = document.getElementById("animType");
const duration = document.getElementById("duration");
const delay = document.getElementById("delay");
const generate = document.getElementById("generate");
const cssCode = document.getElementById("cssCode");
const copyBtn = document.getElementById("copyBtn");

let styleTag = document.createElement("style");
document.head.appendChild(styleTag);

generate.addEventListener("click", () => {
  const type = animType.value;
  const dur = duration.value;
  const del = delay.value;
   if (!type) return;

  
  box.style.animation = "none";
  void box.offsetWidth; 

  let keyframes = "";
  switch(type){
    case "fade": keyframes = `@keyframes fade { from {opacity:0;} to {opacity:1;} }`; box.style.animation = `fade ${dur}s ease ${del}s forwards`; break;
    case "slide": keyframes = `@keyframes slide { from {transform: translateX(300px);} to {transform: translateX(0);} }`; box.style.animation = `slide ${dur}s ease ${del}s forwards`; break;
   
  }

  switch(type){
    case "fade":
      keyframes = `@keyframes fade { from {opacity:0;} to {opacity:1;} }`;
      box.style.animation = `fade ${dur}s ease ${del}s forwards`;
      break;
    case "slide":
      keyframes = `@keyframes slide { from {transform: translateX(300px);} to {transform: translateX(0);} }`;
      box.style.animation = `slide ${dur}s ease ${del}s forwards`;
      break;
    case "bounce":
      keyframes = `@keyframes bounce {0%{transform:translateY(0);}50%{transform:translateY(-30px);}100%{transform:translateY(0);}}`;
      box.style.animation = `bounce ${dur}s ease ${del}s forwards`;
      break;
    case "rotate":
      keyframes = `@keyframes rotate { from {transform: rotate(0deg);} to {transform: rotate(360deg);} }`;
      box.style.animation = `rotate ${dur}s linear ${del}s forwards`;
      break;
    case "scale":
      keyframes = `@keyframes scale {0%{transform:scale(1);}50%{transform:scale(1.5);}100%{transform:scale(1);}}`;
      box.style.animation = `scale ${dur}s ease ${del}s forwards`;
      break;
    case "shake":
      keyframes = `@keyframes shake {0%,100%{transform:translateX(0);}20%,60%{transform:translateX(-10px);}40%,80%{transform:translateX(10px);}}`;
      box.style.animation = `shake ${dur}s ease ${del}s forwards`;
      break;
    case "flip":
      keyframes = `@keyframes flip {0%{transform:rotateY(0);}100%{transform:rotateY(360deg);}}`;
      box.style.animation = `flip ${dur}s linear ${del}s forwards`;
      break;
    case "pulse":
      keyframes = `@keyframes pulse {0%{transform:scale(1);}50%{transform:scale(1.2);}100%{transform:scale(1);}}`;
      box.style.animation = `pulse ${dur}s ease ${del}s forwards`;
      break;
    case "spin-fade":
      keyframes = `@keyframes spin-fade {0%{transform:rotate(0deg);opacity:0;}100%{transform:rotate(360deg);opacity:1;}}`;
      box.style.animation = `spin-fade ${dur}s ease ${del}s forwards`;
      break;
    case "wiggle":
      keyframes = `@keyframes wiggle {0%,100%{transform:rotate(0deg);}25%{transform:rotate(5deg);}75%{transform:rotate(-5deg);}}`;
      box.style.animation = `wiggle ${dur}s ease ${del}s forwards`;
      break;
    default:
      console.log("Animasyon tipi bulunamadı!");
  }

  styleTag.textContent = keyframes;

  
  cssCode.textContent = `
${keyframes}

.element {
  animation: ${type} ${dur}s ease ${del}s forwards;
}`;

  
  document.querySelector('.code').classList.add('show');
});


copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(cssCode.textContent);
  alert("CSS kodu kopyalandı!");
});
