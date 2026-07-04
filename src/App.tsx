import { RouterProvider } from "react-router-dom";
import { route } from "./routes/routeRender";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
export default function App() {
  ModuleRegistry.registerModules([AllCommunityModule]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={route}></RouterProvider>
    </QueryClientProvider>
  );
}
