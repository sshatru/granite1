// Corrected App.jsx or main.jsx

import { Router, Switch, Route } from "wouter"; // 👈 1. Import Router
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// This will be "/granite1" in production, and "/" locally
const basename = import.meta.env.PROD ? "/granite1" : "/";

// This part stays the same
function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* 👇 2. Wrap your routes with the Router component */}
        <Router base={basename}>
          <AppRoutes />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;