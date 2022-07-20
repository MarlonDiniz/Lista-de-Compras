function adicionar(){
    document.getElementById("texto").value
    document.getElementById("lista").innerHTML;

    if (document.getElementById('texto').value==''){
        alert('Preencha o campo, otário!')
        document.getElementById('texto').focus()
        return false
    }
    
    var text = document.getElementById("texto").value;
    var list = document.getElementById("lista").innerHTML;
    
    list += "<li>" +text+ "</li>"
    
    document.getElementById("lista").innerHTML = list;
    
    document.getElementById("texto").value = null
    document.getElementById('texto').focus()

    
    
}
//não permitir adicionar campo vazio
//permitir marcar o item
//excluir item
//editar item
//adicionar quantidade