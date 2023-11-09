import { useState } from "react";
const baseUrl = process.env.REACT_APP_API_PORT;
console.log("baseUrl", baseUrl);

interface Props {
  url: string;
  method: string;
  body: any;
}

interface FetchData {
  data: any;
  isLoading: boolean;
  error: string;
  runFetch: ({ url, method, body }: Props) => Promise<void>;
}

export const useFetch = (): FetchData => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const runFetch = async ({ url, method, body }: Props) => {
    const finalUrl = `${baseUrl}${url}`;
    try {
      const response = await fetch(finalUrl, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
      setError((err as Error).message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return { runFetch, isLoading, error, data };
};
