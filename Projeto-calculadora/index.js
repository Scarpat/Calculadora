function insert(num) {
  let numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}
function clean() {
  document.getElementById("resultado").innerHTML = "";
}
function del() {
  let numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero.substring(
    0,
    numero.length - 1
  );
}
function calculo() {
  let numero = document.getElementById("resultado").innerHTML;
  if (numero) {
    document.getElementById("resultado").innerHTML = eval(numero);
  } else {
    document.getElementById("resultado").innerHTML = "0";
  }
}

function theme() {
  var url = "http://colormind.io/api/";
  var data = {
    model: "default",
    input: ["N", "N", "N", "N", "N"]
  };
  var palette = null;
  var http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      palette = JSON.parse(http.responseText).result;
      document.documentElement.style.setProperty("--color-one", `rgb(${palette[0]})`);
      document.documentElement.style.setProperty("--color-two", `rgb(${palette[1]})`);
      document.documentElement.style.setProperty("--color-three", `rgb(${palette[2]})`);
      document.documentElement.style.setProperty("--color-four", `rgb(${palette[3]})`);
      document.documentElement.style.setProperty("--color-five", `rgb(${palette[3]})`);
      document.documentElement.style.setProperty("--color-six", `rgb(${palette[4]})`);
    }
  };

  http.open("POST", url, true);
  http.send(JSON.stringify(data));
}
