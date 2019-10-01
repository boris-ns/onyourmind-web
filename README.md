# OnYourMind - web application

Web application made with Angular 8.  
OnYourMind is a small and simple application where you can register and create new posts, see other user's posts and post comments.
There are two types of users: regular users and admins.

## Backend application
Backend service was created with SpringBoot framework. You can find it in [this repository](https://github.com/boris-ns/onyourmind-service).  

# How to use

First, you need to clone the repository:  
```git clone https://github.com/boris-ns/onyourmind-web```

Then run ```npm install``` to install all packages and after that run the server with ```ng serve```.  

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  

For application to properly work you'll need to run backend service that is located in [this repository](https://github.com/boris-ns/onyourmind-service).

## Predefined data in database
Regular users are ```john.doe``` and ```jack.smith```.  
Admin is ```jane.doe```.  
All passwords are ```123```.  