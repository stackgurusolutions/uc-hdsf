import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import Authors from "@/pages/authors";
import Speakers from "@/pages/speakers";
import orgnizingcommittee from "@/pages/orgnizingcommittee";
import AdvisoryCommittee from "@/pages/advisory-committee";
import tpcCommittee from "@/pages/technical-program-committee";
import Registration from "@/pages/registration";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/authors" component={Authors} />
      <Route path="/speakers" component={Speakers} />
      <Route path="/orgnizingcommittee" component={orgnizingcommittee} />
      <Route path="/advisory-committee" component={AdvisoryCommittee} />
      <Route path="/technical-program-committee" component={tpcCommittee} />
      <Route path="/registration" component={Registration} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
