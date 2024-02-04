import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import FirstTimeUserPage from "@components/firstTimeUserPage.tsx"; 
import "./index.css";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <FirstTimeUserPage /> {}
        </QueryClientProvider>
    </React.StrictMode>,
);