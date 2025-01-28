<?php
// Include the database connection file (menu.php)
include('menus.php');

// Query to fetch data
$sql = "SELECT id, name, category, type, price, image FROM menus";
$result = $conn->query($sql);
?>
    
    <?php
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<div>";
            echo "<h2>" . $row["name"] . "</h2>";
            echo "<p>Category: " . $row["category"] . "</p>";
            echo "<p>Type: " . $row["type"] . "</p>";
            echo "<p>Price: ₹" . $row["price"] . "</p>";
            echo "<img src='" . $row["image"] . "' alt='" . $row["name"] . "'><br><br>";
            echo "</div>";
        }
    } else {
        echo "No menus found.";
    }
    ?>

</body>
</html>

<?php
// Close the database connection
$conn->close();
?>
