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
        .first_number{
            margin: 10px;
        }
        .second_number{
            margin: 10px;
        }
        .operator{
            margin: 10px;
        }
    </style>

  </head>
<body>
<h1> Calculator</h1>

<form class=calculator_form method="POST">
  <label for="first_number">First number: </label><br>
  <input type="text" class= "first_number" id="first_number" name="first_number"> <br>
  <label for="operator">  Choose operator:  </label><br>
  <select name="operator" class = "operator" id="operator">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
</select>
  <label for="second_number">  Second number: </label><br>
  <input type="text" class= "second_number" id="second_number" name="second_number">
  <input type="submit">
 
</form>

</body> 


<?php
echo $_POST["first_number"]; 
echo $_POST["operator"];
echo $_POST["second_number"]; 

function calculator ($num1, $num2, $operator){
    global $result;

    switch ($operator){
        case "+":
            $result = $num1 + $num2;
            break;
        case "-":
            $result = $num1 - $num2;
            break;
        case "*":
            $result = $num1 * $num2;
            break;
        case "/":
            $result = $num1 / $num2;
            break;
    }
    return $result;
}

$num1 = (int)$_POST["first_number"];
$num2 = (int)$_POST["second_number"];
$operator = $_POST["operator"];
if (isset($num1, $num2)) {
$output = calculator ($num1, $num2, $operator);


echo "<h1> Your operation is: ".$num1. "  ". $operator ."  ".$num2. "  Your answer is:  ".$output. "</h1><br>";
}
else{
    echo "please set values";
}

?>