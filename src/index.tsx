import { createRoot } from "react-dom/client";
import App from "@/App";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * (60 * 1000), // 60 mins
      cacheTime: 65 * (60 * 1000), // 65 mins
      refetchInterval: 65 * (60 * 1000),
    },
  },
});

const Root = () => {
  return (
    // <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </HelmetProvider>
    // </React.StrictMode>,
  );
};

// ReactDOM.render(<Root />, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<Root />);
