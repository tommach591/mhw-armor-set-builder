export function GreekReplacer(str) {
  let result = str;
  result = result.replace("Alpha", "α");
  result = result.replace("Beta", "β");
  result = result.replace("Gamma", "γ");

  return result;
}
