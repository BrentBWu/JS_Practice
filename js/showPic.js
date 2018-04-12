function showPic(whichpic) {
    var source = whichpic.getAttribute("href");// According to getAttribute(), we could get whichpic's href attribute and store it to source object
    var placeholder = document.getElementById("placeholder");// according to element's id to get object
    placeholder.setAttribute("src",source);// set the src value of object as source
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
    alert(body_element.nodeType);
}

window.onload = countBodyChildren;
