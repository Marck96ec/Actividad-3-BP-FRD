
// document.querySelector('input').value.addEventListener("blur", myFunction);
window.addEventListener('DOMContentLoaded',function(e) {
    const element = document.querySelector('button');
    element.addEventListener("click", alerta_contenido);
});


function alerta_contenido2(input) {
    document.getElementById("new_valor").innerHTML = input;
}
function alerta_contenido() {
     var input = document.getElementById('new_valor').innerHTML;
    //var input = document.querySelector('input').value;
    
    alert(input);

    var content_container = document.getElementById("contenido");
    var new_content = "";

    console.log(input);
    
    if (parseInt(input)) {
        for (let inicio = 0; inicio < parseInt(input); inicio++) {
            new_content = new_content + content_container.innerHTML;
        }

        document.getElementById("new_content").innerHTML = new_content;
    }

    
    
}

