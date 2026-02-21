import Imdb from "./components/Imdb";
import Most from "./components/Most";
import Rotten from "./components/Rotten";
import Top from "./components/Top";

// Melhor avaliados deve ser o equilíbrio (media aritmética de avaliação) entre rotten tomatoes e imbd.
// Futuramente, tentar implementar lógica de carrossel.
// https://addictedtohorrormovies.com/wp-content/uploads/2016/09/lights-out-still.jpg
// https://wallpapers.com/images/hd/the-sinister-horror-movie-poster-xb779mme1itwxas3.jpg
export default function App () { 
    return (
        <>
            <div className="bg-no-repeat flex flex-col flex-wrap text-white bg-[url('')]">
                <Top/>

                <div id="most-rated" className="ml-16 mt-10 text-3xl font-bold">
                    <span>Filmes melhor avaliados</span>
                </div>

                <Most/>

                <div id="imdb-reference" className="ml-16 mt-10 text-3xl font-bold">
                    <span>Favoritos do IMDB</span>
                </div>

                <Imdb/>
                <div id="rotten-reference" className="ml-16 mt-10 text-3xl font-bold">
                    <span>Favoritos do Rotten Tomatoes</span>
                </div>
                <Rotten />
            </div>
        </>
    )
}