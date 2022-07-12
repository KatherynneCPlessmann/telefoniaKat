//import modules
const express= require('express');
const path = require ('path');

//Create a router object
const router = express.Router();

//export our router
module.exports = router;

//emailer
const nodemailer = require ('nodemailer')


// Route to home page
router.get('/', (req, res)=>{
    
    var publicidad = [
        { aliento: '¡Bienvenido  a Telcel!', avatar: 'https://www.cruzazulfc.com.mx/wp-content/uploads/2017/02/Telceljunio16.jpg'},
        { aliento: '¡Comunícate a donde quieras!', avatar: 'https://www.telcel.com/content/dam/telcelcom/Telefonia/internet/adelanta-megas/imagenes/adelanta-megas-bnm.jpg'}
        ];
res.render('pages/home', {publicidad});
});

// Route to about page
router.get('/about', (req, res)=> {

    res.render('pages/about');
});

// Route to contact page
router.get('/contact', (req, res)=> {
    res.render('pages/contact');
});

//Route to venta de celulares
router.get('/venta', (req, res)=> {
    res.render('pages/venta');
}); 

//Celulares
router.get('/tel1', (req, res)=> {    
    res.render('pages/tel1');
}); 
//Recibo datos del celular
router.post('/reciboEsp1', ( req, res) =>{
    console.log(req.body.color);
    console.log(req.body.plan);
    console.log(req.body.modelo);
    console.log(req.body.precio);
    var color = req.body.color;
    var plan = req.body.plan;
    var modelo = req.body.modelo;
    const precio =parseFloat(req.body.precio);
    console.log(precio);
    var publicidad = [

        { aliento: '¡Gracias por preferirnos!', aviso: 'Los colores de los teléfonos depende de las marcas', avatar: 'https://www.telcel.com/content/dam/telcelcom/empresas/soluciones/trasformacion-digital/impulso-movil-telcel/mensajeria-masiva-empresarial/imagen/mensajeria-masiva-bnm.jpg'},
        { aliento: '¡No te pierdas las nuevas ofertas!', aviso: 'Precios vigentes al día de hoy', avatar: 'https://www.telcel.com/content/dam/telcelcom/empresas/soluciones/localizacion-y-rastreo/localizacion-empresarial-telcel/ventas-y-mercadotecnia/Imagen/ventas-mercadotecnia-v1-bnm.jpg'}
        ];
    res.render('pages/formulario', {color, plan, modelo, precio, publicidad});
} );
//Recibo datos del cliente
router.post('/datosP', ( req, res) =>{
    console.table(req.body);
    
    var c = parseFloat(req.body.canti);
    var precio = parseFloat(req.body.precio);
    var nombre = req.body.nombre; var correo = req.body.correo; var numero = req.body.numero;
    var dir = req.body.dir; var modelo = req.body.modelo; var color = req.body.color;
    var plan = req.body.plan;
    console.table([c,precio]);
    var subtotal = c * precio;
    console.log(` subtotal: ${subtotal}`);
    //16% de IVA
    var impuesto = (precio * 0.16);
    iva = (c * impuesto);
    impuesto = iva.toFixed(2);
    console.log(` impuesto: ${impuesto}`)
    var total =(iva + subtotal);
    console.log(` total: ${total}`)
    
    //Contenido que se va a enviar al correo
    contentHtml= ` <h1 class= "factura">Factura</h1> <br> 
    <h4 class="tec">Compañía:</h4> <br>  
    <p class="text-justify">
    <b>Nombre: </b> Radiomóvil Dipsa S.A. de C.V. <br>
    <b>Sucursal: </b>  Plaza Coronado. <br>
    <b>Dirección: </b> Av. Ensenada No. 24 Esq, Paseo Playas de Tijuana, Playas De Tijuana, 22200 Tijuana, B.C. <br>
    <b>N° factura: </b>  0123 <br><b>Código: </b>  23-34344343-2</p> <br><br>
    <h4 class="tec">Cliente:</h4> <br>
    <p class="text-justify"> 
                <b>Nombre Completo: </b> ${nombre} <br>
                <b>Correo: </b> ${correo} <br>
                <b>Número:</b> ${numero}  <br>
                <b>Dirección:</b> ${dir}  
    </p><br><br>
    <h4 class="tec">Pedido:</h4> <br>
    <ul>
        <li><b>Modelo: </b> ${modelo}</li>
        <li><b>Color: </b> ${color}</li>
        <li><b>Precio: </b> $ ${precio} MXN</li>
        <li><b>Cantidad: </b> ${c}</li>
        <li><b>Plan: </b> ${plan}</li>
        <li><b>Subtotal: </b> $  ${subtotal}  MXN</li>
        <li><b>IVA: </b> $ ${impuesto}  MXN</li>
        <li><b>Total: </b> $ ${total}  MXN</li>
    </ul>`;

    //emailer
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'correo.prueba.uabc@gmail.com',
          pass: 'vtaniylukjjadkin'// Esta es una contraseña de aplicación  vtaniylukjjadkin
        }  //si desea la contraseña para entrar al correo es 0prueba*
      });
      
      var mailOptions = {
        from: 'correo.prueba.uabc@gmail.com',
        to: correo,
        subject: 'Factura',
        html: contentHtml
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
    res.render('pages/factura', {nombre, correo, numero, modelo, dir, plan, color, precio, c, impuesto, subtotal, total});
} );

router.get('/tel2', (req, res) => {
    res.render('pages/tel2');
}); 

router.get('/tel3', (req, res)=> {
    
    res.render('pages/tel3');
}); 

router.get('/tel4', (req, res)=> {
    
    res.render('pages/tel4');
}); 

router.get('/tel5', (req, res)=> {
    
    res.render('pages/tel5');
}); 

router.get('/tel6', (req, res)=> {
    
    res.render('pages/tel6');
}); 

router.get('/tel7', (req, res)=> {
    
    res.render('pages/tel7');
}); 

router.get('/tel8', (req, res)=> {
    
    res.render('pages/tel8');
}); 

router.get('/tel9', (req, res)=> {
    
    res.render('pages/tel9');
}); 

router.get('/tel10', (req, res)=> {
    
    res.render('pages/tel10');
}); 

router.get('/tel11', (req, res)=> {
    
    res.render('pages/tel11');
}); 

router.get('/tel12', (req, res)=> {
    
    res.render('pages/tel12');
}); 
router.get('/tel13', (req, res)=> {
    
    res.render('pages/tel13');
}); 

router.get('/tel14', (req, res)=> {
    
    res.render('pages/tel14');
}); 

router.get('/tel15', (req, res)=> {
    
    res.render('pages/tel15');
}); 

