# Project Name
NFTrade


## Description
NFTrade is a platform where artists can upload their nfts and create a personal gallery. The collector can sign up and check the artist’s profile and his nfts. The collector can also check the general gallery with all the nfts present on the platform, select his favorite ones and decide to buy them. Both users can sign up, log in, edit and delete their profiles.'  

<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and filter by type of restaurant, log in and sign up. 
- **sign up** - As a user I want to sign up on the web page so that I can add favorite restaurants to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite list** - As a user I want to see the list of my favorite and delete them.
- **edit user** - As a user I want to be able to edit my profile.
- **result** - As a user I want to see the list of restaurant filter by my preferences.
- **restaurant listing** - As a user I want to see more details of the restaurant, be able to call them and visit their website and save it as favorites.



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password } and type of user                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  } and type of user                                   |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |  Info of the user type: Artist or Collector                                                        |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/nft`               | Private route. Render the `favorites` view.                  |                                                          |
| `POST`     | `/artist/nft/`              | Private route. Adds a new NFT for the current user.     |                                |
| `DELETE`   | `/private/profile/{_id} | Private route. Deletes the existing collector from the current user. |                                                          |
| `GET`      | `/nft`                     | Renders `nft-gallery` view.                              |                                                          |





## Models

User model
```javascript
{
  name: String,
  email: String,
  password: String,
  favorites: [FavoriteId],
}


User artist model
  {
    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    upload: {
        type: Image
    }
  },

```
User Collector model 
  {
    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    favorites: [],
  },

NFT Model

  {
    title: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    value: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
  },


```



<br>

## API's

- None, they would be created

<br>


## Packages



<br>



## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)



<br>



## Links



### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deploy Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)

### Contributors
Flavia Fogliato - [`Foglia`](https://github.com/Foglia) - [`Flavia Fogliato`](https://www.linkedin.com/in/flaviafogliato)

Andrea Leonetti - [`ciroandrealeonetti`](https://github.com/ciroandrealeonetti) - [`Andrea Leonetti `](https://www.linkedin.com/in/ciroandrealeonetti/)

