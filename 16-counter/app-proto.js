function Counter(element, value){
  this.counter = element; 
  this.value = value;  // value that we passing in  
  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');
  this.valueDOM = element.querySelector('.value'); // selecting inside the element
  this.valueDOM.textContent = this.value; // setting the value of the element

  // bind this to all functions  
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increaseBtn.addEventListener('click', this.increase);
  this.decreaseBtn.addEventListener('click', this.decrease);
  this.resetBtn.addEventListener('click', this.reset);
}

Counter.prototype.increase = function(){
  this.value++;
  this.valueDOM.textContent = this.value;
}

Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

function getElement(selection){
    const element = document.querySelector(selection);
    if(element){
        // if the element is not null, then return the element
        return element;
    }
    throw new Error(`Please check "${selection}" selector, no such element exist`);
}

// invoke the increase method
// firstCounter.increase();
// secondCounter.increase();
// firstCounter.reset();
// secondCounter.reset();