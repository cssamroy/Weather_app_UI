import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Weather from "./components/weather";

const queryClient = new QueryClient();

// QueryClientProvider is required by react-query for any operation
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Weather />
      </QueryClientProvider>
    </div>
  );
}

export default App;
