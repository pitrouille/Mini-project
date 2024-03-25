class toDo{
    // Notre constructeur
    constructor(content, statut){
        this.content = content
        this.statut = statut
    }
    // Récupère notre Todo
    getTodo(todos){
        const todo = JSON.parse(todos)

        if (todo.statut){
            console.log(newTodo.content)
            return `<ul>${todo.content}<input type="checkbox" id="todoTrue" checked></input id="delTodo><button id="delTodo">Suprimer</button></ul>`
        }else{
            return `<ul>${todo.content}<input type="checkbox" id="todoFalse"></input><button id="delTodo">Suprimer</button></ul>`
        }
        
    }
    getContent(){
        return this.content
    }
    getStatut(){
        return this.statut
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
    const ourTodo = {
        content : newTodo.getContent(),
        statut : newTodo.getStatut()
    }
    localStorage.setItem('todo', JSON.stringify(ourTodo))
    const listTodo = document.querySelector('#todoList')
    
    listTodo.innerHTML = listTodo.innerHTML + newTodo.getTodo(localStorage.getItem('todo'))
    const delButtons = document.querySelectorAll('button')
    delButtons.forEach(delButton => delButton.addEventListener('click', () => {
        delButton.parentElement.innerHTML = ""
        localStorage.removeItem('todo')
    }))
})
