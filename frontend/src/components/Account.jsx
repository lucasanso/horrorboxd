import AccountForm from "./AccountForm"
import Top from "./Top"

export default function Account () {
    // Ver mais sobre esse gradiente linear, muito interessante na aplicação no background do Myers
    return (
        <>
            <Top/>
            <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.6),rgba(0,0,0,1)),url(https://wallpapers.com/images/hd/halloween-movie-michael-myers-9jqkarxxtbda5sd3.jpg)] text-white h-full">
                <div className="flex flex-row justify-center">
                </div>
                <div className="flex flex-col items-center h-screen justify-center">
                    <AccountForm />
                </div>
            </div>
        </>
    )
}