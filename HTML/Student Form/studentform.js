function storeStudent() {

    let StudentID = document.getElementById("sid").value;
    let StudentName = document.getElementById("sname").value;
    let Subject1 = Number(document.getElementById("sub1").value);
    let Subject2 = Number(document.getElementById("sub2").value);
    let Subject3 = Number(document.getElementById("sub3").value);

    if (
        StudentID == "" ||
        StudentName == "" ||
        isNaN(Subject1) ||
        isNaN(Subject2) ||
        isNaN(Subject3)
    ) {
        alert("Fill all the fields");
        return;
    }

    // Calculate Total
    let Total = Subject1 + Subject2 + Subject3;

    // Calculate Average
    let Average = (Total / 3).toFixed(2);

    // Determine Grade
    let Grade;

    if (Average >= 80) {
        Grade = "A";
    }
    else if (Average >= 70) {
        Grade = "B";
    }
    else if (Average >= 60) {
        Grade = "C";
    }
    else if (Average >= 50) {
        Grade = "D";
    }
    else {
        Grade = "F";
    }

    // Display Results
    document.getElementById("total").value = Total;
    document.getElementById("average").value = Average;
    document.getElementById("grade").value = Grade;

    let answer = confirm("Do you want to store data?");

    if (answer) {

        localStorage.setItem("Student ID", StudentID);
        localStorage.setItem("Student Name", StudentName);
        localStorage.setItem("Subject 1", Subject1);
        localStorage.setItem("Subject 2", Subject2);
        localStorage.setItem("Subject 3", Subject3);
        localStorage.setItem("Total Marks", Total);
        localStorage.setItem("Average", Average);
        localStorage.setItem("Grade", Grade);

        alert("Data Stored Successfully");

    } else {

        alert("Storage not selected");

    }

}