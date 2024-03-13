import calvoman from "../public/images/Calvoman.png";
import presentacionProducto from "../public/images/Presentacion Producto.png";
import paraLaGenteDePocoPelo from "../public/images/TienesPocoPelo.png";
import textoPruebaElTonico from "../public/images/pruebaeltonico.png";

import video1 from "../public/video/Tónicomechudos1.MOV"

import { ButtonPedirAhora } from "./Buttons";

export const App = () => {
    return (
        <>
            <div className="w-full h-auto flex flex-col gap-10">
                <img src={calvoman} alt="" srcset="" />
                <img src={presentacionProducto} alt="" srcset="" />
                <ButtonPedirAhora />
                <img src={paraLaGenteDePocoPelo} alt="" srcset="" />
                <ButtonPedirAhora />
                <div className="m-5">
                    <img src={textoPruebaElTonico} alt="" srcset="" />
                </div>
                <video src={video1}></video>
                
            </div>
        </>
    )
};