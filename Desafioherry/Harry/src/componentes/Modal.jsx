import estilos from './Modal.module.css';

export function Modal({ personagem, onClose }) {
    // Se não tiver personagem selecionado, o modal não aparece
    if (!personagem) {
        return null;
    }

    console.log(personagem);

    return (
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.ModalHeader}>
                    {/* Botão para fechar o modal */}
                    <button onClick={onClose}>x</button>

                    {/* Nome do personagem */}
                    <h2>{personagem.name}</h2>

                    {/* Imagem do personagem */}
                    <img
                        className={estilos.imgModal}
                        src={personagem.image}
                        alt={`Imagem de ${personagem.name}`}
                    />

                    {/* Detalhes do personagem */}
                    <div className={estilos.personagemDetails}>
                        <ul>
                            <li>{`Casa: ${personagem.house || 'Desconhecida'}`}</li>
                            <li>{`Espécie: ${personagem.species || 'Desconhecida'}`}</li>
                            <li>{`Data de Nascimento: ${personagem.dateOfBirth || 'Desconhecida'}`}</li>
                            <li>{`Ator/Atriz: ${personagem.actor || 'Desconhecido'}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
