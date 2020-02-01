$(document).ready(function() {
//Back end logic ///////////////////////////////////////
//Constructor function ///////////////////////

  function Pizza() {
    this.toppings = [],
    this.currentID = 0
}

  PizzaBuild.prototype.addPizza = function(pizza) {
  pizza.id = this.assignID();
  this.toppings.add(pizza);
  }

  PizzaBuild.prototype.assignID = function() {
    this.currentID += 1;
    return this.CurrentID;
  }

  PizzaBuild.prototype.findTopping = function(ID) {
    for (var i=0; i< this.toppings.length; i++) {
      if (this.toppings[i]) {
        if (this.toppings[i].ID == ID) {

        }
      }
        }
  }


var myPizzaOrder = new Pizza("topping","size");

function totalPrice(){
  return toppingTotal + sizeTotal;
}
//Prototypes////
function Topping(pepperoni,sausage,oysters,anchovies,small,medium,large) {
 this.pepperoni= 2,
 this.sausage = 2,
 this.oysters = 3,
 this.anchovies = 2,
 this.small = 8,
 this.medium = 10,
 this.large = 12
}


//display it///

$("#formOne").click(function(event){
  event.preventDefault();
  $("#formOne").text(totalPrice());
})

////////////////////// user Interface///////////////////
var PizzaBuild = new PizzaBuild();

$(document).ready(function() {
  attachPizzaBuildListeners();
  $("form#toppings").submit(function(event) {
    event.preventDefault();
    $("#selected-toppings").show();
$("input:checkbox[name=pizza-toppings]:checked").each(function(){
  var selectedPizzaToppings = $(this).val();
  $('#selected-toppings').append(selectedPizzaToppings + "<br>");
});
$('#toppings').hide();
var newPizza = new PizzaBuild(selectedPizzaToppings);

})
})
});
