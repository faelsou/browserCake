import * as historico from './historico.js';
import { carregarUrl } from './carregar.js';

btnVoltar.addEventListener('click', () => {
    btnVoltar.disable = true;
    btnAvancar.disable = true;
    let enderecoVolta = historico.volta();
    if (enderecoVolta !== undefined) {
        carregarUrl(enderecoVolta);
    }
});

btnAvancar.addEventListener('click', () => {
    btnVoltar.disable = true;
    btnAvancar.disable = true;
    let enderecoAvanca = historico.avanca();
    if (enderecoAvanca !== undefined) {
        carregarUrl(enderecoAvanca);
        
    }
});

iframe.addEventListener('load', () => {
    let endereco = iframe.contentWindow.location.href;
    historico.adiciona(endereco);
    btnVoltar.disable = false;
    btnAvancar.disable = false;
});