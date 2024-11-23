import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-purple-900/50 to-transparent">
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-purple-400">MatrixTools</h1>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300">Home</Button>
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300">Features</Button>
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300">Download</Button>
          </div>
        </nav>
        
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Game Enhancement Tools
          </h2>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Legitimate gaming utilities for improving your gaming experience. Always play fair and respect game rules.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full">
            Download Now
            <Download className="ml-2" />
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#161b22] border-purple-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <Shield className="h-6 w-6" />
                Safe & Secure
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              Our tools are regularly updated and tested for safety and compatibility.
            </CardContent>
          </Card>

          <Card className="bg-[#161b22] border-purple-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <Zap className="h-6 w-6" />
                High Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              Optimized code ensures minimal impact on your game's performance.
            </CardContent>
          </Card>

          <Card className="bg-[#161b22] border-purple-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
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
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-center mb-8 text-purple-400">Current Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Tool A', 'Tool B', 'Tool C', 'Tool D'].map((tool) => (
            <div key={tool} className="bg-[#161b22] p-4 rounded-lg border border-purple-900/50">
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

      {/* Footer */}
      <footer className="border-t border-purple-900/50 mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400">
          <p>© 2024 MatrixTools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;