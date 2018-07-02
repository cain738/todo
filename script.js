let todoList=[];
window.onload=function () {
    let btn =document.getElementById('btn');
    let result=document.getElementById('result');
    let input=document.getElementById('inp');
    btn.onclick=function(){
       let value =`<li>
<input type="hidden">
<span onclick="changeType(this)">${input.value}</span>
<button onclick="update(this)" id=${todoList.length + 1}>Update</button>
</li>`;
        //result.innerHTML = value;
        todoList.push(value);
        display(todoList);
        }
     function display(todoList) {
        let value="";
        todoList.forEach(function (todo)//forEach function is a loop
        {
             //console.log()
             value+=todo;
         })
         result.innerHTML=value;
     }
    //FUNCTION UPDATE
    //FUNCTION DELETE
    //Optimize this method using CreateNode
};
function update(element) {
    //let val=document.getElementbyId('getValue').val;
    let eleParent=element.previousElementSibling;
    let val=eleParent.previousElementSibling.value;
    if (val){
        eleParent.textContent=val;
        eleParent.previousElementSibling.type="hidden";
    }
    todoList[element.id-1]=`<li>
<input type="hidden">
<span onclick="changeType(this)">${val}</span>
<button onclick="update(this)">Update</button>
</li>`;
}
function changeType(element,id) {
    console.log(element.id);
    element.previousElementSibling.type="text";
    element.previousElementSibling.value="";
}