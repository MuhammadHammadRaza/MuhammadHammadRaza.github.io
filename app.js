var body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "rgb(255, 255, 70)";
body.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

var paraTag = body.appendChild(document.createElement("h3"));
paraTag.style.display = "inline"
var text = "I am Muhammad Hammad Raza, a Certified Microsoft Technology Associate. ";

var anchorTag = body.appendChild(document.createElement("a"));
anchorTag.setAttribute("href", "./cert/Cert8235272115.pdf");
anchorTag.setAttribute("target", "_blank");
anchorTag.style.color = "teal";
var attachmentTag = anchorTag.appendChild(document.createElement("h3"));;
attachmentTag.style.display = "inline"
var attachmentText = "[1 Attachment Found]"

var caret = body.appendChild(document.createElement("h1"));
caret.style.display = "inline"
caret.textContent = "|";

var paraCount = 0;
var attachmentCount = 0;
function para() {
    if (paraCount >= text.length) {
        if (attachmentCount == attachmentText.length) {
            return 0;
        }
        attachmentTag.textContent += attachmentText[attachmentCount];
        attachmentCount++;
    }
    else {
        paraTag.textContent += text[paraCount];
        paraCount++;
    }
}

function caretSign() {
    caret.textContent = "|";
    setTimeout(caretSignEmpty, 500);
}

function caretSignEmpty() {
    caret.textContent = "";
    setTimeout(caretSign, 500);
}

setInterval(para, 75);
setTimeout(caretSignEmpty, 6825);