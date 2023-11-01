function Validation(values) {
    let error = {
        Username: '',
        Email: '',
        Password: '',
        Cpassword: ''
    }
    const username_pattern = /^[a-zA-Z0-9]+$/;
    const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const password_pattern = /^[A-Za-z]\w{7,14}$/;

    if (values.Username === "") {
        error.Username = "Username should not be empty";
    }
    else if (!username_pattern.test(values.Username)) {
        error.Username = "Username didn't match";
    }
    else {
        error.Username = ""
    }

    if (values.Email === "") {
        error.Email = "Email should not be empty";
    }
    else if (!email_pattern.test(values.Email)) {
        error.Email = "Email didn't match";
    }
    else {
        error.Email = ""
    }

    if (values.Password === "") {
        error.Password = "Password should not be empty";
    }
    else if (!password_pattern.test(values.Password)) {
        error.Password = "Password didn't match";
    }
    else {
        error.Password = ""
    }
    //console.log(error.Cpassword)
    //console.log(error.Password);
    // if (values.Password === values.Cpassword) {
    //     error.Cpassword = "";
    // }
    // else {
    //     error.Cpassword = "Password not match";
    // }
    return error;
}
export default Validation;