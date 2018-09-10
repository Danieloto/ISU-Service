package com.main.RestApiControllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserRAC
{

    @GetMapping(path = "/")
    public User[] GetAll()
    {
        // This would normally come from the database, however I am mocking it here for simplicity
        User[] UserList = new User[4];

        UserList[0] = new User("Sean", 20, true);
        UserList[1] = new User("John", 20, true);
        UserList[2] = new User("Jacob", 21, true);
        UserList[2] = new User("Daniel", 2, false);

        return UserList;    
    }
}
