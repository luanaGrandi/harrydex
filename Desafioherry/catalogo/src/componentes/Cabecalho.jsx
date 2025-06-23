import estilos from './Cabecalho.module.css';
// estrutura basica para os componentes

export function Cabecalho(){
    return(
        // Cabeçalho
        
        // className={estilos.container} o nome do header para estilizar no css
        <header className={estilos.container}> 
            <h1>MagicLu</h1>
            <h3>Aqui tem os melhores Harry Potter</h3>
        </header>

    )
}