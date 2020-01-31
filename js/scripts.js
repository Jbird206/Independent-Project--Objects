//Back end logic ///////////////////////////////////////
//Constructor function ///////////////////////
$(document).ready(function() {
  function Pizza() {
    this.toppings[],
    this.size = []
  }


var myPizzaOrder = new Pizza("topping","size");

function totalPrice(){
  return toppingTotal + sizeTotal;
}

//display it///

$("#formOne").click(function(event){
  event.preventDefault();
  $("#formOne").text(totalPrice());
})

////////////////////// user Interface///////////////////


  $("form#toppings").submit(function(event) {
    event.preventDefault();
    $("#selected-toppings").show();
$("input:checkbox[name=pizza-toppings]:checked").each(function(){
  var selectedPizzaToppings = $(this).val();
  $('#selected-toppings').append(selectedPizzaToppings + "<br>");
});
$('#toppings').hide();
});
//size menu/////////////////////
$("form#pizzaSize").submit(function(event) {
  event.preventDefault();
  $("#selected-size").show();
  $("input:checkbox[name=size-selected]:checked").each(function(){
    var selectedPizzaSize = $(this).val();
    $('#selected-size').append(selectedPizzaSize + "<br>");
  });
  $('#pizzaSize').hide();

  var newOrder = new Order
  });

});
