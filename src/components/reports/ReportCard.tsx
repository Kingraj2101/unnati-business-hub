
import React from "react";
import { Download, FileDown, Eye, Printer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface ReportCardProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
  onView: () => void;
  onDownloadExcel: () => void;
  onDownloadPdf: () => void;
}

const ReportCard: React.FC<ReportCardProps> = ({
  title,
  icon,
  description,
  onView,
  onDownloadExcel,
  onDownloadPdf
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="bg-gray-100 p-2 rounded-md mr-3">
              {icon}
            </div>
            <div>
              <h3 className="font-medium text-lg">{title}</h3>
              {description && <p className="text-sm text-gray-500">{description}</p>}
            </div>
          </div>
          
          <div className="flex space-x-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              onClick={onView}
            >
              <Eye size={16} />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-green-600 hover:text-green-700 hover:bg-green-50"
                >
                  <Download size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={onDownloadExcel}>
                  <FileDown className="mr-2 h-4 w-4 text-green-600" />
                  <span>Excel Format</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onDownloadPdf}>
                  <FileDown className="mr-2 h-4 w-4 text-red-600" />
                  <span>PDF Format</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportCard;
