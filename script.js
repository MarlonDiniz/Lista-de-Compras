const elementoLista = document.querySelector('ul')
const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')

document.getElementById('texto').focus()

const tarefas = JSON.parse(localStorage.getItem('list_tarefas')) ?? []

function mostraTarefas() {

    elementoLista.innerHTML = ''

    for (Item of tarefas) {

        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(Item)

        const elementoLink = document.createElement('a')
        const pos = tarefas.indexOf(Item)

        const linkText = document.createTextNode('Excluir Item')
        elementoLink.appendChild(linkText)

        elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoLink)
        document.getElementById('texto').focus()
    }
}

mostraTarefas()

function addTarefa() {

    if (document.getElementById('texto').value.trim() == '') {
        alert('Preencha o campo, troxão!')
        return
    }
    const textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    elementoInput.value = ''
    salvarnolocalstorage()
    mostraTarefas()
    event.preventDefault()

}

elementoBotao.setAttribute('onclick', 'addTarefa()')

function deletaTarefa(pos) {
    tarefas.splice(pos, 1)
    mostraTarefas()
    salvarnolocalstorage()
    document.getElementById('texto').focus()
}

function salvarnolocalstorage() {
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas))
}



//adicionar com ENTER '-'
//limitador de campo
//permitir marcar o item
//editar item
//adicionar quantidade
//excluir item '-'
//não permitir adicionar campo vazio '-'
// event.preventDefault() --para não enviar formulário
//imlementar sort - ordenar 
// preventdefault para nao enviar o form