export default function applicantEmailApi(email, accessToken) {
  return fetch(
    `http://localhost:3000/registration-marathon-query?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
}
