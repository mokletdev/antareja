import { compareSync, hashSync } from "bcrypt";

export function validateHash(value: string, hash: string) {
  return compareSync(value, hash);
}

export function generateHash(value: string) {
  const saltOrRounds = 12;
  return hashSync(value, saltOrRounds);
}
