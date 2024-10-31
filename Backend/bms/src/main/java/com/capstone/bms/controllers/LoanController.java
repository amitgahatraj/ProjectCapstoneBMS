
package com.capstone.bms.controllers;

import com.capstone.bms.models.Loan;
import com.capstone.bms.models.User;
import com.capstone.bms.services.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;

@RestController
@RequestMapping("/api/loans")
@RequiredArgsConstructor
public class LoanController {
    private final LoanService loanService;

    @PostMapping("/apply")
    public ResponseEntity<Loan> applyForLoan(@RequestParam Long userId, @RequestParam BigDecimal amount,
                                             @RequestParam BigDecimal interestRate, @RequestParam int tenure) {
        User user = new User(); // Retrieve user based on userId
        Loan loan = loanService.applyForLoan(user, amount, interestRate, tenure);
        return ResponseEntity.ok(loan);
    }

    @PutMapping("/{loanId}/status")
    public ResponseEntity<Loan> updateLoanStatus(@PathVariable Long loanId, @RequestParam String status) {
        Loan updatedLoan = loanService.updateLoanStatus(loanId, status);
        return ResponseEntity.ok(updatedLoan);
    }
}