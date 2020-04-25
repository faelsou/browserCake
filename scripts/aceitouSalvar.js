let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'));
if(aceitouSalvar === null){
    aceitouSalvar = confirm(' Voce aceita que possamos salvar suas informações?');
    if(!aceitouSalvar){
        alert('Voce pode mudar isso na pagina osteriormente');
    }
    localStorage.setItem('aceitouSalvar', aceitouSalvar);
}

export default aceitouSalvar;