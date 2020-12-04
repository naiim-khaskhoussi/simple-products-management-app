package com.confledis.technicaltest.resources;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.confledis.technicaltest.models.Product;
import com.confledis.technicaltest.services.ProductService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductResource {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/status")
	public String getStatus() {
		return "ACTIVE";
	}
	
	@GetMapping("/products/{id}")
	public Optional<Product> getProductById(@PathVariable String id) {
		return productService.getProductById(id);
	}
	
	@GetMapping("/products")
	public List<Product> searchProductByNameAndPrice(
			@RequestParam String name,
			@RequestParam double minPrice,
			@RequestParam double maxPrice) {
		return productService.searchProductsByNameAndPrice(name, minPrice, maxPrice);
	}

	@PutMapping("/products")
	public Product updateProduct(@RequestBody @Valid Product product) {
		return productService.updateProduct(product);
	}
	
	@PostMapping("/products")
	public Product addProduct(@RequestBody @Valid Product product){
		return productService.addProduct(product);
	}
	
	@DeleteMapping("/products")
	public HashMap<String, Boolean> deleteProduct(String id) {
		return productService.removeProduct(id);
	}

}
