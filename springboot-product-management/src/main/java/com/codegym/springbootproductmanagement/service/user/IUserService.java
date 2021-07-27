package com.codegym.springbootproductmanagement.service.user;

import com.codegym.springbootproductmanagement.model.User;
import com.codegym.springbootproductmanagement.service.IGeneralService;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IUserService extends IGeneralService<User>, UserDetailsService {
    User findByUsername(String username);
}
