<?php
// Database connection
$servername = "localhost";
$username = "root"; // or your MySQL username
$password = ""; // or your MySQL password
$dbname = "restaurant menu";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data into the 'menus' table (only run this once when needed)
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Insert query
    $sql = //"INSERT INTO menus (name, category, type, price, image) 
            //VALUES 
            //('big burger', 'Main Course', 'Non-Veg', 100.00, 'images/menu1.png'),
            //('vegetable pizza', 'Main Course', 'Veg', 130.00, 'images/menu2.png')"; // Add more items as needed
            "INSERT INTO menus (name, category, type, price, image) VALUES
            ('big burger', 'Main Course', 'Non-Veg', 100.00, 'images/menu1.png'),
            ('vegetable pizza', 'Main Course', 'Veg', 130.00, 'images/menu2.png'),
            ('kabab turki', 'Main Course', 'Non-Veg', 140.00, 'images/menu3.png'),
            ('big Hotdog', 'Main Course', 'Non-Veg', 110.00, 'images/menu4.png'),
            ('French Fries', 'Starters', 'Veg', 120.00, 'images/menu5.png'),
            ('Chicken Wings', 'Starters', 'Non-Veg', 150.00, 'images/menu6.png'),
            ('Panner Butter Masala', 'Main Course', 'Non-Veg', 150.00, 'images/menu7.png'),
            ('Chocolate Brownie', 'Desserts', 'Veg', 150.00, 'images/menu31.png'),
            ('veg biryani', 'Main Course', 'Veg', 180.00, 'images/menu8.png'),
            ('Dal Tadka', 'Main Course', 'Veg', 110.00, 'images/menu9.png'),
            ('Chole Bhature', 'Main Course', 'Veg', 150.00, 'images/menu10.png'),
            ('Lamp Chops', 'Starters', 'Non-Veg', 150.00, 'images/menu25.png'),
            ('Gulab Jamun', 'Desserts', 'Veg', 100.00, 'images/menu27.png'),
            ('Spring Rolls', 'Starters', 'Veg', 120.00, 'images/menu37.png'),
            ('veg Manchurian', 'Starters', 'Veg', 150.00, 'images/menu38.png'),
            ('Egg Curry', 'Main Course', 'Non-Veg', 150.00, 'images/menu26.png'),
            ('Chicken Tikka', 'Main Course', 'Non-Veg', 150.00, 'images/menu17.png'),
            ('Mutton Korma', 'Main Course', 'Non-Veg', 110.00, 'images/menu19.png'),
            ('Harra Bhara Kebab', 'Starters', 'Veg', 130.00, 'images/menu39.png'),
            ('Rasmalai', 'Desserts', 'Veg', 120.00, 'images/menu28.png'),
            ('Ice Cream Sundae', 'Desserts', 'Veg', 100.00, 'images/menu29.png'),
            ('Shahi Paneer', 'Main Course', 'Veg', 120.00, 'images/menu11.png'),
            ('Butter Chicken', 'Main Course', 'Non-Veg', 150.00, 'images/menu12.png'),
            ('Chicken Biryani', 'Main Course', 'Non-Veg', 150.00, 'images/menu13.png'),
            ('Jalebi with Rabri', 'Desserts', 'Veg', 110.00, 'images/menu30.png'),
            ('Cheese Cake', 'Desserts', 'Veg', 100.00, 'images/menu33.png'),
            ('Mutton Rogan Josh', 'Main Course', 'Non-Veg', 150.00, 'images/menu14.png'),
            ('Fish Curry', 'Main Course', 'Non-Veg', 150.00, 'images/menu15.png'),
            ('Rasgulla', 'Desserts', 'Veg', 100.00, 'images/menu32.png'),
            ('Carrot Halwa', 'Desserts', 'Veg', 100.00, 'images/menu34.png'),
            ('Prawns Masala', 'Main Course', 'Veg', 130.00, 'images/menu16.png'),
            ('Tiramisu', 'Desserts', 'Veg', 120.00, 'images/menu35.png'),
            ('Kulfi', 'Desserts', 'Veg', 110.00, 'images/menu36.png')";
            
    if ($conn->query($sql) === TRUE) {
        echo "New records created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>
