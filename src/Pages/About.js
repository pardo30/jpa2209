import React from 'react'

const About = () => {
  return (
    <div className='About'>
        <div class="aboutText">
        <div class="contacto-txt">
            <h2>Javier Pardo</h2>
            <p>Desde pequeño siempre tuve inquietudes artísticas, que fui desarrollando poco a poco mediante cursos de dibujo, cerámica, esmalte al fuego o pintura de seda, y de manera autodidacta. Hace años descubrí las técnicas del grabado como posibilidad de plasmar mis ideas de muy diferentes maneras, aprovechando todas las posibilidades que ofrecen, desde el dibujo muy preciso del aguafuerte, las pinceladas del aguatinta, los pequeños bajorrelieves de la xilografía y el linóleo, o las técnicas más actuales de grabado digital. Empecé a experimentar con la posibilidad de pasar del grabado plano al tridimensional, sacándolo del papel mediante recortes y adiciones, separando figuras, plegándolo, relacionando distintas capas, etc. La última etapa de esta línea de expresión está basada en la idea de la superposición, de imágenes, de figuras, de planos, de ideas. Del espacio y del tiempo.</p>
            <p>Curso estudios de grabado en la Escuela de Grabado y Diseño Gráfico de la Fundación de la Casa de la Moneda y en los Centros Culturales de Moratalaz y Barajas de Madrid.</p>
            <p>Si quieres ponerte en contacto conmigo no dudes en escribirme a <b><a href="mailto:info@javierpardoarte.com">info@javierpardoarte.com</a></b></p>
        </div>
        </div>
        <div class="aboutImage">
        <img 
                        src={process.env.PUBLIC_URL+"/img/expo_sq.jpg"} 
                        alt={"Exposición SUPERPOSICIONES"}
                        />
        </div>
    </div>
  )
}

export default About