todos=document.querySelector('.todos');
newTodo=document.querySelector('.new');
inputFd=document.querySelector('.new input');
list=document.querySelector('#list');
search=document.querySelector('.search input')
newTodo.addEventListener('submit',e=>{
    e.preventDefault();
   const val=inputFd.value;
  newOne(val);
  newTodo.reset();
})

const newOne=(val)=>{
    const html=`
    <li id="items" class="list-group-item d-flex justify-content-between align-items-center">
    <span>${val}</span>
    <i class="fas fa-trash delete" ></i>
</li> `
list.innerHTML+=html;
}
list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
})


search.addEventListener('keyup',e=>{
    term=search.value.trim().toLowerCase();
    filtered(term);
    })
    const filtered=(term)=>{
       Array.from(list.children)
       .filter((todo)=>!todo.textContent.toLowerCase().includes(term))
       .forEach((todo)=>todo.classList.add('filtered'))

       Array.from(list.children)
       .filter((todo)=>todo.textContent.toLowerCase().includes(term))
       .forEach((todo)=>todo.classList.remove('filtered'))
    };