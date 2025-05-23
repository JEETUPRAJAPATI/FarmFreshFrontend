import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import OurFarmers from "./pages/OurFarmers";
import OurProcess from "./pages/OurProcess";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "@/pages/not-found";
import { useLocation } from "wouter";

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();

  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait">
        <Switch location={location}>
          <Route path="/" component={() => <PageWrapper><Home /></PageWrapper>} />
          <Route path="/our-story" component={() => <PageWrapper><OurStory /></PageWrapper>} />
          <Route path="/products" component={() => <PageWrapper><Products /></PageWrapper>} />
          <Route path="/products/:slug" component={() => <PageWrapper><ProductDetail /></PageWrapper>} />
          <Route path="/our-farmers" component={() => <PageWrapper><OurFarmers /></PageWrapper>} />
          <Route path="/our-process" component={() => <PageWrapper><OurProcess /></PageWrapper>} />
          <Route path="/contact" component={() => <PageWrapper><Contact /></PageWrapper>} />
          <Route path="/cart" component={() => <PageWrapper><Cart /></PageWrapper>} />
          <Route component={() => <PageWrapper><NotFound /></PageWrapper>} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="farm-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
