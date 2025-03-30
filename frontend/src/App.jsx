import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { HyperText } from "./components/magicui/hyper-text";

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 8000);

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
        <h1>Enter my portfolio</h1>
      )}
    </>
  );
}

function Splash() {
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

export default App;
