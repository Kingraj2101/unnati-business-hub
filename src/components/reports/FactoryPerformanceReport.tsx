
import React from "react";
import { Factory, TrendingUp, TrendingDown, Timer, Clock, Percent } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const FactoryPerformanceReport = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Factory className="mr-2 h-5 w-5 text-orange-600" />
            <span>Factory Performance</span>
          </CardTitle>
          <span className="text-sm text-gray-500">Last 30 days</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Production Output */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Production Output</span>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+7.8%</span>
              </div>
            </div>
            <Progress value={92} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">Target: 15,000 units</span>
              <span className="text-xs font-medium">13,800 units</span>
            </div>
          </div>
          
          {/* Production Efficiency */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Production Efficiency</span>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <Percent className="h-4 w-4 mr-1" />
                <span>86%</span>
              </div>
            </div>
            <Progress value={86} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">Target: 90%</span>
              <span className="text-xs font-medium">86%</span>
            </div>
          </div>
          
          {/* Downtime */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Downtime</span>
              <div className="flex items-center text-red-600 text-sm font-medium">
                <Clock className="h-4 w-4 mr-1" />
                <span>4.2%</span>
              </div>
            </div>
            <Progress value={35} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">Target: &lt;3%</span>
              <span className="text-xs font-medium">4.2%</span>
            </div>
          </div>
          
          {/* Top Products */}
          <div className="pt-2 pb-0 border-t">
            <h4 className="text-sm font-medium mb-2">Production by Product</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Timer className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm">Product X</span>
                </div>
                <span className="text-sm font-medium">5,200 units</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Timer className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Product Y</span>
                </div>
                <span className="text-sm font-medium">4,100 units</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Timer className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-sm">Product Z</span>
                </div>
                <span className="text-sm font-medium">3,800 units</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FactoryPerformanceReport;
