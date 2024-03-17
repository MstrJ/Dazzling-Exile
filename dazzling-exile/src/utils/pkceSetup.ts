import crypto from "crypto";
import base64url_encode from "./base64url_encode";

const pkceSetup = () => {
  const secret = crypto.randomBytes(32);
  const code_verifier = base64url_encode(secret);
  const code_challenge = base64url_encode(
    crypto.createHash("sha256").update(code_verifier).digest()
  );

  return {
    code_verifier: code_verifier,
    code_challenge: code_challenge,
  };
};

export default pkceSetup;
