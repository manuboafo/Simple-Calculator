const output = document.querySelector('.output');
const result =  document.querySelector('.result');
const keys =  document.querySelectorAll('button');


keys.forEach( button =>{
    button.addEventListener('click',calculate)
});




function calculate(){
    let buttonText =  this.innerText;
    if(buttonText =='AC'){
        output.innerText = '';
        result.innerText = '0';
        return
    }

    if(buttonText == 'Del'){
        output.textContent =  output.textContent.substring(0,output.textContent.length-1)
        return;
    }

    if(buttonText == '='){
            result.innerText = eval(output.textContent);
    }
   else{
       output.textContent += buttonText;
       return;
   }
 }
    
