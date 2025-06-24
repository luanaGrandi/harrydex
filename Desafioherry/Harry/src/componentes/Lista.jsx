import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from './Card';
import { Modal } from './Modal';
import estilos from './Lista.module.css';

// URL base da API do Harry Potter
const API_URL = 'https://hp-api.onrender.com/api/characters';

export function Lista() {
      // Estados para armazenar os personagens, filtros e personagem selecionado para o modal
    const [personagens, setPersonagens] = useState([]);
    const [filtroNome, setFiltroNome] = useState('');
    const [filtroCasa, setFiltroCasa] = useState('');
    const [selectedPersonagem, setSelectedPersonagem] = useState(null);

    // useEffect para carregar os personagens da API quando o componente monta
    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setPersonagens(response.data);
            })
            .catch(error => {
                console.log('erro', error);
            });
    }, []);

     // Função chamada ao clicar num personagem para abrir o modal
    function handleOpenModal(personagem) {
        setSelectedPersonagem(personagem);
    }

    // Função para fechar o modal, limpando o personagem selecionado
    function handleCloseModal() {
        setSelectedPersonagem(null);
    }

     // Função que padroniza texto para facilitar comparação (remove acentos, espaços e deixa minúsculo)
    function limparTexto(texto) {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }

    // Filtra os personagens pelo nome e pela casa escolhidos
    const personagensFiltrados = personagens.filter(personagem => {
        const nomePersonagem = limparTexto(personagem.name);
        const nomeFiltro = limparTexto(filtroNome);


        // FILTRO PELO PRIMEIRO NOME
        const primeiroNome = nomePersonagem.split(' ')[0];
        const nome = nomeFiltro === '' || primeiroNome === nomeFiltro;

        
         // Verifica se a casa do personagem corresponde ao filtro (ou aceita todos se filtro vazio)
        const casa = filtroCasa === '' || personagem.house === filtroCasa;

        // Retorna true se personagem passar nos dois filtros
        return nome && casa;
    });

    return (
        <>
            <h2 className={estilos.tituloDestaque}>Filtros do Harry Potter</h2>

            {/* buscar por nome */}
            <div className={estilos.filtros}>
                <input
                    type="text"
                    placeholder="Buscar por nome"
                    value={filtroNome}
                    onChange={(e) => setFiltroNome(e.target.value)}
                />

                {/* filtro por casa */}
                <select value={filtroCasa} onChange={(e) => setFiltroCasa(e.target.value)}>
                    <option value="">busca por casas</option>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                </select>
            </div>

            {/* Lista de personagens filtrados */}
            <div className={estilos.container}>
                <figure>
                    {personagensFiltrados.map(personagem => (
                        <Card
                            key={personagem.name}
                            personagem={personagem}
                            onOpenModal={handleOpenModal}
                        />
                    ))}
                </figure>
            </div>

            {/* Modal que mostra os detalhes do personagem selecionado */}
            <Modal personagem={selectedPersonagem} onClose={handleCloseModal} />
        </>
    );
}
