// get elements

var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('btnModal');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// add event listener

modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
// listen outside click
window.addEventListener('click',outsideClick);

function openModal(){
    modal.style.display = 'block';
   
}

function closeModal(){
    modal.style.display = 'none';
   
}

function outsideClick(e){
    if(e.target == modal)
    modal.style.display = 'none';
}
