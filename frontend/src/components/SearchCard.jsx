export default function SearchCard ({urlImage}) {
    return (
        <>
            <div id="search-card" className="border bg-black rounded-xl border-black cursor-pointer size-80 flex justify-center">
                <img className="h-full object-cover" src={urlImage}></img>
            </div>
        </>
    )
}