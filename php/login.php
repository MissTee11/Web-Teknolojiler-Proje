<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/phppractice/Web Teknolojiler Proje/php/login.css">
</head>
<body>
<img src = "/phppractice/Web Teknolojiler Proje/images/zim.jpg" class = "images">

<?php
if ($_SERVER["REQUEST_METHOD"]== "POST")
{
    $email = $_POST['email'];
    $password = $_POST['password'];

    $expectedemail= "B221210592@sakarya.edu.tr";
    $expectedpassword= "B221210592";

    if($email===$expectedemail && $password===$expectedpassword)
    {
        echo '<div class ="message"> Welcome B221210592!</div>';
        echo'<script>
                setTimeout(function() {
                    window.location.href = "/phppractice/Web%20Teknolojiler%20Proje/home.html";
                }, 3000); // 3 seconds delay
              </script>';
        exit();
    }
    else
    {
        echo'<div class="message error" style="color:grey"> Invalid username or password. Please try again<div>';
        echo'<script>
                setTimeout(function() {
                    window.location.href = "/phppractice/Web%20Teknolojiler%20Proje/index.html";
                }, 3000); // 3 seconds delay
              </script>';
        exit();
    }
}
?>


</body>
</html>