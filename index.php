<?php

function buildImgGallery($imagesDirectory) {
    if(!is_dir($imagesDirectory)) return '';
    $directory = opendir($imagesDirectory);
    $result = '';
    while($file = readdir($directory)) {
        if($file == '.' || $file == '..') continue;
        $filepath = $imagesDirectory . '/' . $file;
        $result .= '<div class="gallery__image">
                    <a href="'.$filepath.'"
                        target="_blank">
                        <img src="'.$filepath.'" width="256px" height="256px" alt="тут должна была быть картиночка">   
                    </a>
                </div> ';
    }
    return $result;
}

function getLogsLinesCount($logFile) {
    if(!file_exists($logFile)) return 0;
    $file = file($logFile);
    return count($file);
}

function getLastFileNumber($path)
{
    $dir = opendir($path);
    $count = 0;
    while($file = readdir($dir))
    {
        if($file == '.' || $file == '..' || is_dir($path . $file)) continue;
        $count++;
    }
    return $count;
}

function pushLogsOrMoveToDirectory($mainLogFilename, $logsDirectory, $getDatetime) {
    $lines = getLogsLinesCount($mainLogFilename);
    if($lines < 10) {
        file_put_contents($mainLogFilename, $getDatetime.PHP_EOL, FILE_APPEND);
    } else {
        copy($mainLogFilename, $logsDirectory.'/log'.getLastFileNumber($logsDirectory).'.txt');
        unlink($mainLogFilename);
        file_put_contents('log.txt', $getDatetime.PHP_EOL,FILE_APPEND);
    }
}

$imagesDirectory = './images';
$mainLogFilename = 'log.txt';
$logsDirectory = './logs';
$getDatetime = date('Y-m-d H:i:s');

pushLogsOrMoveToDirectory($mainLogFilename, $logsDirectory, $getDatetime);


?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Загрузить изображение</h1>
    <form id="upload-form" action="upload.php" method="post" enctype="multipart/form-data">
        <input type="file" name="image">
        <input type="submit" value="Загрузить">
    </form>
    <div class="gallery">
        <?php echo buildImgGallery($imagesDirectory); ?>
    </div>
</body>
</html>
