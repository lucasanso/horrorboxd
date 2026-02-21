import { Link } from "react-router-dom"
import Settings from "./Settings"

export default function Top () {
    return (
        <>
            <div className="h-[7vh] flex bg-black text-white w-screen justify-between">
                
                <div id="logo" className="flex items-center gap-3">
                    <Link to="/">
                        <img className="h-10 ml-7" src="https://i.pinimg.com/236x/38/ff/53/38ff53caa6ad45b74d51bc2cfd37c588.jpg"/>
                    </Link>
                </div>
                <div id="item-right" className="flex items-center mr-4 gap-10">
                    <button>
                        <Link to="/catalogo">
                            <img className="h-8 invert" src="https://www.svgrepo.com/show/343264/replicate-alt.svg"/>
                        </Link>
                    </button>
                    <button>
                        <Link to="/ajustes">
                            <img className="h-7 invert" src="https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png"/>
                        </Link>
                    </button>
                    <button>
                        <Link to="/conta">
                            <img className="h-8 invert" src="https://freesvg.org/img/abstract-user-flat-4.png"/>
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}