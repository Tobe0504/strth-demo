import moment from "moment";
import { useContext, useEffect, useState } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import Loader from "../../Components/Loader/Loader";
import { AuthUserContext } from "../../Context/AuthUserContext";
import { formatAmountWithCommas2dp } from "../../HelperFunctions/amountToString";
import classes from "./TransactionSummary.module.css";

const TransactionSummary = () => {
  // Context
  const { getSummaryPayment, getSummaryPaymentObject } =
    useContext(AuthUserContext);

  // States
  const [summaryData, setSummaryData] = useState({
    expectedEarnings: 0,
    totalEarned: 0,
    leftToEarn: 0,
    averageAmountEarned: 0,
    expectedNoOfTractions: 0,
    totalTransactions: 0,
    transactionsLeft: 0,
    averagePerMonth: 0,
    missedPayments: 0,
    transactionDefaultRate: 0,
    customersMissed: 0,
  });

  // Effects
  useEffect(() => {
    getSummaryPayment();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (getSummaryPaymentObject.data) {
      let expectedEarnings = 0;
      let totalEarned = 0;

      const paidTransactions = getSummaryPaymentObject.data?.data?.filter(
        (data: any) => {
          return data?.isPaid;
        }
      );

      const missednPaidTransactions =
        getSummaryPaymentObject.data?.data?.filter((data: any) => {
          return !data?.isPaid && moment().diff(data.dateOfPayment, "days") > 0;
        });
      for (let i = 0; i < getSummaryPaymentObject.data?.data.length; i++) {
        expectedEarnings += getSummaryPaymentObject.data?.data[i]?.amount;
      }

      for (let i = 0; i < paidTransactions.length; i++) {
        totalEarned += paidTransactions[i]?.amount;
      }

      setSummaryData((prevState) => {
        return {
          ...prevState,
          expectedEarnings,
          totalEarned,
          leftToEarn: expectedEarnings - totalEarned,
          averageAmountEarned: totalEarned,
          expectedNoOfTractions: getSummaryPaymentObject.data?.totalRecords,
          totalTransactions: getSummaryPaymentObject.data?.pageSize,
          transactionsLeft:
            getSummaryPaymentObject.data?.totalRecords -
            getSummaryPaymentObject.data?.pageSize,
          averagePerMonth: getSummaryPaymentObject.data?.totalRecords,
          missedPayments: missednPaidTransactions.length,
          transactionDefaultRate:
            (missednPaidTransactions / getSummaryPaymentObject.data?.pageSize) *
            100,
          customersMissed: missednPaidTransactions.length,
        };
      });
    }
  }, [getSummaryPaymentObject.data]);

  if (getSummaryPaymentObject.isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes.container}>
      <div className={classes.section}>
        <h4>Earnings Breakdown</h4>
        <div>
          <InfoCard
            title="Expected Earnings"
            value={
              formatAmountWithCommas2dp(summaryData?.expectedEarnings) as string
            }
          />
          <InfoCard
            title="Total Earned"
            value={
              formatAmountWithCommas2dp(summaryData?.totalEarned) as string
            }
          />
          <InfoCard
            title="Left To Earn"
            value={formatAmountWithCommas2dp(summaryData?.leftToEarn) as string}
          />
          <InfoCard
            title="Average Amount Earned"
            value={
              formatAmountWithCommas2dp(
                summaryData?.averageAmountEarned
              ) as string
            }
          />
        </div>
      </div>

      <div className={classes.section}>
        <h4>Frequency Breakdown</h4>
        <div>
          <InfoCard
            title="Expected Number of Transactions"
            value={summaryData.expectedNoOfTractions}
          />
          <InfoCard
            title="Total Transactions"
            value={summaryData.totalTransactions}
          />
          <InfoCard
            title="Number of Transactions Left"
            value={summaryData.transactionsLeft}
          />
          <InfoCard
            title="Average No of Transaction/ Month"
            value={summaryData.averagePerMonth}
          />
        </div>
      </div>

      <div className={classes.section}>
        <h4>Default Breakdown</h4>
        <div>
          <InfoCard
            title="Missed Payments"
            value={summaryData.missedPayments}
          />
          <InfoCard
            title="Transaction Default Rate"
            value={`${summaryData.transactionDefaultRate}%`}
          />
          <InfoCard
            title="Customers who’ve missed payment"
            value={summaryData.customersMissed}
            secondValue={summaryData.totalTransactions}
            biValue
          />
        </div>
      </div>
    </section>
  );
};

export default TransactionSummary;
