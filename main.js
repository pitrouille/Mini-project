class toDo{
    constructor(content, statut){
        this.content = content
        this.statut = statut
    }
    getTodo(){
        if (this.statut){
            console.log('oui')
            return `<ul>${this.content}<input type="checkbox" id="todoTrue" checked></input id="delTodo><button id="delTodo">Suprimer</button></ul>`
        }else{
            console.log('non')
            return `<ul>${this.content}<input type="checkbox" id="todoFalse"></input><button id="delTodo">Suprimer</button></ul>`
        }
        
    }
    
}

const bTodo = document.querySelector('#createTodo')
bTodo.addEventListener("click", () => {
    const createTodo = document.querySelector('#contentTodo')
    const newTodo = new toDo(createTodo.value, false)
    console.log(newTodo.getTodo())
    const listTodo = document.querySelector('#todoList')
    listTodo.innerHTML = listTodo.innerHTML + newTodo.getTodo()
    const delButtons = document.querySelectorAll('button')
    delButtons.forEach(delButton => delButton.addEventListener('click', () => {
        delButton.parentElement.innerHTML = ""
    }))
    
})