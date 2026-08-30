import Carousel from '../components/CarouselComponent'
import Header from '../components/Header'
import Joseinfo from '../components/JoseInfo'

export default function Home() {
    return(
        <div className='homeContainer'>
        <Header />
       <h1>Objetivo de la Organizacion Jose De Arimatea</h1>
        <Joseinfo/>
        <Carousel carouselCss="carouselComp" />
        </ div>
    )
}