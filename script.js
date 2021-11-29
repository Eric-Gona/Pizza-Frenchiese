 
const Pizza=function(size,crust,toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
 
     Pizza.prototype.Tprice = function(){
     return size + crust + toppings   
 }
 
 }

 $(document).ready(function() {
   let total = 0;
     $("#Add").click(function(event) {
       event.preventDefault();
     let Ppizza = parseInt($("#size option:selected").val());
     let Ptopping = parseInt($("#top option:selected").val());
     let Pcrust = parseInt($("#crust option:selected").val());
    
 
     
    
     let new_order = new Pizza(Ppizza, Pcrust, Ptopping);
     
     let price = (new_order.Tprice())
     total+=price
 
     var Tpizza= $("#size option:selected").text();
       var Tcrust= $("#crust option:selected").text();
       var Ttopping= $("#topping option:selected").text();
       var Tname= $("#name option:selected").text();
       
       $("tbody:last").append("<tr>"+"<td>"+Tname+"</td>"+"<td>"+Tpizza+"</td>"+"<td>" +Tcrust+ "</td>" +"<td>"+Ttopping+ "</td>" + "<td>" + price +"</td>"+"</tr>")
 
     })
 
     $("button#final").click(function(event){
       $("#price:last").text(total);
       $("#last").show();
       
       
           alert("thanks  for your add this will be delivered in on time")
     
 
   })
 });