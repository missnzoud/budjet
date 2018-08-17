//classes






//variables

const addExpenseForm = document.querySelector('#add-expense');

let budget, userBudget;







//event
eventListeners();
//add init
function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {
    //we ask the visitors the weekly budget
   userBudget = prompt('what/is your weekly budget?');
    if(userBudget === null || userBudget === '') {
        window.location.reload();
    }
});

//when a new expense is added;

/*function eventListeners(){
    addExpenseForm.eventListeners('submit', function(e) {
        e.preventDefault();
    });
    
}*/
}
