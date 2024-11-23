import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Users, Zap, ChevronDown } from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-green-900/50 to-transparent">
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-400">MatrixTools</h1>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-green-400 hover:text-green-300" onClick={() => scrollToSection('home')}>Home</Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-300" onClick={() => scrollToSection('features')}>Features</Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-300" onClick={() => scrollToSection('status')}>Status</Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-300" onClick={() => scrollToSection('pricing')}>Pricing</Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-300" onClick={() => scrollToSection('faq')}>FAQ</Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-300">Download</Button>
          </div>
        </nav>
        
        <div id="home" className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
            Game Enhancement Tools
          </h2>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Legitimate gaming utilities for improving your gaming experience. Always play fair and respect game rules.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full">
            Download Now
            <Download className="ml-2" />
          </Button>
          <div className="mt-12">
            <Button variant="ghost" onClick={() => scrollToSection('features')} className="text-green-400 hover:text-green-300 animate-bounce">
              <ChevronDown className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#161b22] border-green-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <Shield className="h-6 w-6" />
                Safe & Secure
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              Our tools are regularly updated and tested for safety and compatibility.
            </CardContent>
          </Card>

          <Card className="bg-[#161b22] border-green-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <Zap className="h-6 w-6" />
                High Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              Optimized code ensures minimal impact on your game's performance.
            </CardContent>
          </Card>

          <Card className="bg-[#161b22] border-green-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <Users className="h-6 w-6" />
                Active Community
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              Join our community for support and stay updated with the latest features.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Status Section */}
      <section id="status" className="container mx-auto px-4 py-20">
        <h3 className="text-2xl font-bold text-center mb-8 text-green-400">Current Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Tool A', 'Tool B', 'Tool C', 'Tool D'].map((tool) => (
            <div key={tool} className="bg-[#161b22] p-4 rounded-lg border border-green-900/50">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">{tool}</span>
                <Badge variant="secondary" className="bg-green-900/50 text-green-400">
                  Working
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <h3 className="text-2xl font-bold text-center mb-8 text-green-400">Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#161b22] border-green-900/50">
            <CardHeader>
              <CardTitle className="text-green-400">Basic</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              <p className="text-3xl font-bold mb-4">Free</p>
              <ul className="space-y-2">
                <li>Basic features</li>
                <li>Community support</li>
                <li>Regular updates</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-[#161b22] border-green-900/50 transform scale-105">
            <CardHeader>
              <CardTitle className="text-green-400">Pro</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              <p className="text-3xl font-bold mb-4">$9.99</p>
              <ul className="space-y-2">
                <li>All basic features</li>
                <li>Priority support</li>
                <li>Advanced tools</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-[#161b22] border-green-900/50">
            <CardHeader>
              <CardTitle className="text-green-400">Enterprise</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              <p className="text-3xl font-bold mb-4">Contact Us</p>
              <ul className="space-y-2">
                <li>Custom solutions</li>
                <li>24/7 support</li>
                <li>Dedicated manager</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-20">
        <h3 className="text-2xl font-bold text-center mb-8 text-green-400">Frequently Asked Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { q: "Is it safe to use?", a: "Yes, our tools are regularly tested and updated for safety." },
            { q: "How often do you update?", a: "We provide weekly updates to ensure compatibility." },
            { q: "Do you offer refunds?", a: "Yes, we have a 30-day money-back guarantee." },
            { q: "How can I get support?", a: "We offer 24/7 support through our community discord." }
          ].map((faq, index) => (
            <Card key={index} className="bg-[#161b22] border-green-900/50">
              <CardHeader>
                <CardTitle className="text-green-400">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                <p>{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-900/50 mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400">
          <p>© 2024 MatrixTools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;