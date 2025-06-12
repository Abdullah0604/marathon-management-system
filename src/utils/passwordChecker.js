export default function passwordChecker(password) {
  let message = "";

  if (!/[A-Z]/.test(password)) {
    message = "Must have an Uppercase letter.";
  }

  if (!/[a-z]/.test(password)) {
    message = "Must have a Lowercase letter.";
  }

  if (password.length <= 6) {
    message = "Password must be at least 6 characters long.";
  }

  return message;
}
