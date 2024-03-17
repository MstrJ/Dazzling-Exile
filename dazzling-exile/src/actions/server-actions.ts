"use server";

import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { options } from "../app/api/auth/[...nextauth]/options";

export const fetchData = async <T>(
  uri: string,
  tags: string[],
  revaPath: string,
  isServerUrl: boolean = true
) => {
  const session = await getServerSession(options);

  const access_token = session?.user.access_token;

  if (!access_token) {
    throw new Error("No access token found");
  }
  const url: string = `${process.env.NEXT_PUBLIC_POE_API_URL!}/${uri}`;
  if (isServerUrl) `${process.env.NEXT_PUBLIC_POE_SERVER_URL!}/${uri}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": process.env.NEXT_PUBLIC_USER_AGENT!,
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      tags: tags,
    },
    cache: "force-cache",
  });
  revalidatePath(`(dashboard)/${revaPath}`, "page");
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
