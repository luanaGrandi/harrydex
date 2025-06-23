import estilos from './Footer.module.css';
import { Link } from 'react-router-dom';
// importações do estilo e dos links das paginas


// função footer
export function Footer(){
    return(
        // o container principal 
        <footer className={estilos.container}>
            <h1>LuFlix</h1>
            <p>Aqui tem filmes DIVOS!</p>
            <ul>
                {/* para fazer a nevegação entre os links das paginas (home, series e perfil) */}
                <Link to='/'>
                    <li>
                        Home
                        {/* LINK ICONES */}
                        <span class="material-symbols-outlined">home</span>
                    </li>
                </Link>

                <Link to='series'>
                    <li>
                        Series
                        <span class="material-symbols-outlined">movie</span>
                    </li>
                </Link>

                <Link to='perfil'>
                    <li>
                        Perfil
                        <span class="material-symbols-outlined">person</span>
                    </li>
                </Link>
            </ul>
        </footer>
    )
}