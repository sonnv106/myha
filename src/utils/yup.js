import * as yup from 'yup'

yup.addMethod(yup.string, 'isValidPassword', function validatePassword(){
    return this.trim()
    .required('Vui lòng nhập mật khẩu')
    .min(6, 'Độ dài mật khẩu ít nhất 6 ký tự')
    .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    
    // .required('Password is required')
})

yup.addMethod(yup.string, 'isValidConfirmPassword', function isValidConfirmPassword(){
    return this.trim().oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required')
    // .required('Password is required')
})

export default yup