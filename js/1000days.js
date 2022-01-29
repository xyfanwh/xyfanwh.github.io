(function(doc, designWidth) {
    const html = doc.documentElement;

    const refreshRem = () => {
        const clientWidth = html.clientWidth;
        if (clientWidth >= designWidth) {
            //给宽度一个最大值，如果设备的宽度已经超过设计稿的尺寸了，统一按一个值去算（传的第三个参数）
            html.style.fontSize = '16px';
        } else {
            // iPhone6为例：根节点字体大小为50px = 100 * (375 / 750)
            html.style.fontSize = 100 * (clientWidth / designWidth) + 'px';
        }
    };

    //dom加载完的一个事件
    doc.addEventListener('DOMContentLoaded', refreshRem);
})(document, 390);

// width and height of viewport
var viewport_width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
var viewport_height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

var elem_code_box = document.getElementById("code_box");
var elem_cout_text = document.getElementById("cout_text")

elem_cout_text.innerText = "你好哇，赵昕悦！"

elem_code_box.style.left = (viewport_width - elem_code_box.clientWidth) / 2 + "px";
elem_code_box.style.top = viewport_height * 0.4 - elem_code_box.clientHeight / 2 + "px";




