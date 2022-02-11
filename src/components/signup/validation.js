function validation(formValues){

    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!formValues.username){
        errors.username ="username is required";
    }
    if(!formValues.email){
        errors.email ="email is required";
    }
    else if(!regex.test(formValues.email)){
        errors.email ="email is invalid";
    }
    if(!formValues.password){
        errors.password ="password is required";
    }
    else if(formValues.password.length < 5){
        errors.password ="password is too short";
    }
    return errors;
}
export default validation;