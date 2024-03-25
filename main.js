class toDo{
    // Notre constructeur
    constructor(content, statut){
        this.content = content
        this.statut = statut
    }
    // Récupère notre Todo
    getTodo(){
        if (this.statut){
            return `<ul>${this.content}<input type="checkbox" id="todoTrue" checked></input id="delTodo><button id="delTodo">Suprimer</button></ul>`
        }else{
            return `<ul>${this.content}<input type="checkbox" id="todoFalse"></input><button id="delTodo">Suprimer</button></ul>`
        }
        
    }
    
}

// const bTodo = document.querySelector('#createTodo')
// bTodo.addEventListener("click", () => {
//     const createTodo = document.querySelector('#contentTodo')
//     const newTodo = new toDo(createTodo.value, false)
//     console.log(newTodo.getTodo())
//     const listTodo = document.querySelector('#todoList')
//     listTodo.innerHTML = listTodo.innerHTML + newTodo.getTodo()
//     const delButtons = document.querySelectorAll('button')
//     delButtons.forEach(delButton => delButton.addEventListener('click', () => {
//         delButton.parentElement.innerHTML = ""
//     }))
// })

const bTodo = document.querySelector('#createTodo')
bTodo.addEventListener("click", () => {
    const createTodo = document.querySelector('#contentTodo')
    const newTodo = new toDo(createTodo.value, false)
    localStorage.setItem('todo', newTodo)
    const listTodo = document.querySelector('#todoList')
    listTodo.innerHTML = listTodo.innerHTML + newTodo.getTodo()
    const delButtons = document.querySelectorAll('button')
    delButtons.forEach(delButton => delButton.addEventListener('click', () => {
        delButton.parentElement.innerHTML = ""
        localStorage.removeItem(createTodo.value)
    }))
})