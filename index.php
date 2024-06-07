<?php

$i = 0;
do {
    if($i == 0) {
        echo $i . ' - это ноль <br>';
    } else if($i % 2 == 0) {
        echo $i . ' - чётное число <br>';
    } else {
        echo $i . ' - нечётное число <br>';
    }
    $i++;
} while($i<=10);


echo '2 квест. <br>';

$regions = [
    'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
    'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск, Кронштадт'],
    'Рязанская область' => ['Рязань', 'Ряяязааань', 'Крутая-Рязань']
];

foreach($regions as $region => $cities) {
    echo $region . ':<br>';
    echo join(', ', $cities) . '.<br>';
}

$letters = [
    'а' => 'a',
    'б' => 'b',
    'в' => 'v',
    'г' => 'g',
    'д' => 'd',
    'е' => 'e',
    'ё' => 'yo',
    'ж' => 'zsh',
    'з' => 'z',
    'и' => 'i',
    'й' => 'iy',
    'к' => 'k',
    'л' => 'l',
    'м' => 'm',
    'н' => 'n',
    'о' => 'o',
    'п' => 'p',
    'р' => 'r',
    'с' => 's',
    'т' => 't',
    'у' => 'u',
    'ф' => 'f',
    'х' => 'h',
    'ц' => 'c',
    'ч' => 'ch',
    'ш' => 'sh',
    'щ' => 'sch',
    'ъ' => 'what is this',
    'ы' => 'bi',
    'ь' => 'b',
    'э' => 'ea',
    'ю' => 'yu',
    'я' => 'ya'
];

$phrase = 'шлакаблокуневый апельсин с планеты зацзабъян';
function transliterat($phrase, $letters)
{
    $result = '';
    for ($i = 0; $i < strlen($phrase); $i++) {
        $mb_symbol = mb_substr($phrase, $i, 1);
        if(array_key_exists($mb_symbol, $letters)) {
            $result .= $letters[$mb_symbol];
        } else {
            $result .= $mb_symbol;
        }
    }
    return $result;
}

echo transliterat($phrase, $letters) . '<br>';

echo '4 квест. <br>';


$menuItems = array(
    '0.',
    '1.',
    '2.',
    '3.',
    '4.',
    'Подменю 1' => array(
        'Пункт 1',
        'Пункт 2',
        'Пункт 3'
    )
);

echo '<ul>';
foreach ($menuItems as $menuItem => $subMenuItems) {
    echo '<li>';
    if (is_array($subMenuItems)) {
        echo '<a href="#">' . $menuItem . '</a>';
        echo '<ul>';
        foreach ($subMenuItems as $subMenuItem) {
            echo '<li><a href="#">' . $subMenuItem . '</a></li>';
        }
        echo '</ul>';
    } else {
        echo '<a href="#">' . $menuItem . '</a>';
    }
    echo '</li>';
}
echo '</ul>';

?>