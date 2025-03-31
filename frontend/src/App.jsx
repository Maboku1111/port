import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { HyperText } from "./components/magicui/hyper-text";
import Header from "./components/Header";
import Home from "./pages/Home";

const queryClient = new QueryClient();

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <QueryClientProvider client={queryClient}>
            <Splash />
          </QueryClientProvider>
        </div>
      ) : (
        <>
          <div>
            <Header />
          </div>
          <div className="w-11/12 max-w-screen-lg mx-auto p-5 box-border mt-16">
            <Home />
          </div>
        </>
      )}
    </>
  );
}

export function Splash() {
  const { isPending, error, data } = useQuery({
    queryKey: ["verse"],
    queryFn: async function fetchRandomBibleVerseFromBibleApi() {
      const response = await fetch("https://bible-api.com/data/web/random");
      return await response.json();
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occured " + error.message;

  return (
    <div className="flex justify-center items-center mt-72">
      <HyperText>
        {`${data.random_verse.book} ${data.random_verse.chapter}:${data.random_verse.verse}`}
      </HyperText>
    </div>
  );
}
