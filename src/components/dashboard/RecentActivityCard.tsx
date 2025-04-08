
import React from "react";

interface ActivityItem {
  id: number;
  action: string;
  user: string;
  time: string;
  status?: "pending" | "completed" | "failed";
}

const RecentActivityCard = () => {
  const activities: ActivityItem[] = [
    {
      id: 1,
      action: "Created invoice #INV-2023-042",
      user: "Admin User",
      time: "10 minutes ago",
      status: "completed",
    },
    {
      id: 2,
      action: "Added new inventory items",
      user: "Store Manager",
      time: "2 hours ago",
      status: "completed",
    },
    {
      id: 3,
      action: "Payment received for invoice #INV-2023-039",
      user: "Finance Team",
      time: "3 hours ago",
      status: "completed",
    },
    {
      id: 4,
      action: "Stock transfer request to factory",
      user: "Inventory Manager",
      time: "Yesterday",
      status: "pending",
    },
    {
      id: 5,
      action: "New supplier registration",
      user: "Procurement Team",
      time: "2 days ago",
      status: "completed",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <div className="mr-4 mt-1">
              <div
                className={`h-2 w-2 rounded-full ${
                  activity.status === "completed"
                    ? "bg-green-500"
                    : activity.status === "pending"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              ></div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{activity.action}</p>
              <div className="flex justify-between mt-1">
                <p className="text-xs text-gray-500">{activity.user}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-sm font-medium text-unnati-primary hover:text-unnati-primary/80">
        View all activity
      </button>
    </div>
  );
};

export default RecentActivityCard;
