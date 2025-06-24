import { Cabecalho } from "../componentes/Cabecalho";
import { Outlet } from 'react-router-dom';
import { Footer } from "../componentes/Footer";
//  importações das paginas


export function Inicial(){
    return(
        // aparecer os componentes  
        <>  
            <Cabecalho/>
           

            <Outlet/>
            <Footer/>
        </>
    )
}