
const second_inout = document.getElementById('resultat') ;


function inverser(){
        const premier_input = document.getElementById("base").addEventListener("input", function (){
            document.getElementById('resultat').value = this.value.split("").reverse().join("") ;
        }) ;
}