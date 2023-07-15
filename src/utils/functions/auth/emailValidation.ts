export function emailValidation(email: string) {
  const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i;
  return expression.test(email);
}
