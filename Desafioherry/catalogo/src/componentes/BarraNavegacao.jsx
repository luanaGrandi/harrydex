import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';


// estrutura para o componente React
export function BarraNavegacao(){
    //todo retorno so pode redenrizar um componente
    return(
        <nav className={estilos.container}>
            <ul>
                {/* links para navegar entre as paginas (home, series e pefil) */}
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
                        {/* LINK ICONES */}
                        <span class="material-symbols-outlined">movie</span>
                    </li>
                </Link>

                <Link to='perfil'>
                    <li>
                        Perfil
                        {/* LINK ICONES */}
                        <span class="material-symbols-outlined">person</span>
                    </li>
                </Link>
            
            </ul>
        </nav>
    )
}