let amount = document.getElementById('amount');
let person = document.getElementById('person');
let custom = document.getElementById('custom')
let tipAmount = document.getElementById('tipAmount');
let total = document.getElementById('total');
let tips = 0;
function persentage(e,tip){
    let tipsContainer = document.querySelectorAll('.tips-container button')
    for(let i=0 ;i<tipsContainer.length;i++){
    tipsContainer[i].className ="";
    }
    e.currentTarget.className = "button-active";
    
    if(tip == 'custom'){
        e.target.style="display:none";
        custom.style="display:block";
        custom.focus();
    }
    else{
        tips= tip;
        custom.value="";
        tipsContainer[5].style="display:block";
        custom.style="display:none";
    }

}

 amount.addEventListener('keyup',(e)=>{
    if(e.code === 'Enter'){
        custom.style="display:block";
        custom.focus();
        let tipsContainer = document.querySelectorAll('.tips-container button')
        for(let i=0 ;i<tipsContainer.length;i++){
        tipsContainer[i].className ="";
        }
        tipsContainer[5].style="display:none";
    }
 });
 custom.addEventListener('keyup',(e)=>{
    tips = custom.value;
    if(e.code === 'Enter'){
        person.focus();
    }
 });

 person.addEventListener('keyup',(e)=>{
    document.getElementById('errorMessage').style= "display:none";
    person.style.cssText = "border: 2px solid transparent;";
    if(person.value == 0 || (person.value === '')){
        document.getElementById('errorMessage').style.cssText = "display:block";
        person.style.cssText = "border: 2px solid rgb(214, 0, 0);";
    }
    else if(e.code === 'Enter'){ 
         document.getElementById('reset').className="";
            let result = amount.value * ((tips) / 100);
            result/=person.value;
            tipAmount.innerText = (result.toFixed(2));
            total.innerText = ((result+amount.value*1 / person.value).toFixed(2));
           } 
       
 });
 person.addEventListener('focusout',()=>{ person.style.cssText = "border: 2px solid transparent;";})

 function reset(){
    amount.value = "";
    person.value="";
    tipAmount.innerText="0.0";
    total.innerText="0.0";
    custom.value="";
    let tipsContainer = document.querySelectorAll('.tips-container button')
    for(let i=0 ;i<tipsContainer.length;i++){
    tipsContainer[i].className ="";
    }
    tipsContainer[5].style="display:block";
}

