import classes from "./DefaultsPayment.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../Context/AuthUserContext";
import Loader from "../../Components/Loader/Loader";
import { formatAmountWithCommas2dp } from "../../HelperFunctions/amountToString";
import moment from "moment";
import { NotificationsActiveOutlined, PaidOutlined } from "@mui/icons-material";
import InfoCard from "../../Components/InfoCard/InfoCard";

const DefaultsPayment = () => {
  // Context
  const { getDefaultPayments, getDefaultPaymentObject } =
    useContext(AuthUserContext);

  // States
  const [defaultPaymentInfo, setDefaultPaymentInfo] = useState({
    expectedEarnings: 0,
    totalAmount: 0,
    missedPayments: 0,
  });

  // Effects
  useEffect(() => {
    getDefaultPayments();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (getDefaultPaymentObject.data) {
      let totalAmount = 0;
      for (let i = 0; i < getDefaultPaymentObject.data?.data?.length; i++) {
        totalAmount = +getDefaultPaymentObject?.data?.data[i]?.amount;
      }

      const missedPayments = getDefaultPaymentObject?.data?.data?.filter(
        (data: any) => {
          return !data?.isPaid;
        }
      )?.length;

      setDefaultPaymentInfo((prevState) => {
        return { ...prevState, expectedEarnings: totalAmount, missedPayments };
      });
    }
  }, [getDefaultPaymentObject.data]);

  if (getDefaultPaymentObject.isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes.container}>
      <div className={classes.infoSection}>
        <InfoCard
          title="Expected Earnings"
          value={`N${formatAmountWithCommas2dp(
            defaultPaymentInfo.expectedEarnings
          )}`}
        />

        <InfoCard
          title="Total Default Amount"
          value={`N${formatAmountWithCommas2dp(
            defaultPaymentInfo.expectedEarnings
          )}`}
        />

        <InfoCard
          title="Missed Payments"
          value={defaultPaymentInfo?.missedPayments}
        />

        <InfoCard
          title="Customers who’ve missed payment"
          value={defaultPaymentInfo?.missedPayments}
          secondValue={getDefaultPaymentObject?.data?.data?.length}
          biValue
        />
      </div>

      <p>
        Data on payments that should have beeen made but weren’t and the
        customers who should have paid
      </p>

      <div className={classes.table}>
        <div className={classes.tableHeader}>
          <span>ID</span>
          <span>CUSTOMER</span>
          <span>AMOUNT</span>
          <span>TYPE</span>
          <span>PROPERTY</span>
          <span>PLAN</span>
          <span>DUE DATE</span>
          <span>DAYS OVERDUE</span>
          <span></span>
        </div>

        <div className={classes.tableBody}>
          {getDefaultPaymentObject?.data?.data?.map((data: any, i: number) => {
            return (
              <>
                <span>{data?.customer?.customerId}</span>
                <span>
                  {data?.customer?.firstName} {data?.customer?.lastName}
                </span>
                <span>{formatAmountWithCommas2dp(data?.amount)}</span>
                <span>{data?.transactionType}</span>
                <span>{data?.house?.address || data?.house?.cityName}</span>
                <span>{data?.mortgagePlan?.name}</span>
                <span>
                  {moment(data?.dateOfPayment).format("MMMM Do YYYY")}
                </span>
                <span>{moment(data?.dateOfPayment).fromNow()}</span>
                <span>
                  <MoreVertIcon />
                </span>
                {data?.isActive && (
                  <div className={classes.otherOptions}>
                    <div>
                      <span>
                        <NotificationsActiveOutlined />
                      </span>
                      <span>Remind Customer</span>
                    </div>

                    <div>
                      <span>
                        <PaidOutlined />
                      </span>
                      <span>View Repayment Schedule</span>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DefaultsPayment;
