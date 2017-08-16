var calc = [];
var container = document.getElementById("container");
 
function work(objButton){
  var div = document.getElementById("container");
  var val = objButton.value;
  if(isNaN(val)==true && val != "."){
    div.innerHTML = div.innerHTML + " " + val + " ";
  } else{
        div.innerHTML = div.innerHTML + val;
  }
};
function eql(objButton){
  var eqtn = document.getElementById("container").innerHTML;
var answer = eval(eqtn);
  document.getElementById("ans").innerHTML = answer;
};

function clr(objButton){
  var str = document.getElementById("container").innerHTML;
var myarray = str.split(" ");
  myarray.pop();
  document.getElementById("container").innerHTML = myarray.join(" ");
  document.getElementById("ans").innerHTML = "";
};

function percentage(objButton){
  var str = document.getElementById("container").innerHTML;
  var strarray = str.split(" ");
  var i = strarray.length-1;
  strarray[i] = strarray[i]/100;
  document.getElementById("container").innerHTML = strarray.join(" ");
  
};
function allclear(objButton){
  document.getElementById("container").innerHTML = "";
  document.getElementById("ans").innerHTML = "";
};
