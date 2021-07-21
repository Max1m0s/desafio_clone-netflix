$('.owl-carousel').owlCarousel({
    loop:true, /* loop do carrosel */
    margin:10,  
    nav:false,   /* menu que aparece abaixo do carrousel */
    responsive:{
        0:{ /* qtd de elementos para telas próximas de 0px */
            items:1
        },
        600:{ /* qtd de elementos para telas acima de 600px */
            items:3
        },
        1000:{  /* qtd de elementos para telas com mais de 1000px */
            items:5
        }
    }
})