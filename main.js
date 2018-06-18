// Write your JavaScript here
$("#calculate-change").click(function() {
   


    var received = $("#amount-received").val();
    var due = $("#amount-due").val();
    var leftover = received - due;
    var twenty = 0;
    var ten = 0;
    var five = 0;
    var two = 0;
    var dollar = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
 
    dollar = Math.floor(leftover/1);
    $("#dollars-output").text(dollar);
    leftover = (leftover%1).toFixed(2);
 
    quarters = Math.floor(leftover/.25);
    $("#quarters-output").text(quarters);
    leftover = (leftover%.25).toFixed(2);
 
    dimes = Math.floor(leftover/.1);
    $("#dimes-output").text(dimes);
    leftover = (leftover%.1).toFixed(2);
 
    nickels = Math.floor(leftover/.05);
    $("#nickels-output").text(nickels);
    leftover = (leftover%.05).toFixed(2);
    
    pennies = Math.floor(leftover/.01);
    $("#pennies-output").text(pennies);
    leftover = (leftover%.01).toFixed(2);
    
 
 
 })