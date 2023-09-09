// Registro nuevo usuario

const formRegistro = document.getElementById('form_registro')
const formularioDom = document.querySelector('#form_registro')

function registroUsuario(nombre, contraeña, mail, fecha, nacionalidad){
    this.nombre = nombre;
    this.contraseña = contraeña;
    this.mail = mail;
    this.fecha= fecha;
    this.nacionalidad = nacionalidad;
}

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevoUsuarioIngresado = document.getElementById('nuevoUsuario').value;
    const nuevaContraseñaIngresada = document.getElementById('nuevoContraseña').value;
    const repetirCotraseña = document.getElementById('repetirContraseña').value;
    const mailNuevoUsuario = document.getElementById('mailNuevoUsuario').value;
    const fechaNacimientoNuevoUsuario = document.getElementById('fechaDeNacimientoNuevoUsuario').value;
    const NacionalidadUsuario = document.getElementById('nacionalidadNuevoUsuario').value;

    if (nuevoUsuarioIngresado.length > 10){
        const alertaIn = document.querySelector('#nuevoUsuario');
        alertaIn.style.backgroundColor = 'red'
        formRegistro.reset();
        return
    }

    if (nuevaContraseñaIngresada != repetirCotraseña ){
        console.log("Contraeñas diferentes")
        formRegistro.reset();
        return;
    }

    const usuarioRegistrado = new registroUsuario(nuevoUsuarioIngresado, nuevaContraseñaIngresada, mailNuevoUsuario, fechaNacimientoNuevoUsuario, NacionalidadUsuario);
    console.log(usuarioRegistrado);

})
