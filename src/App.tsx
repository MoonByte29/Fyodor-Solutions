import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AIAutomation from "./pages/services/AIAutomation";
import OpportunityDiscovery from "./pages/services/OpportunityDiscovery";
import CybersecurityCompliance from "./pages/services/CybersecurityCompliance";
import ManagedDelivery from "./pages/services/ManagedDelivery";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full relative bg-black text-white overflow-x-hidden">
        {/* Background Gradient */}
        <div
          className="fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
          }}
        />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ai-automation" element={<AIAutomation />} />
              <Route
                path="/opportunity-discovery"
                element={<OpportunityDiscovery />}
              />
              <Route
                path="/cybersecurity-compilance"
                element={<CybersecurityCompliance />}
              />
              <Route path="/managed-delivery" element={<ManagedDelivery />} />

              <Route path="/contact" element={<Contact />} />
              {/* Fallback 404 */}
              <Route
                path="*"
                element={
                  <div className="text-center py-20 text-gray-400">
                    404 | Page Not Found
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
