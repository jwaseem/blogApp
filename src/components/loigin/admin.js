function admin(formValues){
    
    if(formValues.username ==='admin' && formValues.password === 'admin')
    {
        window.location.href = "/";
    }
    
}
export default admin;