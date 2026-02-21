import { useEffect, useState } from "react";
import Card from "./Card"
import SearchCard from "./SearchCard"
import Top from "./Top"
export default function Catalogue () {
    const [filme, setFilme] = useState([]);
    const getMovies = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODY0N2UzNTFiZGM5OTk5ZDY0MTZlNjYxMDAyOTc0OSIsIm5iZiI6MTc3MTUwOTY1OC4zODksInN1YiI6IjY5OTcxNzlhMzBkNzM1Yzg0NDg2MzlhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NeJFruNg90HkWcP6NnUXgeaLdxBWhVMS4cHClg6HRZk'
            }
        };
        const url = `https://api.themoviedb.org/3/discover/movie?language=pt-br&with_genres=27&page=${page}&sort_by=popularity.desc`;
        const response = await fetch(
            url, options
        )
        
        const data = await response.json()
        const {results} = data

        const moviesImage = results.map((movie) => {
            return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        })
        setFilme(moviesImage)
    }

    const createCards = filme.map((link) => <SearchCard urlImage={link}/>)

    const [page, setPage] = useState(1);

    useEffect(() => {
        getMovies()
        
    }, [page]);

    return (
        <>
            <Top/>
            <div className="h-screen flex flex-row text-white">
                <aside className="flex flex-col items-center border-black text-white min-w-1/4 w-5/12 h-full">
                    <span className="text-center p-6 mt-5 font-bold text-3xl w-full">Catálogo</span>
                    <div className="flex justify-center mt-5 w-full ">
                        <div className="flex flex-row w-full justify-center items-center gap-4">
                            <input  className="p-2 w-2/3 border border-black rounded-md text-white bg-[#1a1a1a]" type="text" placeholder="Qual filme deseja avaliar?"></input>
                            <img className="border border-white h-10 p-2 cursor-pointer rounded-full bg-[#e6e6e6] invert" src="https://icons.veryicon.com/png/o/miscellaneous/basic-icon-of-cat-line/filter-79.png"></img>
                        </div>
                    </div>
                        <div className="flex flex-col items-start p-16 w-full  text-xl h-56 justify-center gap-8 text-white rounded">
                            <div className="flex flex-row items-center gap-5 cursor-pointer border border-black p-2 w-2/3 rounded-lg bg-[#1a1a1a]">
                                <span className="font-bold">IMDB</span>
                                <img className="h-8" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/imdb-icon.png"/>
                            </div>
                            <div className="flex flex-row text-white items-center gap-5 cursor-pointer border p-2 w-2/3 rounded-lg border-black bg-[#1a1a1a]">
                                <span className="font-bold">Rotten Tomatoes</span>
                                <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1280px-Rotten_Tomatoes.svg.png"/>
                            </div>
                    </div>
                    
                </aside>
                <div className="flex flex-col w-full">
                    <span className="text-start font-bold text-3xl p-6 mt-5">Foram encontrados {`${filme.length}`} filmes</span>
                    <div className="flex flex-row w-full gap-2 flex-wrap content-start">
                        {createCards}
                    </div>
                    <div className="text-white flex flex-row p-4 justify-center gap-7">
                        <button onClick={() => setPage(page > 1 ? (prev) => prev - 1 : console.log(prev))}>
                            <img className="h-8 invert rotate-180" src="https://www.svgrepo.com/show/327615/arrow-forward-circle.svg"/>
                        </button>
                        <button onClick={() => setPage(page > 0 ? (prev) => prev + 1 : console.log(prev))}>
                            <img className="h-8 invert" src="https://www.svgrepo.com/show/327615/arrow-forward-circle.svg"></img>
                        </button>
                    </div>
                </div>  
            </div>
        </>
    )
}