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

<form class=table method="POST">
  <label for="number"> Number: </label><br>
  <input type="text" class= "number" id="number" name="number"> <br>
  
  <input type="submit">
</form>

</body>

<?php
$num = (int)$_POST ["number"];

echo "<h2> You have entered number: ".$num."</h2><br>";
echo '<h3> Multiplication table: </h3><br>';

for ($i=1; $i<=10; $i++){
    echo "<div> ". $num. " X ".$i. " = ". $num*$i. "</div><br>";
}

?>