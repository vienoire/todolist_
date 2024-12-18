const inputKutu= document.getElementById("inkutu");
const kutuliste= document.getElementById("kutulist");
function GorevEkle(){
    if(inputKutu.value === ''){
        alert("Bir şey yazmalısın!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputKutu.value;
        kutuliste.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputKutu.value="";
    veriKaydet();
}

kutuliste.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        veriKaydet();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        veriKaydet();
    }
}, false);

function veriKaydet(){
    localStorage.setItem("data", kutuliste.innerHTML);
}
function veriGoster(){
    kutuliste.innerHTML= localStorage.getItem("data");
}
veriGoster();
