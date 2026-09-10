function storeproducts() {

    let ProductID = document.getElementById("pid").value;
    let ProductName = document.getElementById("pname").value;
    let Dateofpurchase = document.getElementById("Date").value;
    let Quantity = document.getElementById("quantity").value;
    let Quality = document.getElementById("quality").value;
    let Price = document.getElementById("Price").value;

    if (
        ProductID == "" ||
        ProductName == "" ||
        Dateofpurchase == "" ||
        Quantity == "" ||
        Quality == "Select" ||
        Price == ""
    ) {
        alert("Fill all the fields");
        return;
    }

    let Totalamount = Quantity * Price;

    document.getElementById("Totalamount").value = Totalamount;

    let answer = confirm("Do you want to store data?");

    if (answer) {

        localStorage.setItem("Product ID", ProductID);
        localStorage.setItem("Product Name", ProductName);
        localStorage.setItem("Date of Purchase", Dateofpurchase);
        localStorage.setItem("Quantity", Quantity);
        localStorage.setItem("Quality", Quality);
        localStorage.setItem("Price", Price);
        localStorage.setItem("Total Amount", Totalamount);


        alert("Data Stored Successfully");

    } else {

        alert("Storage not selected");

    }
}