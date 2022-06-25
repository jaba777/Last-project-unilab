const HtmlButton=document.querySelector('.htmlButton');
const JavaScriptbtn=document.querySelector('.JsButton');
const text = document.querySelector('.text');
HtmlButton.addEventListener('click', ()=>{
    HtmlButton.classList.add('active');
    text.classList.add('active');
})

JavaScriptbtn.addEventListener('click', ()=>{
    JavaScriptbtn.classList.add('active');
    text.classList.add('active');
})