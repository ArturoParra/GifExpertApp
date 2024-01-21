import GifCard from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";


const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category)
    

    return(
        <>
            <h3>{ category }</h3>
            {/* componente personalizado con mensaje de carga */}
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifCard key={ img.id } 
                        { ...img }
                        />                        
                    ) )
                }
            </div>
        </>
    )

}




export default GifGrid