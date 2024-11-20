<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example Website</title>
    <style>
        /* Add your CSS styles here */
    </style>
</head>
<body>
    <h1>Offers and Products</h1>
    <table>
        <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discounted Price</th>
        </tr>
        <?php
        $products = json_decode(file_get_contents("data.json"), true);
        foreach ($products as $product) {
            echo "<tr>";
            echo "<td>{$product['product']}</td>";
            echo "<td>{$product['description']}</td>";
            echo "<td>{$product['price']}</td>";
            echo "<td class='special-offer'>{$product['discounted_price']}</td>";
            echo "</tr>";
        }
        ?>
    </table>
</body>
</html>