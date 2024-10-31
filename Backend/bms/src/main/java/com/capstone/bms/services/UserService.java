package com.capstone.bms.services;

public class UserService {
}

package com.capstone.bms.services;

import com.capstone.bms.models.User;
import com.capstone.bms.repositories.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("ROLE_USER");
        log.info("Registering new user: {}", user.getUsername());
        return userRepo.save(user);
    }

    public User findByUsername(String username) {
        log.info("Searching for user: {}", username);
        return userRepo.findByUsername(username);
    }
}