const fs = require('fs');
const hbs = require('hbs');
var imagenes =["imagenes/menu-pizza.jpg","imagenes/menu-burger.jpg","imagenes/tacos.jpg","imagenes/crepes.jpg","imagenes/hotdog.jpg","imagenes/alitas.jpg"];
var nombres = ["Pizza", "Hamburguesa", "Tacos", "Crep", "Hot Dog", "Alitas"];
var precios = ["$15.00", "$3.50", "$2.50", "$1.50", "$1.80", "$4.00"];
var descrip = ["Queso, piña, tosino, jamón", "Pan, carne", "Arina, carne, pollo", "Fresas, crema, helado", "Salchicha, salsas, papas, cebolla", "BBQ, salteadas, picantes"];
var imagenescat=["imagenes/pizza.jpg","imagenes/burger.jpg","imagenes/momo.jpg"];
var nombrescat=["Pizza","Burger","Momo"];

hbs.registerHelper("getPlatos", function (){
    var pro = "";
    for (var i = 0; i < imagenes.length; i++){
        pro += '<div class="menu-comidas-item">';
        pro += '                <div class="img-plato">';
        pro += '<img src="'+imagenes[i]+'" alt="Pizza Hawayana" class="img-responsive">';
        pro += '</div>';
        pro += '<div class="desc-plato-menu">';
        pro += '<h4>'+nombres[i]+'</h4>';
        pro += '<p class="precio-plato">'+precios[i]+'</p>';
        pro += ' <p class="desc-plato">'+descrip[i]+'</p>';
        pro += '<br>';
        pro += '<a href="#" class="boton boton-color">Ordenar</a>';
        pro += '</div>';
        pro += '<div class="limpiar"></div>';
        pro += '</div>';
    }

    //console.log(pro);
    return new hbs.SafeString(pro);
});

hbs.registerHelper("getCategoria", function (){
    var cat = "";
   
    for (var i = 0; i < imagenescat.length; i++){
        cat += '<a href="#">';
        cat += '<div class="cuadro-3 float-contenedor">';              
        cat += '<img src="'+imagenescat[i]+'" alt="'+nombrescat[i]+'" class="img-responsive img-redondeado">';
        cat += '<h3 class="float-text text-blanco">'+nombrescat[i]+'</h3>';
        cat += '</div>';
        cat += '</a>';
       
    }

    //console.log(pro);
    return new hbs.SafeString(cat);
});