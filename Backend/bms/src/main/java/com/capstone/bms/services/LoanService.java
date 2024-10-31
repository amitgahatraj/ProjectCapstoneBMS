package com.capstone.bms.services;

public class LoanService {
}

package com.capstone.bms.services;

import com.capstone.bms.models.Loan;
import com.capstone.bms.models.User;
import com.capstone.bms.repositories.LoanRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
@Slf4j
public class LoanService {
    private final LoanRepository loanRepository;

    public Loan applyForLoan(User user, BigDecimal amount, BigDecimal interestRate, int tenure) {
        Loan loan = Loan.builder()
                .user(user)
                .amount(amount)
                .interestRate(interestRate)
                .tenure(tenure)
                .status("PENDING")
                .build();

        log.info("Applying for loan: {} for user: {}", amount, user.getUsername());
        return loanRepository.save(loan);
    }

    public Loan updateLoanStatus(Long loanId, String status) {
        Loan loan = loanRepository.findById(loanId).orElseThrow(() -> new RuntimeException("Loan not found"));
        loan.setStatus(status);
        log.info("Updating loan ID {} to status: {}", loanId, status);
        return loanRepository.save(loan);
    }
}
