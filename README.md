# Med Cabinet Back-End

> --- **Backend docs also published on [Postman](https://documenter.getpostman.com/view/10309872/SzKZsFwm?version=latest)**

**Endpoints**

https://medcabinet1.herokuapp.com/

| Method | URL                | Description                                               |
| ------ | ------------------ | --------------------------------------------------------- |
| POST   | /api/auth/register | Creates a user ( **username,password,email: _optional_**) |
| POST   | /api/auth/login    | Login into account (**username,password**)                |
| GET    | /api/users         | Retrieves a list of users (`Auth Required`)               |
| GET    | /api/strains       | Retreives a list of strains(`Auth Required`)              |

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

# GET # /api/strains

<https://medcabinet1.herokuapp.com/api/strains>

**Authorization Required**

#### ### -- List of current strains

> ## !Important- --- Over 2000 strains | I have added query for this GET Request

`*Query at end of /api/strains - ie # api/strains?limit=2&sortby=id | This now shows 2 strains and sorts by Id*`

    --list of query commands ?limit=number | ?sortby="key"(ie: rating) | ?sortdir="sort direction"--
        -- ie: api/strains?limit=10&sortby=id    ** ? <-- starts the Query  & <-- to add more Queries** --

```
[
    {
        "id": 1,
        "strain_name": "100-Og",
        "type": "hybrid",
        "rating": "4",
        "effects": "Creative,Energetic,Tingly,Euphoric,Relaxed",
        "flavor": "Earthy,Sweet,Citrus",
        "description": "$100 OG is a 50/50 hybrid strain that packs a strong punch. The name supposedly refers to both its strength and high price when it first started showing up in Hollywood. As a plant, $100 OG tends to produce large dark green buds with few stems. Users report a strong body effect of an indica for pain relief with the more alert, cerebral feeling thanks to its sativa side.",
        "user_fav": null
    },
    {
        "id": 2,
        "strain_name": "98-White-Widow",
        "type": "hybrid",
        "rating": "4.7",
        "effects": "Relaxed,Aroused,Creative,Happy,Energetic",
        "flavor": "Flowery,Violet,Diesel",
        "description": "The ‘98 Aloha White Widow is an especially potent cut of White Widow that has grown in renown alongside Hawaiian legends like Maui Wowie and Kona Gold. This White Widow phenotype reeks of diesel and skunk and has a rich earthy taste with intermittent notes of hash. Its buds are coated in trichomes, giving its dark foliage a lustrous glint to go along with its room-filling odor. This one-hitter-quitter uplifts the mind with mind-bending euphoria that materializes in the body as airy relaxation. ‘98 Aloha White Widow is available from Pua Mana 1st Hawaiian Pakalōlō Seed Bank.  ",
        "user_fav": null
    }
]
```
