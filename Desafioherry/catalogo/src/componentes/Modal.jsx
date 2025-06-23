import estilos from './Modal.module.css';

export function Modal({ movie, onClose }){
    // se não tiver filme, o modal não aparecera
    if (!movie){
        return null;
    }
    // mostrar as info do filme no console
    console.log(movie);

    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.ModalHeader}>
                    {/* quando apertar no X o modal fecha */}
                    <button onClick={onClose}>x</button>
                    {/* titulo do filme */}
                    <h2>{movie.title}</h2>
                   
                   {/* as imagens do filme */}
                    <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    <div className={estilos.movieDetails}>
                        <ul>
                            {/* aqui mostra uma lista de info do filme */}
                            <li>{`Popularidade: ${movie.popularity}`}</li>
                            <li>{`Data de lançamento: ${movie.release_date}`}</li>
                            <li>{`Quantidade de Votos: ${movie.vote_count}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}