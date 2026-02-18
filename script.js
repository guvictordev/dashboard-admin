function atualizar(){

let clientes = 124
let vendas = 89
let faturamento = 24590

document.getElementById("clientes").innerText = clientes

document.getElementById("vendas").innerText = vendas

document.getElementById("faturamento").innerText =
faturamento.toLocaleString("pt-BR", {
style:"currency",
currency:"BRL"
})

}

atualizar()
