const Button=document.querySelectorAll('.button');

const text = document.querySelectorAll('.text');

let count=0;
Button.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        count=index;
        btn.classList.add('active');
        
            text[count].classList.add('active');
        
    })
})