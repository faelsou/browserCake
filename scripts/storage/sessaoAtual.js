export let paginaAtual = sessionStorage.getItem('paginaAtual');

export function setPaginaAtual(pagina)
{
    paginaAtual = pagina
    sessionStorage.setItem('paginaAtual', pagina);
}