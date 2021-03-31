<?php

    if($_POST){
        require_once("conexion.php");

        if($_POST["action"] == "searchContact"){
            if(!empty($_POST["id"])){
                $arrContact = array();
                $intId = intval($_POST["id"]);
                $query_select = mysqli_query($conection,"SELECT * FROM PERRITOS WHERE ID = $intId");
                $num_rows = mysqli_num_rows($query_select);
                if($num_rows > 0){
                    $arrContact = mysqli_fetch_assoc($query_select);
                    echo json_encode($arrContact,JSON_UNESCAPED_UNICODE);
                }else{
                    echo "notData";
                }
                exit;
            }
        }

        //Buscar por input

        if($_POST["action"] == "searchContactKey"){
            $searchData = $_POST["busqueda"];
            $query_select = mysqli_query($conection,"SELECT * FROM PERRITOS WHERE 
                                                        ID LIKE '%$searchData%' OR 
                                                        NOMBRE LIKE '%$searchData%' OR 
                                                        COLOR LIKE '%$searchData%' OR 
                                                        RAZA LIKE '%$searchData%'
                                                        ");
            $num_rows = mysqli_num_rows($query_select);
            if($num_rows > 0){
                $htmlTable = "";
                while($row = mysqli_fetch_assoc($query_select)){
                    $htmlTable .='
                            <div class="items-cuerpo" id="id-perrito">'.$row['ID'].'</div>
                            <div class="items-cuerpo" id="nombre-perrito">'.$row['NOMBRE'].'</div>
                            <div class="items-cuerpo" id="color-perrito">'.$row['COLOR'].'</div>
                            <div class="items-cuerpo" id="raza-perrito">'.$row['RAZA'].'</div>
                    '; 
                }
                echo json_encode($htmlTable,JSON_UNESCAPED_UNICODE);
            }else{
                echo "notData";
            }
            exit;        
        }

        if($_POST["action"] == "listaPerritos"){
            $query_select = mysqli_query($conection,"SELECT * FROM PERRITOS");
            $num_rows = mysqli_num_rows($query_select);
            if($num_rows > 0){
                $htmlTable = "";
                while($row = mysqli_fetch_assoc($query_select)){
                    $htmlTable .='
                            <div class="items-cuerpo" id="id-perrito">'.$row['ID'].'</div>
                            <div class="items-cuerpo" id="nombre-perrito">'.$row['NOMBRE'].'</div>
                            <div class="items-cuerpo" id="color-perrito">'.$row['COLOR'].'</div>
                            <div class="items-cuerpo" id="raza-perrito">'.$row['RAZA'].'</div>
                    '; 
                }
                echo json_encode($htmlTable,JSON_UNESCAPED_UNICODE);
            }else{
                echo "notData";
            }
            exit;        
        }

        if($_POST["action"] == "guardarPerrito"){

            $nombrePerrito = $_POST["nombre"];
            $colorPerrito = $_POST["color"];
            $razaPerrito = $_POST["raza"];

            $query_select = mysqli_query($conection,"INSERT INTO PERRITOS (NOMBRE, COLOR, RAZA) VALUES ('$nombrePerrito','$colorPerrito','$razaPerrito')");
            
        }

        if($_POST["action"] == "modificarPerrito"){

            $nombreModificadoPerrito = $_POST["nombreModificado"];
            $colorModificadoPerrito = $_POST["colorModificado"];
            $razaModificadaPerrito = $_POST["razaModificada"];
            $idPerrito = $_POST["idPerrito"];

            $query_select = mysqli_query($conection,"UPDATE PERRITOS SET NOMBRE = '$nombreModificadoPerrito' WHERE ID = '$idPerrito';");
            $query_select = mysqli_query($conection,"UPDATE PERRITOS SET COLOR = '$colorModificadoPerrito' WHERE ID = '$idPerrito';");
            $query_select = mysqli_query($conection,"UPDATE PERRITOS SET RAZA = '$razaModificadaPerrito' WHERE ID = '$idPerrito';");
        }

        if($_POST["action"] == "eliminarPerrito"){

            $idPerrito = $_POST["idPerrito"];

            $query_select = mysqli_query($conection,"DELETE FROM `perritos` WHERE `perritos`.`ID` = '$idPerrito'");
        }




    }
?>