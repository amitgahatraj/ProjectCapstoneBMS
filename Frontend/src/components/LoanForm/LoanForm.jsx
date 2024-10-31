// src/components/LoanForm/LoanForm.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyLoan } from "../../redux/actions/loanActions";
import { FiArrowRight } from "react-icons/fi";

const LoanForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.loans);

  const [formData, setFormData] = useState({
    loanType: "",
    amount: "",
    tenure: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(applyLoan(formData));
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Apply for a Loan</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Loan Type:</label>
          <select
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select Type</option>
            <option value="personal">Personal</option>
            <option value="home">Home</option>
            <option value="auto">Auto</option>
            {/* Add more types as needed */}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
            min="1000"
          />
        </div>
        <div>
          <label className="block text-gray-700">Tenure (months):</label>
          <input
            type="number"
            name="tenure"
            value={formData.tenure}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
            min="6"
            max="360"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex items-center justify-center"
        >
          {loading ? "Applying..." : "Apply Loan"}
          <FiArrowRight className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
