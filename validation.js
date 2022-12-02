function validate(){
    if(document.myForm.employeeId.value==""){
        document.getElementById("idErr").innerHTML = "Please enter Employee ID";
        return false;
    }

    if(document.myForm.employeeFirstName.value==""){
        document.getElementById("firstNameErr").innerHTML = "Please enter Employee FirstName";
        return false;
    }

    if(document.myForm.employeeLastName.value==""){
        document.getElementById("lastNameErr").innerHTML = "Please enter Employee LastName";
        return false;
    }

    if(document.myForm.employeeAddress.value==""){
        document.getElementById("addressErr").innerHTML = "Please enter Employee Address";
        return false;
    }

    if(document.myForm.employeeDepartment.value==""){
        document.getElementById("departmentErr").innerHTML = "Please enter Employee Department";
        return false;
    }

    if(document.myForm.employeePosition.value==""){
        document.getElementById("positionErr").innerHTML = "Please enter Employee Position";
        return false;
    }

    if(document.myForm.employeeEmail.value==""){
        document.getElementById("emailErr").innerHTML = "Please enter Employee Email";
        return false;
   /*  } else {
        var regex = /^\$+\$+\+$/;
        if(regex.test(document.myForm.employeeEmail.value)==false){
            alert("Please enter a valid email address");
            return false;
        } */
    }
}