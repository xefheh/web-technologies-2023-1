<?php

$dataSource = 'sqlite:db.db';

$connection = new PDO($dataSource);

$result = $connection->query("SELECT * FROM Products");

echo "<link rel='stylesheet' href='./assets/styles/style.css'>";
echo "<div class='products'>";
while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    echo "<a href='./product.php?id=" . $row['id'] . "' class='product-card-more'>";
    echo "<div class='products__item'>";
    echo "<img src='" . $row['src'] . "' alt='" . $row['name'] . "width='200px' height='200px'>";
    echo "<div class='products__body'>";
    echo "<p class='text'>". $row['name'] . " $" . $row['price'] ."</p>";
    echo "</div>";
    echo "</a>";
    echo "</div>";
}
echo "</div>";
?>