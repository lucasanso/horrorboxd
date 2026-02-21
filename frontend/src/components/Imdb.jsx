import { useEffect, useState } from "react";
import Card from "./Card";

export default function Imdb () {
    const [filme, setFilme] = useState([]);

    const getMovies = async () => {
        const apiUrl = 'http://127.0.0.1:8000/imdb'
        const response = await fetch(apiUrl) // O método GET já é o padrão
        const data = await response.json()
        
        setFilme(data)
        console.log("Dados recebidos:", data)
    }

    useEffect(() =>{
        getMovies();
    }, []);

    return (
        <div className="flex flex-row flex-wrap justify-evenly mt-10 gap-5">
            {/* CORREÇÃO: No map, o primeiro argumento é o ITEM, o segundo é o INDEX */}
            {filme.map((item, index) => (
                <Card 
                    key={index}
                    urlImage={item.img ?? 'https://m.media-amazon.com/images/I/911KKs8yPvL._AC_UF1000,1000_QL80_.jpg'}    // Pega a URL do objeto
                    nameMovie={item.title ?? 'Halloween'} // Pega o título do objeto
                />
            ))}
        </div>
    )
}