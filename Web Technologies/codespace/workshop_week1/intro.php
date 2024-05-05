<?php
    echo '<h1> Hello World! <h1> ';
    echo '<h2> Hello Kate <h2>';

    $string1 = " Olha";
    $string2 = "Sadova";

    $concat = $string1 ." ". $string2;
    $length = strlen($concat);
    $uppercase = strtoupper($concat);

    echo $string1 . "<br>";
    echo $string2 . "<br>";
    echo $concat . "<br>";
    echo "Concatenated string length is ". $length;
    echo $uppercase . "<br>";
    
    
    $number1 = 10;
    $number2 = 1.5;

    $difference= $number1 - $number2;
    $price = $number1 * $number2;
    echo  "Difference " . $difference. "<div>";
    echo "Price ". $price. "<div>";

    $seasons = array ("Winter", "Spring", "Summer", "Autumn");
    foreach ($seasons as $key => $value) {
        echo $key . ' contains ' . $value . '<br/>';
    }


    $salaries = array ("ally" => 2000, "jade"=> 1000, "hannah" => 500);
    echo "salary of Ally is £ ". $salaries['ally'] . ".00 <br>";
    echo "salary of Jade is £ ". $salaries['jade'] . ".00 <br>";
    echo "salary of Hannah is £ ". $salaries['hannah'] . ".00 <br>";


?>