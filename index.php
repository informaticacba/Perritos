<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perritos</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

    <div class="ancho-completo">
        <div class="buscar-perritos">
            <div class="titulo">
                <h1>PERRITOS_DB</h1>
            </div>
            <div class="div-buscar">
                <input type="text" class="input-buscar" id="input-buscar" placeholder="Buscar">
            </div>
            <div class="div-boton-buscar">
                <div class="boton-buscar" id="boton-buscar" onmousedown="pintarBotonBuscar()" onmouseup="despintarBotonBuscar()">
                    BUSCAR PERRITO
                </div>
            </div>
        </div>
        <div class="formularioytabla">
            <div class="formulario-perritos">
                <div class="div-input">
                    <input type="text" placeholder="Nombre" class="input-formulario" id="input-nombre">
                </div>
                <div class="div-input">
                    <input type="text" placeholder="Color" class="input-formulario" id="input-color">
                </div>
                <div class="div-input">
                    <input type="text" placeholder="Raza" class="input-formulario" id="input-raza">
                </div>
                <div class="div-central-botones">
                    <div class="div-botones">
                        <div class="botones-perritos" id="boton-guardar-perrito" onmousedown="pintarBotonGuardarPerrito()" onmouseup="despintarBotonGuardarPerrito()">GUARDAR</div>
                    </div>
                    <div class="div-botones">
                        <div class="botones-perritos" id="boton-modificar-perrito" onmousedown="pintarBotonModificarPerrito()" onmouseup="despintarBotonModificarPerrito()">MODIFICAR</div>
                    </div>
                    <div class="div-botones">
                        <div class="botones-perritos" id="boton-eliminar-perrito" onmousedown="pintarBotonEliminarPerrito()" onmouseup="despintarBotonEliminarPerrito()">ELIMINAR</div>
                    </div>
                </div>
            </div>
            <div class="tabla-perritos">
                <div class="cabeza-tabla">
                    <div class="items-tabla">ID</div>
                    <div class="items-tabla">NOMBRE</div>
                    <div class="items-tabla">COLOR</div>
                    <div class="items-tabla">RAZA</div>
                </div>
                <div class="cuerpo-tabla" id="cuerpo-tabla">
                        <div class="items-cuerpo" id="id-perrito"></div>
                        <div class="items-cuerpo" id="nombre-perrito"></div>
                        <div class="items-cuerpo" id="color-perrito"></div>
                        <div class="items-cuerpo" id="raza-perrito"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/functions.js"></script>
</body>
</html>