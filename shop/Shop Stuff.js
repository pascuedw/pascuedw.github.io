$(document).ready(function(){
    
    var subtotal = parseInt($(0).val());
    var mug = parseInt($(2.5).val());
    var stick = parseInt($(3).val());
    var pyropet = parseInt($(1.75).val());
    var lasergun = parseInt($(4.5).val());
    var text1 = "FunMug";
    var text2 = "Roasting Sticks";
    var text3 = "PyroPet";
    var text4 = "Laser Gun";
    var tax = parseInt($(0.07).val());
    
    
    $(".mug").click(function(){
       subtotal = 0 + mug
       
        
    });
    
    
    $(".stick").click(function(){
       subtotal = 0 + stick
        
    });
    
    
    $(".pyro").click(function(){
        subtotal = 0 + pyropet
        
    });
    
    
    $(".laser").click(function(){
       subtotal = 0 + lasergun
        
    });
    
    
    $(".check").click(function(){
       var aftertax = subtotal * tax;
       var totalcost = subtotal + aftertax;
       
       $(".subtotal").html(subtotal);
       $(".tax").html(aftertax);
       $(".totalcost").html(totalcost);
       
        
    });
    
    
    
});