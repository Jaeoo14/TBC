export default function validate({ userId, pwd }) {
  const errors = {};

  if (!userId) {
    errors.userId = "이메일이 입력되지 않앗습니다.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userId)) {
    errors.userId = "입력된 이메일이 유효하지 않습니다.";
  }

  if (!pwd) {
    errors.pwd = "비밀번호가 입력되지 않았습니다.";
  }

  return errors;
}
