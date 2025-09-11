export const getAuthErrorMessage = (message: string) => {
  if (message.includes('Invalid login credentials')) {
    return '잘못된 이메일 또는 비밀번호입니다.';
  }
  if (message.includes('User already registered')) {
    return '이미 가입된 이메일입니다.';
  }
  if (message.includes('Email not confirmed')) {
    return '이메일 인증이 필요합니다. 메일함을 확인해주세요.';
  }
  if (message.includes('Invalid email')) {
    return '올바른 이메일 주소 형식이 아닙니다.';
  }
  // return '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
  return message;
};
