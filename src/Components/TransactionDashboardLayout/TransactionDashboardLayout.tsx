import { useState } from "react";
import DefaultsPayment from "../../Containers/DefaultsPayment/DefaultsPayment";
import ExpectedTransactions from "../../Containers/ExpectedTransactions/ExpectedTransactions";
import SuccessfulTransactions from "../../Containers/SuccessfulTransactions/SuccessfulTransactions";
import TransactionSummary from "../../Containers/TransactionSummary/TransactionSummary";
import AppLayout from "../AppLayout/AppLayout";
import SectionsNav from "../SectionsNav/SectionsNav";
import classes from "./TransactionsDashboardLayout.module.css";

const TransactionsDashboardLayout = () => {
  // States
  const [navItems, setNavItems] = useState<any>([
    {
      title: "SUMMARY",
      isActive: true,
      route: "summary",
      activeComponent: <TransactionSummary />,
    },
    {
      title: "SUCCESSFUL TRANSACTIONS",
      isActive: false,
      route: "successful-transactions",
      activeComponent: <SuccessfulTransactions />,
    },
    {
      title: "EXPECTED TRANSACTIONS",
      isActive: false,
      route: "expected-transactions",
      activeComponent: <ExpectedTransactions />,
    },
    {
      title: "DEFAULTS",
      isActive: false,
      route: "defaults",
      activeComponent: <DefaultsPayment />,
    },
    {
      title: "ANALYTICS",
      isActive: false,
      activeComponent: null,
      route: "analytics",
    },
    {
      title: "FORECAST",
      isActive: false,
      activeComponent: null,
      route: "forecast",
    },
  ]);

  const activeComponent = navItems.find((data: any) => {
    return data?.isActive;
  });
  return (
    <AppLayout
      title="Transactions"
      description="View all your transactions and how much you have earned from customers"
    >
      <div className={classes.container}>
        <SectionsNav navItems={navItems} setNavItems={setNavItems} isRouting />
      </div>
      <div>{activeComponent?.activeComponent}</div>
    </AppLayout>
  );
};

export default TransactionsDashboardLayout;
