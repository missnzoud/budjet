//classes






//variables

const addExpenseForm = document.querySelector('#add-expense');








//event
eventListeners();

document.addEventListener('DOMContentLoaded', function() {
    
})

function eventListeners(){
    addExpenseForm.eventListeners('submit', function(e) {
        e.preventDefault();
    })
    
}