function pesquisar(){

    var input = document.getElementById('input').value;

    input = input.toLowerCase()

    var list = document.getElementsByClassName('animais');

    for(i = 0; i < list.length; i++){
        if(!list[i].innerHTML.toLowerCase().includes(input)){
        list[i].style.display = "none";
        }else{
        list[i].style.display = "list-item";
        }
    }
}