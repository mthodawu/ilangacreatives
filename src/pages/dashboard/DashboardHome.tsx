import React from "react";
import ProjectOverview from "../../components/dashboard/ProjectOverview";
import FinancialOverview from "../../components/dashboard/FinancialOverview";

const DashboardHome = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <FinancialOverview />

      <div className="grid gap-6 md:grid-cols-2">
        <ProjectOverview />
      </div>
    </div>
  );
};

export default DashboardHome;
