//classes
class Budget {
    constructor(budget) {
        this.budget = Number(budget); //just to convert into number
        this.budgetLeft = this.budget;
    }
}

//everything related to HTML 

class HTML {
    //insert the budget when the user submit it
    insertBudget(amount) {
        //console.log(amount);
        //insert into html
        budgetTotal.innerHTML =  `${amount}`;
        budgetLeft.innerHTML =  `${amount}`;
    }
    //display a message(correct or invalide)
    printMessage(message, className) {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center', 'alert', className);
        messageWrapper.appendChild(document.createTextNode(message));
        
        //inset into HTML
        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);
    }
    
}

//variables

const addExpenseForm = document.querySelector('#add-expense');
const budgetTotal = document.querySelector('span#total');
const budgetLeft = document.querySelector('span#left');

     
let budget, userBudget;


//Instanciate the html class
  html = new HTML();



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
     //extanciate the html class   
        html.insertBudget(budget.budget);
});

//when a new expense is added;


 
    addExpenseForm.addEventListener('submit', function(e) {
           e.preventDefault();
     //read the input value
        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;
        
        if (expenseName === '' || amount === '' ) {
            //console.log('invalide');
            html.printMessage('there was an error, all the field are mandatory', 'alert-danger')
           } else{
                 console.log('correct');
            }
           
        
    });
    
}

