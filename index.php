<?php
echo ' 1 квест. <br>';
$a = 3;
$b = 5;

if($a < 0 && $b < 0) {
    echo $a * $b;  
} else if ($a >= 0 && $b >= 0) {
    echo $a * $b;
} else {
    echo $a + $b;
}

echo '<br>';
echo ' 2 квест. <br>';


$a = 13;
switch ($a) {
    case 0: echo 0 . '<br>';
    case 1: echo 1 . '<br>';
    case 2: echo 2 . '<br>';
    case 3: echo 3 . '<br>';
    case 4: echo 4 . '<br>';
    case 5: echo 5 . '<br>';
    case 6: echo 6 . '<br>';
    case 7: echo 7 . '<br>';
    case 8: echo 8 . '<br>';
    case 9: echo 9 . '<br>';
    case 10: echo 10 . '<br>';
    case 11: echo 11 . '<br>';
    case 12: echo 12 . '<br>';
    case 13: echo 13 . '<br>';
    case 14: echo 14 . '<br>';
    case 15:
        echo 15 . '<br>';
        break;
}

echo '<br>';

echo ' 3 квест. <br>';

function add($a, $b) {
    return $a + $b;
}

function multiply($a, $b) {
    return $a * $b;
}

function divide($a, $b) {
    return $a / $b;
}

function substract($a, $b) {
    return $a - $b;
}

echo ' 4 квест. <br>';

function mathOperation($arg1, $arg2, $operation) {
    switch ($operation) {
        case 'сложение':
            return $arg1 + $arg2;
        case 'вычитание':
            return $arg1 - $arg2;
        case 'умножение':
            return $arg1 * $arg2;
        case 'деление':
            return $arg1 / $arg2;
        default:
            return 'капец';
    }
}

echo ' 6 квест. <br>';
function power($a, $b) {
    if($b <= 0) return 1;
    return $a * power($a, --$b);
}

echo power(5, 3);
?>
