package com.example.serverapp;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/message")
public class MessageController {

    @GetMapping
    @CrossOrigin(origins = "*")
    public String getMessage() {
        return "Message from server";
    }
}
