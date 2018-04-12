function showPic(whichpic) {
    var source = whichpic.getAttribute("href");// According to getAttribute(), we could get whichpic's href attribute and store it to source object
    var placeholder = document.getElementById("placeholder");// according to element's id to get object
    placeholder.setAttribute("src",source);// set the src value of object as source

    var text = whichpic.getAttribute("title");// Store title to text
    var description = document.getElementById("description");// get object
    // alert(description.nodeValue);// To get the value of the node
    // alert(description.childNodes[0].nodeValue);
    description.firstChild.nodeValue = text;
    // alert(description.firstChild.nodeValue);
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    // alert(body_element.childNodes.length);
    // alert(body_element.nodeType);
}

function popUp(winURL) {
    window.open(winURL, "popUp", "width=320, height=480");
}

window.onload = countBodyChildren;
