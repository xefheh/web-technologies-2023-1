<?php

$dataSource = 'sqlite:db.db';

$id = $_GET['id'];

$name = $_POST["author"];
$text = $_POST["text"];

$connection = new PDO($dataSource);
$result = $connection->query("INSERT INTO  reviews(product_id, author, text) VALUES($id, '$name', '$text');");

header("Location: ./product.php?id={$id}");