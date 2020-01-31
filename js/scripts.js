
////////////////////// user Interface///////////////////
//var pizzaOrder = new Pizza();

$(document).ready(function() {
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
  });

});
