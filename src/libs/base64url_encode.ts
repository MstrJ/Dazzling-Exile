const base64url_encode = (value: Buffer): string => {
  return value
    .toString("base64")
    .replace("+", "-")
    .replace("/", "_")
    .replace(/=+$/, "");
};
export default base64url_encode;
