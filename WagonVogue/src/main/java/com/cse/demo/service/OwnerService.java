package com.cse.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cse.demo.model.Owner;
import com.cse.demo.repository.OwnerRepository;

@Service
public class OwnerService {
    @Autowired
    private OwnerRepository repo;

    public List<Owner> getAllOwners() {
        return repo.findAll();
    }

    public Owner saveOwner(Owner owner) {
        return repo.save(owner);
    }

    public Owner getOwnerById(int id) {
        Optional<Owner> owner = repo.findById(id);
        return owner.orElse(null);
    }

    public String deleteOwnerById(int id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return "Owner Deleted";
        } else {
            return "Owner Not Found";
        }
    }

    public String updateOwnerById(int id, Owner updatedOwner) {
        Optional<Owner> ownerOptional = repo.findById(id);
        if (ownerOptional.isPresent()) {
            Owner existingOwner = ownerOptional.get();
            existingOwner.setName(updatedOwner.getName());
            existingOwner.setAddress(updatedOwner.getAddress());
            existingOwner.setPhonenumber(updatedOwner.getPhonenumber());
            existingOwner.setEmailid(updatedOwner.getEmailid());
            existingOwner.setDob(updatedOwner.getDob());
            existingOwner.setPassword(updatedOwner.getPassword());
            existingOwner.setUser(updatedOwner.getUser());
            return repo.save(existingOwner) != null ? "Owner Updated" : "Update Failed";
        } else {
            return "Owner Not Found";
        }
    }
}
