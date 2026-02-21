import Card from "./Card";

export default function Most () {
    return (
        <>  
            <div id="principal" className="flex flex-row flex-wrap justify-evenly mt-10 gap-5">
                <Card urlImage={'https://media.fstatic.com/sUrL69jfFd3kH7K6u_jR3EvTD-Q=/350x525/smart/filters:format(webp)/media/movies/covers/2024/10/15691_medio.jpg'} nameMovie={'Sorria 2'}>
                </Card>
                <Card urlImage={'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/31/38/20277419.jpg'} nameMovie={'A Entidade'}/>
                <Card urlImage={'https://br.web.img3.acsta.net/pictures/16/04/08/20/47/242656.jpg'} nameMovie={'Quando as luzes se apagam'}/>
                <Card urlImage={'https://br.web.img2.acsta.net/pictures/23/01/19/16/50/3168009.jpg'} nameMovie={'Pânico VI'}/>
            </div>
        </>
    )
}