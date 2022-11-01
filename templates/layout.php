<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php echo '10erife - ' . $title;  ?></title>
    <meta property="og:title" content="10erife" />
    <meta property="og:image" content="" />
    <meta property="og:site_name" content="10erife" />
    <meta property="og:description" content="" />

    <link rel="schema.dcterms" href="http://purl.org/dc/terms/">
    <meta name="DC.coverage" content="Hungary" />
    <meta name="DC.description" content="" />
    <meta name="DC.format" content="text/html" />
    <meta name="DC.publisher" content="10erife" />
    <meta name="DC.title" content="" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/css/splide.min.css">
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css">
    <link rel="stylesheet" href="Boaz/css/style.css">
</head>

<body>
    <?php
    require_once "header.php";
    require_once "$view.php";
    require_once "footer.php";
    ?>
</body>

</html>