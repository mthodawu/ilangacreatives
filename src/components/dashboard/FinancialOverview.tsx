import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DollarSign, TrendingUp, AlertCircle } from "lucide-react";

interface FinancialMetrics {
  monthlyRevenue: number;
  outstandingPayments: number;
  projectProfitability: number;
}

interface FinancialOverviewProps {
  metrics?: FinancialMetrics;
}

const FinancialOverview = ({
  metrics = {
    monthlyRevenue: 15000,
    outstandingPayments: 5000,
    projectProfitability: 68,
  },
}: FinancialOverviewProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${metrics.monthlyRevenue.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Outstanding Payments
          </CardTitle>
          <AlertCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${metrics.outstandingPayments.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">3 invoices pending</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Project Profitability
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {metrics.projectProfitability}%
          </div>
          <p className="text-xs text-muted-foreground">
            Average across all projects
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialOverview;
