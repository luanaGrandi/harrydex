import React from "react";
// permitir a navegação pelos componentes -> BrowserRouter
import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./Rotas/Rotas";



//estrutura basica para usar react é atraves das funções
function App() {
//para trazer o resultado da função eu coloco  que quero no Return que deve ter apenas 1 componente

  return (
    <BrowserRouter>
    <Rotas/>
    </BrowserRouter>
    
  );
}

export default App
