
import React from "react";
import { Store, TrendingUp, TrendingDown, CreditCard, Users, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const StorePerformanceReport = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Store className="mr-2 h-5 w-5 text-blue-600" />
            <span>Store Performance</span>
          </CardTitle>
          <span className="text-sm text-gray-500">Last 30 days</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Sales Performance */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Sales</span>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+12.5%</span>
              </div>
            </div>
            <Progress value={85} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">Target: ₹8,50,000</span>
              <span className="text-xs font-medium">₹7,22,500</span>
            </div>
          </div>
          
          {/* Customer Acquisition */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">New Customers</span>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+8.2%</span>
              </div>
            </div>
            <Progress value={65} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">Target: 120</span>
              <span className="text-xs font-medium">78</span>
            </div>
          </div>
          
          {/* Inventory Turnover */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Inventory Turnover</span>
              <div className="flex items-center text-amber-600 text-sm font-medium">
                <TrendingDown className="h-4 w-4 mr-1" />
                <span>-3.1%</span>
              </div>
            </div>
            <Progress value={72} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">Target: 4.5x</span>
              <span className="text-xs font-medium">3.2x</span>
            </div>
          </div>
          
          {/* Top Performers */}
          <div className="pt-2 pb-0 border-t">
            <h4 className="text-sm font-medium mb-2">Top Selling Products</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Package className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm">Product A</span>
                </div>
                <span className="text-sm font-medium">₹1,45,000</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Package className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Product B</span>
                </div>
                <span className="text-sm font-medium">₹98,500</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Package className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-sm">Product C</span>
                </div>
                <span className="text-sm font-medium">₹76,200</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StorePerformanceReport;
