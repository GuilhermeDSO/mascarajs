let campoCPF = document.querySelector("#cpf")
let campoRG = document.querySelector("#rg")
let campoCNPJ = document.querySelector("#cnpj")
let campoTEL = document.querySelector("#tel")

campoTEL.addEventListener("keypress",()=>{


    let tamanhoTEL = campoTEL.value.length
    if(tamanhoTEL == 0){
        campoTEL.value += "("
    }
    if(tamanhoTEL == 4){
        campoTEL.value += ")"
}

})


campoCNPJ.addEventListener("keypress",()=>{
    let tamanhoCNPJ = campoCNPJ.value.length

    if(tamanhoCNPJ == 2 || tamanhoCNPJ == 6){
        campoCNPJ.value += "."
    }
    if(tamanhoCNPJ == 10){
        campoCNPJ.value += "/"
    }
    else if(tamanhoCNPJ == 15){
        campoCNPJ.value += "-"
    }
})



campoRG.addEventListener("keypress",()=>{
    let tamanhoRG = campoRG.value.length

    if(tamanhoRG == 2 || tamanhoRG == 6){
        campoRG.value += "."
    }
    if(tamanhoRG == 10){
        campoRG.value += "-"
    }
})

campoCPF.addEventListener("keypress", ()=>{
    let tamanhoCPF = campoCPF.value.length
    
    if(tamanhoCPF == 3 || tamanhoCPF == 7) {
        campoCPF.value += "."
    }
    if(tamanhoCPF == 11){
        campoCPF.value += "-"
    }
})

