package com.capstone.bms.repositories;

import com.capstone.bms.models.Loan;
import com.capstone.bms.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoanRepo extends JpaRepository<Loan, Long> {
    List<Loan> findByUser(User user);

    List<Loan> findByStatus(String status);
}