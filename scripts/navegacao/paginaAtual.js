import { paginaInicial } from "../storage/paginaInicial.js";
import { formataEndereco } from "../endereco/formataEndereco.js";
import { paginaAtual, setPaginaAtual } from "../storage/sessaoAtual.js";
import { carregarUrl } from "./carregar.js";

let paginaParaCarregar = paginaAtual !== null ? paginaAtual : paginaInicial;
let enderecoCompleto = formataEndereco(paginaParaCarregar);

carregarUrl(enderecoCompleto);

iframe.addEventListener('load', () => {
    let endereco = iframe.contentWindow.location.href;
    console.log('endereco: ', endereco);
    setPaginaAtual(endereco);
})
