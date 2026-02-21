export default function AccountForm () {
    return (
        <>
            <form className="bg-[#0c0c0c] shadow-[0_0_50px_0_rgba(255,255,255,0.1)] flex flex-col w-[50vh] h-[50vh] items-center justify-evenly rounded-2xl">
                        <div className="h-full flex flex-col items-center justify-evenly">
                            <div className="flex flex-col items-center">
                                <div className="min-w-[40vh] flex flex-col p-6">
                                    <div className="flex flex-row gap-2 items-center mb-4">
                                        <img className="h-5 invert" src="https://toppng.com/uploads/thumbnail/cg-user-login-free-login-user-ico-11563177678wz8y8e2eut.png" />
                                        <span className="font-bold text-2xl">Login</span>
                                    </div>
                                    <input className=" rounded p-2 max-w-[30vh] text-white bg-[#1a1a1a]" type="text" placeholder="Digite seu usuário"></input>
                                </div>
                                <div className="min-w-[40vh] flex flex-col p-6">
                                    <div className="flex flex-row gap-2 items-center mb-4">
                                        <img className="h-5 invert" src="https://icons.veryicon.com/png/o/miscellaneous/mall-icon-set/password-117.png"/>
                                        <span className="font-bold text-2xl">Senha</span>
                                    </div>
                                    <div className="flex flex-row gap-5"> 
                                        <input className=" rounded p-2 text-white w-full bg-[#1a1a1a]" type="password" placeholder="Digite sua senha"></input>
                                        <button>
                                                <img className="h-7 border px-1 rounded-xl invert hover:bg-[#dfdfdf] bg-[#e6e6e6]" src="https://static.thenounproject.com/png/777494-200.png"/>
                                        </button>
                                    </div>    
                                </div>
                            </div>
                            <div>
                                <input className="border border-opacity-35 bg-[#1a1a1a] border-black p-1 px-7 font-bold rounded-lg cursor-pointer min-w-[20vh] hover:bg-[#272727]" type="submit" value="Entrar"
                                ></input>
                            </div>
                        </div>
            </form>
        </>
    )
}