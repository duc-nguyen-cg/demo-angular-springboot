package com.codegym.springbootproductmanagement.model;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.util.*;

@Data
public class JwtResponse {
    private Long id;
    private String token;
    private String type = "Bearer";
    private String username;
    private final Collection<? extends GrantedAuthority> roles;

    public JwtResponse(Long id, String token, String username, Collection<? extends GrantedAuthority> roles) {
        this.id = id;
        this.token = token;
        this.username = username;
        this.roles = roles;
    }
}
