# Med Cabinet Back-End

**Endpoints**

https://medcabinet1.herokuapp.com/

| Method | URL                | Description                                               |
| ------ | ------------------ | --------------------------------------------------------- |
| POST   | /api/auth/register | Creates a user ( **username,password,email: _optional_**) |
| POST   | /api/auth/login    | Login into account (**username,password**)                |
| GET    | /api/users         | Retrieves a list of users (`Auth Required`)               |

**Endpoint Specifics -**

# POST # /api/auth/register

<https://medcabinet1.herokuapp.com/api/auth/register>

#### ### --- register account

## username: _Required/Unique_ | password: _Required_ | email: _Not Required_

```
{
"username": "test3",
"password": "test",
"email": "itsWorking@itsWorking.com"
}
```

# POST # /api/auth/login

<https://medcabinet1.herokuapp.com/api/auth/login>

#### ### --- login to account -- get Token

## username: _Required/Unique_ | password: _Required_

**Store JWT Token**  
Store as: localStorage.setItem('token', res.data.token)

`--Authorization is checked via headers when accessing PrivateRoute--`

```
{
  "username": "test3",
  "password": "test"
}
```

# GET # /api/users

<https://medcabinet1.herokuapp.com/api/users>

***\_*Test Data*\_***

**Authorization Required**

#### ### -- List of current users

```
[
    {
        "id": 1,
        "username": "test5",
        "password": "$2a$10$dtACHrzB82Ru7f2MdA7N0uWqWPKsN3Zu0f6OMJrfkiKpRDYApqCwG",
        "email": "email@email.com"
    },
    {
        "id": 2,
        "username": "test1",
        "password": "$2a$10$2cjXD57g7oF2zr6MobczIua4t/uGPjv7Kn1xU3RHZGidfsg7t8JJ.",
        "email": "email@email.com"
    },
    {
        "id": 4,
        "username": "test2",
        "password": "$2a$10$GQIAAXfvyhzvqQm1uM7LtOQ1lNGGxgHn1Oxyalr2Ao/I2M3OTnChi",
        "email": null
    },

]
```
