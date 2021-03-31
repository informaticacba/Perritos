function pintarBotonBuscar(){
    document.getElementById("boton-buscar").style.backgroundColor = "rgb(6, 92, 6)";
    document.getElementById("boton-buscar").style.boxShadow = "5px 5px 5px rgba(216, 208, 208, 0.919)";
    document.getElementById("boton-buscar").style.fontSize = "15,5px";
}

function despintarBotonBuscar(){
    document.getElementById("boton-buscar").style.backgroundColor = "green";
    document.getElementById("boton-buscar").style.boxShadow = "5px 5px 5px rgba(119, 108, 108, 0.919)";
    document.getElementById("boton-buscar").style.fontSize = "16px";
}

function pintarBotonGuardarPerrito(){
    document.getElementById("boton-guardar-perrito").style.backgroundColor = "rgb(6, 92, 6)";
    document.getElementById("boton-guardar-perrito").style.boxShadow = "5px 5px 5px rgba(216, 208, 208, 0.919)";
    document.getElementById("boton-guardar-perrito").style.fontSize = "15,5px";
}

function pintarBotonModificarPerrito(){
    document.getElementById("boton-modificar-perrito").style.backgroundColor = "rgb(6, 92, 6)";
    document.getElementById("boton-modificar-perrito").style.boxShadow = "5px 5px 5px rgba(216, 208, 208, 0.919)";
    document.getElementById("boton-modificar-perrito").style.fontSize = "15,5px";
}

function pintarBotonEliminarPerrito(){
    document.getElementById("boton-eliminar-perrito").style.backgroundColor = "rgb(6, 92, 6)";
    document.getElementById("boton-eliminar-perrito").style.boxShadow = "5px 5px 5px rgba(216, 208, 208, 0.919)";
    document.getElementById("boton-eliminar-perrito").style.fontSize = "15,5px";
}

function despintarBotonGuardarPerrito(){
    document.getElementById("boton-guardar-perrito").style.backgroundColor = "green";
    document.getElementById("boton-guardar-perrito").style.boxShadow = "5px 5px 5px rgba(119, 108, 108, 0.919)";
    document.getElementById("boton-guardar-perrito").style.fontSize = "16px";
}

function despintarBotonModificarPerrito(){
    document.getElementById("boton-modificar-perrito").style.backgroundColor = "green";
    document.getElementById("boton-modificar-perrito").style.boxShadow = "5px 5px 5px rgba(119, 108, 108, 0.919)";
    document.getElementById("boton-modificar-perrito").style.fontSize = "16px";
}

function despintarBotonEliminarPerrito(){
    document.getElementById("boton-eliminar-perrito").style.backgroundColor = "green";
    document.getElementById("boton-eliminar-perrito").style.boxShadow = "5px 5px 5px rgba(119, 108, 108, 0.919)";
    document.getElementById("boton-eliminar-perrito").style.fontSize = "16px";
}

$(document).ready(function(){

    if($("#boton-buscar").length){
        $("#boton-buscar").click(function(){
            const id = $("#input-buscar").val();
            const action = "searchContact";
            var dataContact = "";
            $.ajax({
                url  : "ajaxData.php",
                type : "POST",
                async: true,
                data :{
                    action:action,
                    id:id
                },
                beforeSend: function(){

                },
                success   : function(response){

                    if(response == "notData"){
                        dataContact = "No hay registro para mostrar.";
                        $("#cuerpo-tabla").html(dataContact);
                    }else{
                        var info = JSON.parse(response);
                        dataContact = `
                                    <div class="filas-cuerpo" id="filas-cuerpo">
                                        <div class="items-cuerpo" id="id-perrito">${info.ID}</>
                                        <div class="items-cuerpo" id="nombre-perrito">${info.NOMBRE}</div>
                                        <div class="items-cuerpo" id="color-perrito">${info.COLOR}</div>
                                        <div class="items-cuerpo" id="raza-perrito">${info.RAZA}</div>
                                    </div>
                                        `
                    }

                    $("#cuerpo-tabla").html(dataContact);

                },
                error     : function(error){
                    console.log(error);
                }
            });
        });
    }

    if($("#input-buscar").length){
        $("#input-buscar").keyup(function(){
            const busqueda = $("#input-buscar").val();
            const action = "searchContactKey";
            var dataContact = "";

            $.ajax({
                url  : "ajaxData.php",
                type : "POST",
                async: true,
                data :{
                    action:action, busqueda:busqueda
                },
                beforeSend: function(){

                },
                success   : function(response){

                    if(response == "notData"){
                        dataContact = "No hay registro para mostrar.";
                    }else{
                        var info = JSON.parse(response);
                        dataContact = info;
                    }

                    $("#cuerpo-tabla").html(dataContact);

                },
                error     : function(error){
                    console.log(error);
                }
            });
        });
    }

    if($("#boton-guardar-perrito").length){
        $("#boton-guardar-perrito").click(function(){
            const nombre = $("#input-nombre").val();
            const color = $("#input-color").val();
            const raza = $("#input-raza").val();
            const action = "guardarPerrito";
            var dataContact = "";
            $.ajax({
                url  : "ajaxData.php",
                type : "POST",
                async: true,
                data :{
                    action:action,
                    nombre:nombre, 
                    color:color, 
                    raza:raza
                },
                beforeSend: function(){

                },
                success   : function(response){


                    cargarListaPerritos();
                    
                },
                error     : function(error){
                    console.log(error);
                }
            });
        });
    }

    if($("#boton-modificar-perrito").length){
        $("#boton-modificar-perrito").click(function(){
            const nombreModificado = $("#input-nombre").val();
            const colorModificado = $("#input-color").val();
            const razaModificada = $("#input-raza").val();
            const idPerrito = $("#input-buscar").val();
            const action = "modificarPerrito";
            var dataContact = "";
            $.ajax({
                url  : "ajaxData.php",
                type : "POST",
                async: true,
                data :{
                    action:action,
                    nombreModificado:nombreModificado,
                    colorModificado:colorModificado,
                    razaModificada:razaModificada,
                    idPerrito:idPerrito
                },
                beforeSend: function(){

                },
                success   : function(response){

                    cargarListaPerritos();

                },
                error     : function(error){
                    console.log(error);
                }
            });
        });
    }

    if($("#boton-eliminar-perrito").length){
        $("#boton-eliminar-perrito").click(function(){
            const idPerrito = $("#input-buscar").val();
            const action = "eliminarPerrito";
            $.ajax({
                url  : "ajaxData.php",
                type : "POST",
                async: true,
                data :{
                    action:action,
                    idPerrito:idPerrito
                },
                beforeSend: function(){

                },
                success   : function(response){

                    cargarListaPerritos();

                },
                error     : function(error){
                    console.log(error);
                }
            });
        });
    }

    if($("#cuerpo-tabla").length){
        cargarListaPerritos();
    }

});//end ready

    function cargarListaPerritos(){
        const action = "listaPerritos";
        const data = "";

        $.ajax({
            url  :"ajaxData.php",
            type : "Post",
            async: true,
            data :{
                action:action
            },
            beforeSend:function(){

            },
            success:function(response){
                if(response == "notData"){
                    data = "No hay datos para mostrar.";
                }else{
                    var data = JSON.parse(response);
                }
                $("#cuerpo-tabla").html(data);
            },
            error: function(error){

            }
        });
    }