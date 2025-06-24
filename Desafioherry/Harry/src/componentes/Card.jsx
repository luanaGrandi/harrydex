import estilo from './Card.module.css';

export function Card({ personagem, onOpenModal }) {
    const imagem = personagem.image || 'https://via.placeholder.com/150x200?text=Sem+foto';
    return (
        // estrutura base para o card do personagem
        <div className={estilo.container}>
            <h3 className={estilo.titulo}>{personagem.name}</h3>
            <img 
                className={estilo.image} 
                src={imagem} 
                alt={`Imagem de ${personagem.name}`}
                onClick={() => onOpenModal(personagem)} 
            />
        </div>
    );
}
