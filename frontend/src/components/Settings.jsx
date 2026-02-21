import { useEffect, useState } from "react"
import Top from "./Top"

// Adicionar a lógica de diminuir tamanho da fontee tamanho dos ícones
// localStorage só armazena strings! não sabia
export default function Settings () {
    const [size, setSize] = useState(() => {
        const saved = localStorage.getItem('changeSize')
        return saved 
    });

    const switchSize = () => {
        setSize(!size)
    }

    useEffect(() => {
        localStorage.setItem('changeSize', size)
    }, [size])

    const getSize = () => size ? 'text-sm' : 'text-2xl';

    return (
        <>  
            <div className={`${getSize()}`}>
                <Top/>
                <div className={`bg-[linear-gradient(to_top,rgba(0,0,0,0.92),rgba(0,0,0,1)),url('https://wallpapers.com/images/hd/the-sinister-horror-movie-poster-xb779mme1itwxas3.jpg')]`}>
                    <div className=" text-white h-screen">
                        <div className="p-10">
                            <span className="w-screen font-bold mt-10">Ajustes</span>
                        </div>
                        <div className="bg-[#1a1a1a] ml-10 p-3 rounded-3xl border border-black mt-10 flex flex-row w-[30vh] justify-center items-center gap-3">
                            <span className="font-bold">Alterar tema</span>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer"/>
                                    <div class="relative w-9 h-5 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                                </label>
                        </div>
                        <div className="bg-[#1a1a1a] ml-10 p-3 rounded-3xl border border-black mt-10 flex flex-row w-[50vh] justify-center items-center gap-3">
                            <span className="font-bold" onClick={switchSize}>Diminuir tamanho da fonte</span>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" onClick={switchSize}/>
                                    <div class="relative w-9 h-5 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                                </label>
                        </div>
                        <div className="bg-[#1a1a1a] border-black ml-10 p-3 rounded-3xl border mt-10 flex flex-row w-[50vh] justify-center items-center gap-3">
                            <span className="font-bold">Diminuir tamanho dos ícones</span>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer"/>
                                    <div class="relative w-9 h-5 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                                </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}