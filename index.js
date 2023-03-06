const buttons = document.querySelectorAll('button');
const displayBox = document.querySelector('#display');

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.id==="clear"){
            displayBox.innerHTML = "";
        }
        else if(button.id==="delete"){
            displayBox.innerHTML=displayBox.innerHTML.substring(0,displayBox.innerHTML.length-1);
        }
        else if(button.id!=="="){
            displayBox.innerHTML+=button.id;
        }
        else if(button.id==="="){
           displayBox.innerHTML = eval(displayBox.innerHTML)%1==0?
           eval(displayBox.innerHTML):
           eval(displayBox.innerHTML).toFixed(6);
      
        }
    })
})