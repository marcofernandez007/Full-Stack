$(document).ready(function(){
    nuevoUser = localStorage.getItem("UsuarioLog");
    // analisisCierre();
    analisis();
})

function analisis(){
    if (localStorage.getItem("estado")=="activo"){
        // console.log(nuevoUser)
        function actualizarUsuario(){
        document.getElementById('userState').innerHTML="<p>"+ nuevoUser + "<img src='https://img.icons8.com/metro/26/000000/online.png' width='13%'>" +"</p>";
        document.getElementById('userLogin').innerHTML="<img src='./media/icons/login.png' alt='' width='20px' onclick='analisisCierre()' title='Log Out' style='cursor: pointer'>";
        $("#userState").animate({height: "auto"});
        $("#userLogin").animate({height: "auto"});
        }
        setTimeout(actualizarUsuario, 400);
        // document.getElementById('registroForm').reset();
    }
    else{
        analisisCierre();
    }
}

function analisisCierre(){
    localStorage.setItem("estado", "inactivo");
    if (localStorage.getItem("estado")=="inactivo"){
        // console.log(nuevoUser)
        function actualizarUsuario(){
        document.getElementById('userState').innerHTML="<a onclick='abrirOverlay()'>" +  "LOG IN" +  "</a>";
        
        
        
        // dirreccion de enlace ...
        document.getElementById('userLogin').innerHTML="<a href='./registro.html'>"+ "REGISTRO" +"</a>";
        $("#userState").animate({height: "auto"});
        $("#userLogin").animate({height: "auto"});
        }
        setTimeout(actualizarUsuario, 400);
        // document.getElementById('registroForm').reset();
    }
}

function abrirOverlay(){
    $(".Overlay").css({display: "block"},0).animate({opacity: "1"},1000)
}

function cerrarOverlay(){
    $(".Overlay").css({display: "none"}, 0)
}

function analisis2(){
    var contraLog = document.getElementById("contraseña2").value.toLowerCase();
    var UsuarioLogin = document.getElementById("usuarios").value.toLowerCase();
    if (localStorage.getItem(UsuarioLogin)!==null){
        var lock= (contraLog==localStorage.getItem(UsuarioLogin)) ? true : false
        switch (lock){
        case true:
            var UsuarioLogin = document.getElementById("usuarios").value.toUpperCase();
            localStorage.setItem("UsuarioLog", UsuarioLogin);
            nuevoUser = localStorage.getItem("UsuarioLog");
            localStorage.setItem("estado", "activo");
            function actualizarUsuario(){
                document.getElementById('userState').innerHTML="<p>"+ nuevoUser + "<img src='https://img.icons8.com/metro/26/000000/online.png' width='13%'>" +"</p>";
                document.getElementById('userLogin').innerHTML="<img src='./media/icons/login.png' alt='' width='20px' onclick='analisisCierre()' title='Log Out' style='cursor: pointer'>";
                
                // CAMBIAR LA LOCACION
                // window.location.href = "inicio.html"
                $("#userState").animat({height: "auto"});
                $("#userLogin").animate({height: "auto"});
                document.getElementById("nombreLog").value = "";
                document.getElementById("apellidoLog").value = "";
                document.getElementById("contraseña2").value = "";
            }
            setTimeout(actualizarUsuario, 400);
            // document.getElementById('registroForm').reset();
            $(".Overlay").css({display: "none"}, 0);
        break;
        case false:
                alert("Contraseña incorrecta")
        }
    }else{
        alert("Usuario No Valido")
    }
}
