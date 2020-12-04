package com.confledis.technicaltest.services;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.confledis.technicaltest.models.Product;
import com.confledis.technicaltest.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> searchProductsByNameAndPrice(String name, double minPrice, double maxPrice) {
		return productRepository.findByNameLikeIgnoreCaseAndPriceBetweenOrderByPriceAsc(name, minPrice, maxPrice);
	}
	
	public List<Product> searchProductsByName(String name) {
		return productRepository.findByNameLikeIgnoreCaseOrderByPriceAsc(name);
	}
	
	public Product addProduct(Product product) {
		return productRepository.save(product);
	}
	
	public Optional<Product> getProductById(String productId) {
		return productRepository.findById(productId);
	}
	
	public Product updateProduct(Product product) {
		return productRepository.save(product);
	}
	
	public HashMap<String, Boolean> removeProduct(String productId) {
		HashMap<String, Boolean> jsonResponse = new HashMap<>();
		try {
			productRepository.deleteById(productId);
			jsonResponse.put("deleted", true);
		} catch (Exception e) {
			jsonResponse.put("deleted", false);
		}
		return jsonResponse;
	}

}
