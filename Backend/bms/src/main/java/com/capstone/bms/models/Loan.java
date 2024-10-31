package com.capstone.bms.models;

import lombok.*;
import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    private BigDecimal amount;
    private BigDecimal interestRate;
    private int tenure;
    private String status; // e.g., "PENDING", "APPROVED", "REJECTED"
}s