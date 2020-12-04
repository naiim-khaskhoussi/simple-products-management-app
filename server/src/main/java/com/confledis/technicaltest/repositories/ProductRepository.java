package com.confledis.technicaltest.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.confledis.technicaltest.models.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String>{

	List<Product> findByNameLikeIgnoreCaseOrderByPriceAsc(String name);
	
	List<Product> findByNameLikeIgnoreCaseAndPriceBetweenOrderByPriceAsc(String string, double minPrice, double maxPrice);
	
	List<Product> findByNameLikeIgnoreCaseAndPriceBetweenAndQuantityOrderByPriceAsc(String name, double minPrice, double maxPrice, Long quantity);
	
}
