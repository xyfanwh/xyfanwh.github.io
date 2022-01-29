var window_width = window.innerWidth;
var window_height = window.innerHeight;
var elem_test = document.getElementById("test");
var elem_code_box = document.getElementById("code_box");
var elem_cout_text = document.getElementById("cout_text")

elem_cout_text.hidden
elem_cout_text.innerText = "你好哇，赵昕悦！"


elem_code_box.style.left = (window_width - elem_code_box.clientWidth) / 2 + "px";
elem_code_box.style.top = (window_height - elem_code_box.clientHeight) / 2 + "px";

elem_test.innerText = elem_code_box.clientWidth + " , " + elem_code_box.clientHeight +
    "\n" + elem_code_box.style.left + " , " + elem_code_box.style.top +
    "\n" + window_width + " , " + window_height



