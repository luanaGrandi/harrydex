import estilos from './Cabecalho.module.css';
// estrutura basica para os componentes

export function Cabecalho(){
    return(
        // Cabeçalho
        
        // className={estilos.container} o nome do header para estilizar no css
        <header className={estilos.container}> 
            <h1>LuFlix</h1>
            <h3>Aqui tem filmes DIVOS!</h3>
        </header>
    )
}