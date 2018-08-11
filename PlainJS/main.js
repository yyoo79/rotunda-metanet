
//alert("fff");

function addElement(parentId, elementTag, elementId, html){
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

/*
https://stackoverflow.com/questions/43140325/add-node-to-d3-tree-v4

*/
