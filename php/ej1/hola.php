<?php
    session_start();//inicio la session

    if($_SESSION["logged"] != "yes"){
        return;
    }

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $extension = pathinfo($_FILES["avatar"]["name"], PATHINFO_EXTENSION);
        $route = $_FILES["avatar"]["tmp_name"];
        $destinationName = generateRandomString() . "." . $extension;
        $destination = "./uploads/" . $destinationName;

        move_uploaded_file($route, $destination);
        $_SESSION["avatar"] = $destinationName;
        $_SESSION["name"] = $_POST["nombre"];
    }

    function generateRandomString($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
    ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo "Aprendiendo PHP" ?></title>
</head>
<body>
<?php if (isset($_SESSION["avatar"])) : ?>
<br>
<?php echo $_SESSION["name"] ?>
<br>
<img src="/uploads/<?php echo $_SESSION["avatar"] ?>">
<?php endif; ?>

<form enctype="multipart/form-data" action="/hola.php" method="post">
<span style ="color:red;">
    <?php
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        if ($_FILES["avatar"] != "") {
            $name = $_POST["nombre"];
            $fistChar = $name {0};
            if (ctype_upper($fistChar)) {
                echo "ERROR";
            }
        }
    }
    ?>
    </span>
    <br>
    <input type="text" name="nombre" id="nombre">
    <input type="file" name="avatar" id="avatar">
    <input type="submit" value ="Enviar">
    <br>
    <a href="?hola=yes">hola</a>
    <?php
        if($_GET["hola"]){
            echo 'hola esta definido';
        };
    ?>
    <br>
</form>


</body>
</html>