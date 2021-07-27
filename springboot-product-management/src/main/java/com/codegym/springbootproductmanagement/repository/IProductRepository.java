package com.codegym.springbootproductmanagement.repository;

import com.codegym.springbootproductmanagement.model.Category;
import com.codegym.springbootproductmanagement.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {
    Iterable<Product> findAllByCategory(Category category);
}
