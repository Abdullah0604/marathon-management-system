export default function applicantEmailApi(email, accessToken) {
  return fetch(
    `https://runnexus-server.vercel.app/registration-marathon-query?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
}
