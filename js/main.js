var tasks =[];
var btn1= document.getElementById("btn-add");
var btn2= document.getElementById("btn-update");
    btn1.onclick=function (){
        var task= document.getElementById("task");
        tasks.push(task.value);
        task.value="";
        view();
}


function view(){
    var result=document.getElementById("result");
    var output="";
    var arraySize=tasks.length;
    for (var i=0;i<arraySize;i++)
    {  
        output+=`<li id="list-item" ondblclick="destory(${i})">${tasks[i]}
        <button onclick="update(${i})" style="color:green">update</button></li>
        `;
    }
    result.innerHTML=output;
}
function destory(index){
    tasks.splice(index,1);
    view();
}
function update(index){
   var task= document.getElementById("task");
   task.value=tasks[index];
   btn1.style.display="none";
   btn2.style.display="inline-block";
   btn2.value=index;

}


btn2.onclick=function (){
    var index=btn2.value;
    var task= document.getElementById("task");
    tasks[index]=task.value;
    view();
    task.value="";
    btn2.style.display="none";
    btn1.style.display="inline-block";
}