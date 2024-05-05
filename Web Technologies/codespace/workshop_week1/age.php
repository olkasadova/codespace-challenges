<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Calculator</title>
    <style>
        .calculator_form{
            display: flex;
            justify-content: center;
            font-weight: bold;
            padding: 10px;
        }
        .number{
            margin: 10px;
            padding: 10px;
        }
        
    </style>

  </head>
<body>
<h1> Multiplication Table</h1>

<form class=age method="POST">
  <label for="age"> Please provide your age: </label><br>
  <input type="text" class= "age" id="age" name="age"> <br>
  
  <input type="submit" value = "Submit age">
</form>

</body>

<?php
$age = (int)$_POST ["age"];

echo "<h2> You have entered your age: ".$age."</h2><br>";
if ($age < 13){
    echo '<h3> You are a child. </h3> <br>';
}
elseif (($age > 13)&&($age< 17)){
    echo '<h3> You are a teenager. </h3> <br>';
}
elseif (($age > 18)&&($age< 64)){
    echo '<h3> You are an adult. </h3> <br>';
}
else{
    echo '<h3> You are a senior citizen. </h3> <br>';
}


?>