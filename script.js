var btn = document.querySelectorAll("button");
var input = document.getElementById("input");
let string = "";
let buttons = Array.from(btn);
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch (err) {
        input.value = "ERROR";
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = "";
    } else if (e.target.innerHTML == "DE") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      if (e.target.innerHTML == "x") string += "*";
      else string += e.target.innerHTML;
      input.value = string;
    }
  });
});
