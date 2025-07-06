package com.cse.demo.controller;

import java.io.IOException;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cse.demo.model.Customer;
import com.cse.demo.model.Owner;
import com.cse.demo.model.Product;
import com.cse.demo.model.Reserve;
import com.cse.demo.service.CustomerService;
import com.cse.demo.service.OwnerService;
import com.cse.demo.service.ProductService;
import com.cse.demo.service.ReserveService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

    @Autowired
    private ProductService productService;
    
    @Autowired
    private CustomerService customerService;
    
    @Autowired
    private OwnerService ownerService;
    
    @Autowired
    private ReserveService reserveService;


    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/product/{id}")
    public Product getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @PostMapping("/product")
    public Product saveProduct(@RequestParam("name") String name,
                               @RequestParam("services") String services,
                               @RequestParam("rate") double rate,
                               @RequestParam("features") String features,
                               @RequestParam("rating") float rating,
                               @RequestParam("seats") int seats,
                               @RequestParam("timein") LocalTime timein,
                               @RequestParam("timeout") LocalTime timeout,
                               @RequestParam("image") MultipartFile imageFile) throws IOException {

        Product product = new Product();
        product.setName(name);
        product.setServices(services);
        product.setRate(rate);
        product.setFeatures(features);
        product.setRating(rating);
        product.setSeats(seats);
        product.setTimein(timein);
        product.setTimeout(timeout);
        product.setImage(imageFile.getBytes());

        return productService.saveProduct(product);
    }

    @GetMapping("/image/{id}")
    public void getImage(@PathVariable("id") int id, HttpServletResponse response) throws IOException {
        Product product = productService.getProductById(id);
        if (product != null && product.getImage() != null) {
            String contentType = isPng(product.getImage()) ? "image/png" : "image/jpeg";
            response.setContentType(contentType);
            response.getOutputStream().write(product.getImage());
            response.getOutputStream().close();
        }
    }

    private boolean isPng(byte[] imageBytes) {
        return imageBytes.length > 8 &&
                imageBytes[0] == (byte) 137 &&
                imageBytes[1] == (byte) 80 &&
                imageBytes[2] == (byte) 78 &&
                imageBytes[3] == (byte) 71 &&
                imageBytes[4] == (byte) 13 &&
                imageBytes[5] == (byte) 10 &&
                imageBytes[6] == (byte) 26 &&
                imageBytes[7] == (byte) 10;
    }

    @PostMapping("/customer")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.saveCustomer(customer);
    }

    @GetMapping("/customer/{id}")
    public Customer getCustomer(@PathVariable int id) {
        return customerService.getCustomerById(id);
    }

    @PostMapping("/owner")
    public Owner createOwner(@RequestBody Owner owner) {
        return ownerService.saveOwner(owner);
    }

    @PostMapping("/reserve")
    public Reserve saveReserve(@RequestBody Reserve reserve) {
        return reserveService.saveReserve(reserve);
    }
}
