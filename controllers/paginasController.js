import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js'

const paginaInicio = async (req, res) => { //req - lo que enviamos : res -> lo que express nos responde

    //Consultar 3 viajes del modelo Viaje

    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({limit: 3}))

    try {
        //Ambas consultas se ejecutaran al mismo tiempo
        const resultado = await Promise.all(promiseDB)

        res.render('Inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (req, res) => { //req - lo que enviamos : res -> lo que express nos responde
    res.render('nosotros', {
        pagina: 'Blog de destinos en Nariño'
    })
}

const paginaViajes = async (req, res) => { //req - lo que enviamos : res -> lo que express nos responde
    //Consultar la base de datos
    const viajes = await Viaje.findAll();
    console.log(viajes)

    res.render('viajes', {
        pagina: 'Destinos Unicos',
        viajes
    })
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render('viaje', {
            pagina: 'Informacion viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaTestimoniales = async (req, res) => { //req - lo que enviamos : res -> lo que express nos responde
    try{
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Comentarios de Usuarios',
            testimoniales
        })
    }catch(error){
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}