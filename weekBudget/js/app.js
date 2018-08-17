//classes
class Budget {
    constructor(budget) {
        this.budget = Number(budget); //just to convert into number
        this.budgetLeft = this.budget;
    }
}







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
        //validate the user budget
    if(userBudget === null || userBudget === '' || userBudget === '0') {
        window.location.reload();
    }else{  
        //budget is valided then extanciated the budget classes
        budget = new Budget(userBudget);
        
        console.log(budget);
        
        
        }
});

//when a new expense is added;

function eventListeners(){
    addExpenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
    
}
}
