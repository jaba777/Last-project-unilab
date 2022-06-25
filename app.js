const Button=document.querySelectorAll('.button');

const text = document.querySelectorAll('.text');

let count=0;
Button.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        count=index;
        btn.classList.add('active');
        for(let i=0;i<text.length;i++){
            text[count].classList.add('active');
        }
    })
})