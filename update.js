let todoList = [];
window.onload = function(){

    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let input = document.getElementById('inp');

    btn.onclick = function(){

        let li = document.createElement('li');//creates HTML element. The value passed is a string and does not need "<" to be inserted
        let span = document.createElement('span');
        let input = document.createElement('input');
        let button = document.createElement('button');
        let button1= document.createElement('button');
            
        li.appendChild(input);//creates a node at the end of the list
        li.appendChild(span);
        li.appendChild(button);
        li.appendChild(button1);

        span.onclick = changeType;// changeType is a function used as a variable
        button.onclick = update;
        button1.onclick = DelElement;
        button.id = todoList.length + 1;
        button1.id=todoList.length + 1;
        li.id=todoList.length+1;
        input.type = "hidden";

        let inpVal = document.createTextNode(inp.value);//search about it
        span.appendChild(inpVal);

        let btnVal = document.createTextNode("Update");
        button.appendChild(btnVal);
        result.appendChild(li);
        todoList.push(span);

        let delM=document.createTextNode("Delete");
        button1.appendChild(delM);

    }


    //1.  FUNCTION UPDATE
    //2. FUNCTION DELETE
    //3. Optimize this method using CreateNode
};

function update() {
    let element = this;
    // let val = document.getElementById('getValue').val;
    let eleParent =  element.previousElementSibling;
    let val = eleParent.previousElementSibling.value;

    if(val) {
        eleParent.textContent = val;
        todoList[element.id - 1].textContent = val;
        eleParent.previousElementSibling.type="hidden";
    }
}

function changeType(){
    let element = this;
    element.previousElementSibling.type="text";//navigates to the previous sibling element
    element.previousElementSibling.value="";
}
function DelElement() {
    let element = this;
    let del= element.parentNode;
    //let del=document.getElementById(element.id);//Why it takes id of <li>..?
    del.remove();
    todoList.splice(element.id-1,1);

}