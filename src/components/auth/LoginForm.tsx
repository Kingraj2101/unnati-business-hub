
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const userTypes = [
  { value: "admin", label: "Admin" },
  { value: "store", label: "Retail Store" },
  { value: "vendor", label: "Vendor" },
  { value: "factory", label: "Factory" }
];

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("admin");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      // For demo purposes, we'll use a simple validation
      // In a real application, this would be handled by a proper authentication system
      
      // Demo credentials for each user type
      const demoCredentials = {
        admin: { email: "admin@unnati.com", password: "password123" },
        store: { email: "store@unnati.com", password: "store123" },
        vendor: { email: "vendor@unnati.com", password: "vendor123" },
        factory: { email: "factory@unnati.com", password: "factory123" }
      };
      
      const credentials = demoCredentials[userType as keyof typeof demoCredentials];
      
      if (email === credentials.email && password === credentials.password) {
        toast({
          title: "Login Successful",
          description: `Welcome to Unnati Traders ${userType.charAt(0).toUpperCase() + userType.slice(1)} Dashboard`,
        });
        
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userType", userType);
        localStorage.setItem("user", JSON.stringify({ 
          name: `${userType.charAt(0).toUpperCase() + userType.slice(1)} User`,
          email: email,
          role: userType.charAt(0).toUpperCase() + userType.slice(1)
        }));
        
        // Redirect based on user type
        switch(userType) {
          case "admin":
            navigate("/dashboard");
            break;
          case "store":
            navigate("/store-dashboard");
            break;
          case "vendor":
            navigate("/vendor-dashboard");
            break;
          case "factory":
            navigate("/factory-dashboard");
            break;
          default:
            navigate("/dashboard");
        }
      } else {
        setError(`Invalid email or password. Try ${credentials.email} / ${credentials.password}`);
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-unnati-dark">Login to Unnati Traders</h2>
        <p className="text-gray-600 mt-2">Access your business management dashboard</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
          <AlertCircle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
            Login As
          </label>
          <Select
            value={userType}
            onValueChange={(value) => setUserType(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select user type" />
            </SelectTrigger>
            <SelectContent>
              {userTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-unnati-primary focus:ring-unnati-primary border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-unnati-primary hover:text-unnati-primary/80">
              Forgot your password?
            </a>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-unnati-primary hover:bg-unnati-primary/90"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>

        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Demo Logins:</p>
          <p>Admin: admin@unnati.com / password123</p>
          <p>Store: store@unnati.com / store123</p>
          <p>Vendor: vendor@unnati.com / vendor123</p>
          <p>Factory: factory@unnati.com / factory123</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
