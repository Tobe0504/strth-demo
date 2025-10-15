import moment from "moment";
import { useContext, useEffect } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import Loader from "../../Components/Loader/Loader";
import { AuthUserContext } from "../../Context/AuthUserContext";
import { formatAmountWithCommas2dp } from "../../HelperFunctions/amountToString";
import classes from "../DefaultsPayment/DefaultsPayment.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpectedTransactions = () => {
  // Context
  const { getExpectedlPayment, getExpectedPaymentObject } =
    useContext(AuthUserContext);

  // Effects
  useEffect(() => {
    getExpectedlPayment();
    // eslint-disable-next-line
  }, []);

  if (getExpectedPaymentObject.isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes.container}>
      <div className={classes.infoSection}>
        <InfoCard
          title="Expected Transactions"
          value={getExpectedPaymentObject?.data?.totalRecords}
        />
      </div>

      <p>
        Expected transactions involve payments awaiting the payment due date,
        anticipated to be fulfilled by customers, and primarily representing
        future repayments.
      </p>

      <div className={classes.table}>
        <div className={classes.tableHeader}>
          <span>ID</span>
          <span>CUSTOMER</span>
          <span>TOTAL DUE</span>
          <span>TOTAL PAID</span>
          <span>BALANCE</span>
          <span>PROPERTY</span>
          <span>NEXT PAYMENT</span>
          <span>PAYMENT TRACKER</span>
          <span>ACTIONS</span>
        </div>

        {getExpectedPaymentObject?.data?.data?.map((data: any, i: number) => {
          return (
            <div className={classes.tableBody} key={i}>
              <span>{data?.customer?.customerId}</span>
              <span>
                {data?.customer?.firstName} {data?.customer?.lastName}
              </span>
              <span>{formatAmountWithCommas2dp(data?.amount)}</span>
              <span>{formatAmountWithCommas2dp(data?.giddaaAmount)}</span>
              <span>{formatAmountWithCommas2dp(data?.defaultAmount)}</span>
              <span>{data?.house?.address || data?.house?.cityName}</span>
              <span>{moment(data?.dueDate).format("MMMM Do YYYY")}</span>
              <span>{moment(data?.dueDate).fromNow()}</span>

              <span>
                <MoreVertIcon />
              </span>
              {data?.isActive && (
                <div className={classes.otherOptions}>
                  <div>
                    <span>VIEW RECEIPT</span>
                  </div>

                  <div>
                    <span>DOWNLOAD RECEIPT</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExpectedTransactions;
