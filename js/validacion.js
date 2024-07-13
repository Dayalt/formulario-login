$(document).ready( function(){
    $("#formulario").validate({

            rules:{
                email:{
                    required: true,
                    email: true,
                },
                password:{
                    required: true,
                    minlength: 6,
                },
            },
            messages:{
                email:{
                    required: "por favor, ingrese su correo electrónico",
                    email: "Por favor, ingrese un correo electrónico válido."
                },

                password:{
                    required: "por favor, ingrese su contraseña",
                    minlength: "Su contraseña debe tener al menos 6 caracteres",
                },
            },
    });



});