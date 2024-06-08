<?php

$dataSource = 'sqlite:db.db';

$id = $_GET['id'];

$connection = new PDO($dataSource);

$query = $connection->query("SELECT * FROM Products WHERE id = :id");
$query->bindParam(":id", $id, PDO::PARAM_INT);
$query->execute();

$product = $query->fetch(PDO::FETCH_ASSOC);

echo "<link rel='stylesheet' href='assets/styles/style.css'>";
echo "<div class='product'>";
echo "<img src='" . $product['src'] . "' alt='" . $product['name'] . "' width='350px' height='350px'>";
echo "<div class='product__body'>";
echo "<h3 class='product__name'>" . $product['name'] . " $" . $product['price'] . "</h3>";
echo "<p class='proudct__description'>" . $product['description'] . "</p>";
echo "</div>";
echo "</div>";  

echo "<div class='reviews'>";
echo "<h3 class='reviews__header'>Отзывы</h3>";
echo "<ul class='reviews-list'>";
    $query = $connection->query("SELECT * FROM reviews WHERE product_id = :product_id");
    $query->bindParam(":product_id", $id, PDO::PARAM_INT);
    $query->execute();
    
    while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
        echo "<li class='revliews-list__item'>" . $row['author'] . ": " . $row['text'] . "</li>";
    }
echo "</ul>";
echo "</div>";

echo "<h2>Добавить новый отзыв</h2>";
echo "  <form action='./addReview.php?id={$id}' method='post' enctype='multipart/form-data'>";
echo "    <p>Имя: <input type='text' name='author' /> </p>";
echo "    <p>Отзыв: <textarea  name='text'> </textarea></p>";
echo "    <input type='submit' value='Добавить' /> </p>" ;
echo "  </form>";
?>

