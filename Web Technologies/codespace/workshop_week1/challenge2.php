<?php
echo '<h1> Week 2 Challenge <h1>';

function replaceVowelsWithX ($str){
    //$replaced_str = '';
    $vowels = array ('a','e','i', 'u','o','A','E', 'O', 'U', 'I');
    $replaced_str = str_replace($vowels, 'x', $str);
    return $replaced_str;
}

$string = "week 2 challenge string";
$output = replaceVowelsWithX ($string);
echo "replaced string:  ". $output. "<br>";

?>