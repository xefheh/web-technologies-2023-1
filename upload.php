<?php
    $filename = $_FILES['image']['name'];
    $types = array('jpg','jpeg','png','gif');

    $ext = pathinfo($filename, PATHINFO_EXTENSION);
    if (!in_array($ext, $types)) {
        die('Файл не подходящего расширения!');
    }
    if ($_FILES['image']['size'] > 10240000) {
        die('Файл слишком большой');
    }
    
    move_uploaded_file($_FILES['image']['tmp_name'], 'images/'.$filename);
    
    header('Location: index.php');
    exit();
