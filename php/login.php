<?php
if ($_SERVER["REQUEST_METHOD"]== "POST")
{
    $email = $_POST['email'];
    $password = $_POST['password'];

    $expectedemail= "B221210592@sakarya.edu.tr";
    $expectedpassword= "B221210592";

    if($email===$expectedemail && $password===$expectedpassword)
    {
        echo "Welcome B221210592!";
        header("Location:home.html");
        exit();
    }
    else
    {
        echo"invalid username or password. Please try again";
        header("Location:index.html");
        exit;
    }
}

?>