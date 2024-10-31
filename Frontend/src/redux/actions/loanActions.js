// src/redux/actions/loanActions.js
import api from "../../services/api";
import {
  fetchLoansStart,
  fetchLoansSuccess,
  fetchLoansFailure,
  // Add other actions
} from "../reducers/loanReducer";

// Fetch All Loans (for Dashboard)
export const fetchLoans = () => async (dispatch) => {
  dispatch(fetchLoansStart());
  try {
    const response = await api.get("/loans");
    dispatch(fetchLoansSuccess(response.data));
  } catch (error) {
    dispatch(
      fetchLoansFailure(
        error.response?.data?.message || "Failed to fetch loans"
      )
    );
  }
};

// Apply for a Loan
export const applyLoan = (loanData) => async (dispatch) => {
  dispatch(fetchLoansStart());
  try {
    const response = await api.post("/loans/apply", loanData);
    dispatch(fetchLoansSuccess(response.data));
  } catch (error) {
    dispatch(
      fetchLoansFailure(
        error.response?.data?.message || "Failed to apply for loan"
      )
    );
  }
};

// Check Loan Status
export const checkLoanStatus = (loanId) => async (dispatch) => {
  dispatch(fetchLoansStart());
  try {
    const response = await api.get(`/loans/status?loanId=${loanId}`);
    // Assuming the response contains the status
    dispatch(fetchLoansSuccess(response.data));
  } catch (error) {
    dispatch(
      fetchLoansFailure(
        error.response?.data?.message || "Failed to check loan status"
      )
    );
  }
};

// Fetch Pending Loans for Admin
export const fetchPendingLoans = () => async (dispatch) => {
  dispatch(fetchLoansStart());
  try {
    const response = await api.get("/admin/loans/pending");
    dispatch(fetchLoansSuccess(response.data));
  } catch (error) {
    dispatch(
      fetchLoansFailure(
        error.response?.data?.message || "Failed to fetch pending loans"
      )
    );
  }
};

// Approve a Loan
export const approveLoan = (loanId) => async (dispatch) => {
  try {
    await api.put(`/admin/loans/approve`, { loanId, status: "approved" });
    dispatch(fetchPendingLoans()); // Refresh the pending loans list
  } catch (error) {
    dispatch(
      fetchLoansFailure(
        error.response?.data?.message || "Failed to approve loan"
      )
    );
  }
};

// Reject a Loan
export const rejectLoan = (loanId) => async (dispatch) => {
  try {
    await api.put(`/admin/loans/reject`, { loanId, status: "rejected" });
    dispatch(fetchPendingLoans()); // Refresh the pending loans list
  } catch (error) {
    dispatch(
      fetchLoansFailure(
        error.response?.data?.message || "Failed to reject loan"
      )
    );
  }
};
