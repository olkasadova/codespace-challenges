<?php
echo '<h1> Week 1 challenge <h1>';

$width = 10;
$height = 5;

$area = $width * $height;
echo "Area of rectangle with width " . $width . " and height " . $height . " is " . $area . "<br>";

$num1 = 10;
$num2 = 5;

$sum = $num1 + $num2;
$subtract = $num1 - $num2;
$multiply = $num1 * $num2;
$divide = $num1/ $num2;
$concat = $num1 ." " . $num2;

echo "Addition of ". $num1 . " and " . $num2 ." is: " .$sum . "<br>";
echo "Subtraction of ". $num1 . " and " . $num2 ." is: " .$subtract . "<br>";
echo "Multiplication of ". $num1 . " and " . $num2 ." is: " .$multiply . "<br>";
echo "Division of ". $num1 . " and " . $num2 ." is: " .$divide . "<br>";
echo "Concatenation of ". $num1 . " and " . $num2 ." is: " .$concat . "<br>";


echo '<h1> Welcome to age calculator </h1>';
$age = 45;
$days = (intdiv($age, 4) *3 * 365) + (intdiv($age, 4) *366);
$hours = $days* 24;
$minutes = $hours * 60;

echo "<div> You have been alive for: </div>";
echo  $days . " days <div>" ;
echo  $hours . " hours <div>" ;
echo  $minutes . " minutes <div>" ;
echo "<br>";

$week = array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
foreach ($week as $value){
    echo "$value" . "<br>";
}
echo "<br>";
echo "<br>";

$salaries = array("ally" => 2000, "jade" => 1000, "hannah" => 500);
$weather = array ("July-Aug_low"=> 11,"July-Aug_high"=> 19, "Jan-Feb_low"=> 1, "Jan-Feb_high"=> 7);

$student = array (
 "Aaron"=> array (
    "Physics"=> "74%",
    "English"=> "69%",
    "Maths"=> "70%"
 ),
"Jamie"=> array(
    "Physics"=> "64%",
    "English"=> "79%",
    "Maths" => "69%"
),
"Harry"=> array(
    "Physics"=> "55%",
    "English"=> "52%",
    "Maths" => "57%"
),  
);
echo "Aaron results in Physics : ". $student['Aaron']['Physics']. "<br>";
echo "Jamie results in Physics : ". $student['Jamie']['English']. "<br>";
echo "Harry results in Physics : ". $student['Harry']['Maths']. "<br>";

?>