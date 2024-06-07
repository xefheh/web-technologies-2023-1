<?php
    try {
        $pdo = new PDO('sqlite:db.db');
    } catch(PDOException $e) {
        echo $e->getMessage();
    }

    function isHasChildren($parentId)
    {
        global $pdo;
        $query = $pdo->prepare("SELECT COUNT(*) FROM Item WHERE parent_id = :parent_id");
        $query->bindParam(':parent_id', $parentId, PDO::PARAM_INT);
        $query->execute();
        $count = $query->fetchColumn();
        return $count > 0;
    }
    
    function buildMenuRecursive($parentId = null) {
        global $pdo;
        $outputResult = '';
        
        if($parentId == null) {
            $query = $pdo->prepare('SELECT * FROM Item WHERE parent_id is NULL');
        } else {
            $query = $pdo->prepare('SELECT * FROM Item WHERE parent_id = :parent_id');
            $query->bindParam(':parent_id', $parentId, PDO::PARAM_INT);
        }
        
        $query->execute();
        $results = $query->fetchAll();
        
        foreach($results as $result) {
            $hasChildren = isHasChildren($result['id']);

            $outputResult .=  '<div class="list-item list-item_open" data-parent>'.
                '<div class="list-item__inner">';

            if ($hasChildren) {
                $outputResult .= '<img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>';
            } else {
                $outputResult .= '<img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open style="visibility: hidden;"> ';
            }

            $outputResult .= '<img class="list-item__folder" src="img/folder.png" alt="folder">';
            $outputResult .= '<span>' . $result['name'] . '</span>
                </div><div class="list-item__items">';
            $outputResult .= buildMenuRecursive($result['id']);
            $outputResult .= '</div></div>';
        }
        return $outputResult;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>List Item</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="list-items" id="list-items">
    <?php echo buildMenuRecursive(); ?>
</div>
<script type="module" src="script.js"></script>
</body>
</html>
