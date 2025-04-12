
import React from "react";
import { Truck, TrendingUp, TrendingDown, Shield, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const VendorPerformanceReport = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Truck className="mr-2 h-5 w-5 text-green-600" />
            <span>Vendor Performance</span>
          </CardTitle>
          <span className="text-sm text-gray-500">Last 30 days</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Delivery Time */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">On-Time Delivery</span>
              <div className="flex items-center text-amber-600 text-sm font-medium">
                <Clock className="h-4 w-4 mr-1" />
                <span>94.2%</span>
              </div>
            </div>
            <Progress value={94} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">Target: 98%</span>
              <span className="text-xs font-medium">94.2%</span>
            </div>
          </div>
          
          {/* Quality Compliance */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Quality Compliance</span>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <Shield className="h-4 w-4 mr-1" />
                <span>96.8%</span>
              </div>
            </div>
            <Progress value={97} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">Target: 95%</span>
              <span className="text-xs font-medium">96.8%</span>
            </div>
          </div>
          
          {/* Order Fulfillment */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Order Fulfillment</span>
              <div className="flex items-center text-red-600 text-sm font-medium">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>88.5%</span>
              </div>
            </div>
            <Progress value={89} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">Target: 95%</span>
              <span className="text-xs font-medium">88.5%</span>
            </div>
          </div>
          
          {/* Top Vendors */}
          <div className="pt-2 pb-0 border-t">
            <h4 className="text-sm font-medium mb-2">Top Performing Vendors</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Truck className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm">Vendor A</span>
                </div>
                <span className="text-sm font-medium">98.7% score</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Truck className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Vendor B</span>
                </div>
                <span className="text-sm font-medium">97.2% score</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Truck className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-sm">Vendor C</span>
                </div>
                <span className="text-sm font-medium">95.8% score</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VendorPerformanceReport;
