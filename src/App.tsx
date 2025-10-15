import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import TransactionsDashboardLayout from "./Components/TransactionDashboardLayout/TransactionDashboardLayout";
import ErrorPage from "./Containers/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route element={<RequireAuth />}>
        <Route
          path="/transactions-and-earnings/:subTransactions"
          element={<TransactionsDashboardLayout />}
        />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
