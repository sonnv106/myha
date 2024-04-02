export const validatePassword = (password: string) => {
  // Kiểm tra độ dài
  if (password.length < 6) {
    return false
  }

  // Kiểm tra chữ hoa
  const hasUppercase = /[A-Z]/.test(password)
  if (!hasUppercase) {
    return false
  }

  // Kiểm tra chữ thường
  const hasLowercase = /[a-z]/.test(password)
  if (!hasLowercase) {
    return false
  }

  // Kiểm tra chữ số
  const hasDigit = /[0-9]/.test(password)
  if (!hasDigit) {
    return false
  }

  // Kiểm tra ký tự đặc biệt
  const hasSpecialCharacter = /[@#$%^&*()<>{}\[\]]/.test(password)
  if (!hasSpecialCharacter) {
    return false
  }

  // Mật khẩu hợp lệ
  return true
}
export const validateEmail = (value: string) => {
  if (value) {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return validRegex.test(value)
  }
  return false
}
