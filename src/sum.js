export function sum(a, b) {
  if (a == null) throw new Error("a is null");
  if (b == null) throw new Error("b is null");
  return a + b;
}
