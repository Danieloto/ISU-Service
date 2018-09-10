package com.main.RestApiControllers;

public class User {
    public String Name;
    public int Age;
    public boolean IsOccupied;


    public User(String name, int age, boolean isOccupied) {
        this.Name = name;
        this.Age = age;
        this.IsOccupied = isOccupied;
    }
}