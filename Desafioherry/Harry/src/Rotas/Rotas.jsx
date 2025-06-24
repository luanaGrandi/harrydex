import { Routes, Route } from "react-router-dom";
import { Inicial } from "../paginas/Inicial"
import { Lista } from "../componentes/Lista";

// importação das paginas

export function Rotas(){
    return(
        // rotas para cada pagina
        <Routes>
            {/* rota da pagina iniciaç */}
            <Route path='/' element= {<Inicial/>}>
             {/* rota da pagina de lista(filmes) */}
                <Route index element = {<Lista/>}/>
                
            </Route>
        </Routes>
    
    )
}