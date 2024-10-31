// src/components/LoanStatus/LoanStatus.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLoanStatus } from "../../redux/actions/loanActions";
import { FiSearch } from "react-icons/fi";

const LoanStatus = () => {
  const dispatch = useDispatch();
  const { status, loading, error } = useSelector(
    (state) => state.loans.statusState
  );

  const [loanId, setLoanId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkLoanStatus(loanId));
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-semibold mb-4">Check Loan Status</h2>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          value={loanId}
          onChange={(e) => setLoanId(e.target.value)}
          required
          placeholder="Enter Loan ID"
          className="flex-1 px-3 py-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
        >
          {loading ? "Checking..." : "Check"}
          <FiSearch className="ml-1" />
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {status && (
        <p className="mt-2">
          Status: <span className="font-semibold capitalize">{status}</span>
        </p>
      )}
    </div>
  );
};

export default LoanStatus;
