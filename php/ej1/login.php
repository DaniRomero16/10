<?php
session_start();
if($_POST["usuario"] == "Jairo" && $_POST["password"] == "codespace"){
  $_SESSION["logged"] = "yes";
  header("Location: /hola.php");
  return;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <form action="" method="post">
    <?
      if($_POST["usuario"]){
        echo "Error, usuario no valido!";
      }
    ?>
    <input type="text" name="usuario">
    <input type="password" name="password">
    <input type="submit" value="Enviar">
  </form>
</body>
</html>