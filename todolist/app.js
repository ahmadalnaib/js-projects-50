const form=document.getElementById('form')
const input=document.getElementById('input')
const todosUL=document.getElementById('todos')
const todos=JSON.parse(localStorage.getItem('todos'))

if(todos){
  todos.forEach((todo)=>{
addTodo(todo)
  })
} else{

}




form.addEventListener('submit',(e)=>{
e.preventDefault();

addTodo()
})


function addTodo(todo)
{
  let todoText=input.value

  if(todo) {
    todoText=todo.text
  }

  if(todoText){
    const todoEL=document.createElement('li');
    
    if(todo && todo.completed){
      todoEL.classList.add('completed')
    }

    todoEL.innerHTML=todoText

    todoEL.addEventListener('click',()=>{
       todoEL.classList.toggle('completed')
     updateLs()
    })

    todoEL.addEventListener('contextmenu',(e) =>{
     e.preventDefault();
     
     todoEL.remove()
     updateLs()
    })

    todosUL.appendChild(todoEL)
    input.value=''



    updateLs()
  }

}


function updateLs(){
  todoEL=document.querySelectorAll('li')
  const todos=[]
  todoEL.forEach(todoEL =>{
todos.push({
  text:todoEL.innerText,
  completed:todoEL.classList.contains('completed')
})
  })

  localStorage.setItem('todos',JSON.stringify(todos))
}
