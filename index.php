<?php
    $title = 'Крутой Title';
    $h1 = 'Крутой h1';
    $year = date('Y');
    $time = time();
    function getTimeString($time) {
        $hourForms = ['час', 'часа', 'часов'];
        $minutesForms = ['минута', 'минуты', 'минут'];
        $hours = intval(date('H', $time));
        $minutes = intval(date('i', $time));
        return $hours . ' ' . getStringForm($hours, $hourForms) . 
            ' ' . $minutes . ' ' . getStringForm($minutes, $minutesForms);
    }
    
    function getStringForm($number, $forms) {
        if($number % 10 == 1 && $number % 100 != 11) {
            return $forms[0];
        } else if(($number % 10 > 2 && $number % 10 < 4) &&
            ($number % 100 < 10 || $number % 100 >= 20)) {
            return $forms[1];
        }
        return $forms[2];
    }
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $title ?></title>
</head>
<body>
    <h1><?php echo $h1 ?></h1>
    <p><?php echo $year ?></p>
    <p><?php echo getTimeString($time) ?></p>
</body>
</html>
