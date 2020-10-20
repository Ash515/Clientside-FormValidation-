
function validation(){
    if(document.one.name.value==""){
        window.alert("Please Enter your Name");
        return false;
    }
    else if(document.one.email.value==""){
        window.alert("Please Enter your E-mail");
        return false;
    }
    else if(document.one.dept.value==""){
        window.alert("Please Enter your Department Name");
        return false;

    }
    else if(document.one.college.value==""){
        window.alert("Please Enter your College Name");
        return false;

    }
    else if(document.one.gender.value==""){
        window.alert("Please Enter your gender type");
        return false;

    }
    else if(document.one.phno.value==""){
        window.alert("Please Enter your Phone Number");
        return false;

    }
    else{
        return true;
    }
}

