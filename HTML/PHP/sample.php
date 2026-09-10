<html>
<body>

<form method="POST">
  Item Name: 
<input type="text" name="item"><br><br>
  Quantity: 
<input type="number" name="quantity"><br><br>
  Price per Item: 
<input type="number" name="price">  <br><br>
  
<input type="submit" name="submit" value="Calculate Total">


<?php
if (isset($_POST['submit'])) {
  $item = $_POST['item'];
  $quantity = $_POST['quantity'];
  $price = $_POST['price'];

  // Calculate total
  $total = $quantity * $price;

  echo "<h3>Sales Summary</h3>";
  echo "Item: $item<br>";
  echo "Quantity: $quantity<br>";
  echo "Price per item: $$price<br>";
  echo "<strong>Total Amount: $$total</strong>";
}
?>
</form>
</body>
</html>