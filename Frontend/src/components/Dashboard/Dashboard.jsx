// src/components/Dashboard/Dashboard.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoans } from "../../redux/actions/loanActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loans, loading, error } = useSelector((state) => state.loans);

  useEffect(() => {
    dispatch(fetchLoans());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading loans...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Your Loans</h2>
      {loans.length === 0 ? (
        <p>You have no loans.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Loan ID</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Interest Rate</th>
                <th className="py-2 px-4 border-b">Tenure</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan.id} className="text-center">
                  <td className="py-2 px-4 border-b">{loan.id}</td>
                  <td className="py-2 px-4 border-b capitalize">{loan.type}</td>
                  <td className="py-2 px-4 border-b">${loan.amount}</td>
                  <td className="py-2 px-4 border-b">{loan.interestRate}%</td>
                  <td className="py-2 px-4 border-b">{loan.tenure} months</td>
                  <td
                    className={`py-2 px-4 border-b ${
                      loan.status === "approved"
                        ? "text-green-500"
                        : loan.status === "rejected"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {loan.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
