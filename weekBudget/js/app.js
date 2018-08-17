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
    
    //clear the error
    
         setTimeout(function() {
               document.querySelector('.primary .alert').remove();
               addExpenseForm.reset();
          }, 3000);

    }
    
    //display de expensive from the form into the list
    addExpenseToList(name, amount) {
        const expensesList = document.querySelector('#expenses ul');
        
        //create li
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        
        //created into the HTML
        
        li.innerHTML =  `
                          ${name}
                          <span class="badge badge-primary badge-pill"> $${amount}</span>

                        `;
        //insert into the HTML
        expensesList.appendChild(li);
        
        
    }
    
}


// Variables
const addExpenseForm = document.querySelector('#add-expense'), 
        budgetTotal = document.querySelector('span#total'),
        budgetLeft = document.querySelector('span#left');


     
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
               
               //add the expensive into the liste
               html.addExpenseToList(expenseName, amount);
            }
           
        
    });
    
}

