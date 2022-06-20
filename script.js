// Menu Mobile

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Upload Image

const image_input = document.querySelector('#image_input');
var uploaded_image = '';

image_input.addEventListener('change', function(){
    const reader = new FileReader();
    reader.addEventListener('load', () =>{
        uploaded_image = reader.result;
        document.querySelector('#up_image').style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);
})