$(function() {

    var arr = [2, 5, 6, 10, 16, 7, 8];
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];

    $(".q1-function").click(function() {
        output();
    });

    $(".q2-function").click(function() {
        //GET NUMBER FROM INPUT BOX
        var num = $(".numElements").val();
        //CALL listElements
        listElements(num);
    });
    $(".q3-function").click(function() {
        var word = $(".fillArray").val();
        //CALL fillArray
        fillArray(word);
    });
    $(".q4-function").click(function() {
        //CALL pairingArrays
        pairingArrays();
    });
});

var output = function() {
    var arr = [2, 5, 6, 10, 16, 7, 8];
    for(i = 0; i < arr.length; i+=2)
        $(".q1-output").append(arr[i] + "<br>");
    
};

var listElements = function(n) {
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];
    for(i = 0; i < n; i++)
        $(".q2-output").append(shapes[i] + "<br>");

};

var fillArray = function() {
    var arr=[];
    var color = $(".fillArray").val();
    var colors = color;
    
    for(i=0;i<1;i++){
        arr.push(color);
        $(".q3-output").append(arr[i] + ", ");
    }
    

};

var pairingArrays = function() {
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];
    var arr = [2, 5, 6, 10, 16, 7, 8];

    for (i=0; i<7; i++){
        $(".q4-output").append("I drew " + arr[i] + " " + shapes[i] +"s" + "<br>");
    }


};