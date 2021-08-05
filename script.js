const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const text = document.getElementById('text');
const reset = text.innerHTML;
var key = [];
const btn_search = document.querySelector("#search");
const btn_reset = document.querySelector("#reset");
// define more constants and variables here

btn_toggle.onclick = () => {
  if(btn_toggle.innerText == "Show Calculation")
  {
      author.innerText = "640631102" + length.value;
      btn_toggle.innerText = "Show Author";
  }
  else
  {
    author.innerText = "640631102 PANNAWIT PANWONG";
    btn_toggle.innerText = "Show Calculation";
  }
}

btn_search.onclick = () => {
  key = reset.split(" ")
  var search = " "
  for(let i =0; i<key.length; i++){
    if(key[i].length > length.value){
      search += "<span style = 'color: " + color.value + "' >" + key[i] + "</span>" + " ";
    }else{
      search += key[i] + " ";
    }
  }
  text.innerHTML = search;
  
}

btn_reset.onclick = () => {
  color.value = color.defaultValue;
  length.value = length.defaultValue;
  text.innerHTML = reset;
}
// more codes for Search and Reset buttons here
