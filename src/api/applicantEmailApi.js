export default function applicantEmailApi(email) {
  return fetch(
    `http://localhost:3000/registration-marathon-query?email=${email}`
  ).then((res) => res.json());
}
