import { aceitouSalvar, setAceitouSalvar } from  './storage/aceitouSalvar.js';
import { paginaInicial, setPaginaInicial } from './storage/paginaInicial.js';
import { formataEndereco } from './endereco/formataEndereco.js';

inputPaginaInicial.value =  paginaInicial;
inputPermitiuSalvar.checked = aceitouSalvar;

btnSalvar.onclick = () => {
    let enderecoCorrigido = formataEndereco(inputPaginaInicial.value);
    setPaginaInicial(enderecoCorrigido);
    setAceitouSalvar (inputPermitiuSalvar.checked);
    alert('Configurações salvas com sucesso!:)');
    window.location.reload(); 
}

btnLimpar.addEventListener('click', () =>{
    sessionStorage.clear();
    const chavesPermanentes = ['aceitouSalvar', 'aceitouOsTermos'];
    const listaDeChaves = Object.keys(localStorage);
    listaDeChaves.forEach(chave => {
        if(!chavesPermanentes.includes(chave)) {
            localStorage.removeItem(chave);
        }
    })


    alert('Suas configurações foram removidas com sucesso!')
    window.location.reload();
});