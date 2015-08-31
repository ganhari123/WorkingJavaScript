function firstFunct() {
  alert("IN FUNCTION");
  if(document.getElementById('DEMO').innerHTML == "Hi my name is............") {
    document.getElementById('DEMO').innerHTML = "Hi My Name is............Slim Shady";
  } else {
    document.getElementById('DEMO').innerHTML = "Hi my name is............";
  }
}

function secondFunct() {
  var anyNum = document.getElementById('putNum').value;
  if (anyNum > 0 && anyNum < 100) {
    window.alert(anyNum);
  } else {
    document.getElementById('DEMO').style.display = "none";
  }
}

function thirdFunct() {
  var obj = {name:"Hari", age:"20"};
  alert(obj.name);
}
