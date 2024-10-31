// src/components/AdminPanel/AdminPanel.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPendingLoans,
  approveLoan,
  rejectLoan,
} from "../../redux/actions/loanActions";
import { FiCheck, FiX } from "react-icons/fi";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { pendingLoans, loading, error } = useSelector((state) => state.loans);

  useEffect(() => {
    dispatch(fetchPendingLoans());
  }, [dispatch]);

  const handleApprove = (loanId) => {
    dispatch(approveLoan(loanId));
  };

  const handleReject = (loanId) => {
    dispatch(rejectLoan(loanId));
  };

  if (loading) return <p className="text-center">Loading pending loans...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Pending Loan Applications</h2>
      {pendingLoans.length === 0 ? (
        <p>No pending loans.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Loan ID</th>
                <th className="py-2 px-4 border-b">User</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Tenure</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingLoans.map((loan) => (
                <tr key={loan.id} className="text-center">
                  <td className="py-2 px-4 border-b">{loan.id}</td>
                  <td className="py-2 px-4 border-b">{loan.user.name}</td>
                  <td className="py-2 px-4 border-b capitalize">{loan.type}</td>
                  <td className="py-2 px-4 border-b">${loan.amount}</td>
                  <td className="py-2 px-4 border-b">{loan.tenure} months</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleApprove(loan.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600 flex items-center"
                    >
                      <FiCheck />
                    </button>
                    <button
                      onClick={() => handleReject(loan.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center"
                    >
                      <FiX />
                    </button>
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

export default AdminPanel;
