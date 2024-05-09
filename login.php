<?php
if ($_SERVER["REQUEST_METHOD"]== "POST")
{
    $email = $_POST['email'];
    $password = $_POST['password'];

    $expectedemail= "B221210592@sakarya.edu.tr";
    $expectedpassword= "B221210592";

    if($email===$expectedemail && $password===$expectedpassword)
    {
        header("Location:home.html")
    }
    else
    {
        header("Location:login.html");
        exit;
    }
}
    else
    {
        header("Location:login.html");
        exit; 
    }

?>