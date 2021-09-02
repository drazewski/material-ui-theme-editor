export const prettyPrint = (text: string) => {
  if (!text) return '';

  const obj = JSON.parse(text);
  const pretty = JSON.stringify(obj, undefined, 4);

  return pretty;
}