// Criar aqui o mockup que um filme vai ocupar de espaço
import RateMovie from "./RateMovie";

export default function Card ({nameMovie, datePublished, ratingMovie, ageClassIndicated, urlImage}) {
    
    return (
        <>
            <div className="hover:scale-[1.01]
             transition duration-200 cursor-pointer ease-in-out
             w-96 h-[50vh] rounded-xl bg-black text-white border border-black">
                <div id="movie-card" className="flex justify-center items-center h-[35vh] m-4 rounded-lg">
                    <img className="h-full rounded-lg" src={urlImage ?? 'https://m.media-amazon.com/images/I/911KKs8yPvL._AC_UF1000,1000_QL80_.jpg'}/>
                </div>
                <div id="description" className="font-extrabold mt-7 text-lg">
                    <div className="flex gap-3 justify-center items-center">
                        <span>{nameMovie ?? "Halloween"}</span>
                        <span>|</span>
                        <img className="h-6 border" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Classifica%C3%A7%C3%A3o_Indicativa_18_anos.svg/960px-Classifica%C3%A7%C3%A3o_Indicativa_18_anos.svg.png"></img>
                    </div>
                </div>
            </div>
        </>
    )

}