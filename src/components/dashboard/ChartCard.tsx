
import React from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line,
  PieChart, Pie, Cell
} from "recharts";

interface ChartCardProps {
  title: string;
  type: "bar" | "line" | "pie";
  data: any[];
  className?: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#1e40af'];

const ChartCard = ({ title, type, data, className }: ChartCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                fontSize={12}
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                fontSize={12}
                tick={{ fill: '#6B7280' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.375rem',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="value" fill="#1e40af" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : type === "line" ? (
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false} 
                fontSize={12}
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                fontSize={12}
                tick={{ fill: '#6B7280' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.375rem',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#1e40af" 
                strokeWidth={2}
                dot={{ r: 4, fill: '#1e40af' }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          ) : (
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.375rem',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
