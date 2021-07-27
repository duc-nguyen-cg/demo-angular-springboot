package com.codegym.springbootproductmanagement.service.product;

import com.codegym.springbootproductmanagement.model.Category;
import com.codegym.springbootproductmanagement.model.Product;
import com.codegym.springbootproductmanagement.service.IGeneralService;

public interface IProductService extends IGeneralService<Product> {
    Iterable<Product> findAllByCategory(Category category);
}
