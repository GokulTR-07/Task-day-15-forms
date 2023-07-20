function validateform(){

  var fn = document.getElementById("fn").value;
  var tb = document.getElementById("tbo");
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");

  td1.innerHTML = fn;
  tb.append(tr);
  tr.append(td1);
  

  var ln = document.getElementById("ln").value;
  var tb = document.getElementById("tbo");
  var td2 = document.createElement("td");

  td2.innerHTML = ln;
  tb.append(tr);
  tr.append(td2);

  var add = document.getElementById("add").value;
  var tb = document.getElementById("tbo");
  var td3 = document.createElement("td");

  td3.innerHTML = add;
  tb.append(tr);
  tr.append(td3);

  var pin = document.getElementById("pin").value;
  var tb = document.getElementById("tbo");
  var td4 = document.createElement("td");

  td4.innerHTML = pin;
  tb.append(tr);
  tr.append(td4);


  var gen = document.getElementById("gen").value;
  var gen1 = document.getElementsByName("gen");

  var tempgen;

  for(var i=0; i<gen1.length; i++){
    if(gen1[i].checked){
      tempgen = gen1[i].value
    }
  }

  var tb = document.getElementById("tbo");
  var td5 = document.createElement("td");

  td5.innerHTML = tempgen;
  tb.append(tr);
  tr.append(td5);


  var food = document.getElementById("cof").value;
  var fooditem = document.getElementsByName("cof");

  var tempfood = [];
  var alrt = "undefined";

  for(var i=0; i<fooditem.length; i++){
    if(fooditem[i].checked){
      tempfood.push(fooditem[i].value)
    }
  }
  if(tempfood.length >= 2){
    console.log(tempfood);
  }else{
    alert("Choose min 2 out of 5 in food list");
  }

  var tb = document.getElementById("tbo");
  var td6 = document.createElement("td");

  td6.innerHTML = tempfood;
  tb.append(tr);
  tr.append(td6);



  var st = document.getElementById("st").value;
  var tb = document.getElementById("tbo");
  var td7 = document.createElement("td");

  td7.innerHTML = st;
  tb.append(tr);
  tr.append(td7);



  var coun = document.getElementById("coun").value;
  var tb = document.getElementById("tbo");
  var td8 = document.createElement("td");

  td8.innerHTML = coun;
  tb.append(tr);
  tr.append(td8);

  document.getElementById("form").reset();

}


