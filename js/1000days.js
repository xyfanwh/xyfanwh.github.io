(function(doc, win, design_width) {
    const html = doc.documentElement;
    const viewport = win

    const refreshRem = () => {
        const client_width = viewport.innerWidth;
        if (client_width >= design_width) {
            // if logic pt width >= 1000,
            // then set root font size to 16*(viewport width / 1000) px
            html.style.fontSize = 16 * (client_width / design_width) + "px";
        } else {
            // else set to 16px
            html.style.fontSize = "16px";
        }
    };
    // dom 
    doc.addEventListener('DOMContentLoaded', refreshRem);
})(document, window, 1000);


// width and height of viewport
var viewport_width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
var viewport_height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

var elem_code_box = document.getElementById("code_box");
var elem_cout_text = document.getElementById("cout_text")
var elem_test = document.getElementById("test")

elem_cout_text.innerText = ""

elem_code_box.style.left = (viewport_width - elem_code_box.clientWidth) / 2 + "px";
elem_code_box.style.top = viewport_height * 0.4 - elem_code_box.clientHeight / 2 + "px";

elem_test.innerText = elem_code_box.clientWidth + " , " + elem_code_box.clientHeight +
    "\n" + elem_code_box.style.left + " , " + elem_code_box.style.top +
    "\n" + viewport_width + " , " + viewport_height






