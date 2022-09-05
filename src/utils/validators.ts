export function validateEmpty(value: string) {
  if (!value) {
    return "*Este campo é obrigatório!";
  }
  return true;
}
