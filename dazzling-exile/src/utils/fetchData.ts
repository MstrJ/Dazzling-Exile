const fetchData = async <T>(uri: string, access_token: string) => {
  console.log("FETCHING DATA", uri);
  const url = `${process.env.NEXT_PUBLIC_POE_SERVER_URL!}/${uri}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": process.env.NEXT_PUBLIC_USER_AGENT!,
      Authorization: `Bearer ${access_token}`,
    },
    cache: "force-cache",
  });
  if (!res.ok) {
    return null;
    const text = await res.text();

    throw new Error(`
        Failed to fetch data
        Status: ${res.status}
        Response: ${text}
      `);
  }
  const json = (await res.json()) as T;

  return json;
};
export default fetchData;
