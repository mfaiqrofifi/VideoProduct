# Video_Product_List_API


This project is from Gen Gigih's mid-term assignment and involves creating the Video Product List API, dedicated to backend development for the Video Product List app. The primary objective of this API is to significantly enhance the app's functionality and overall performance.

## Database Structure

This project utilizes a MongoDB NoSQL database to manage and store its data. The database is organized using collections, each representing a different entity within the application.

### Collection: videos

- **'_id'**: The unique identifier
- **'url'** : URL for product videos
- **'created_at'** : The timestamp when the user's account was created.
- **'updated_at'** : The timestamp when the user's account was updated.

### Collection: products

- **'_id'**: The unique identifier
- **'link_product'**: Link for getting the product
- **'title'**: Product title
- **'price'**: Product price
- **'videoId'**: The id which reference into video collection
- **'created_at'** : The timestamp when the user's account was created.
- **'updated_at'** : The timestamp when the user's account was updated.

### Colection: Comment

- **'_id'**: The unique identifier
- **'username'**: Username for identifier of the user
- **'comment'**: comment sentence which write by user
- **'videoId'**: The id which reference into video collection
- **'created_at'** : The timestamp when the user's account was created.
- **'updated_at'** : The timestamp when the user's account was updated.

## API Structure

This project provides a RESTful API with well-defined endpoints to interact with the application's backend. The API is hosted locally on localhost:3000 and follows standard HTTP methods (GET, POST) for different operations, returning responses in JSON format.

### Endpoints

Below are the available endpoints along with their descriptions:

#### 'POST /videos'

- Description: Create new videos thumbnail
- Request Body: **'url'**(string)
- Response Body: **'url'**(string),**created_at**(Timestamp),**upadted_at**(Timestamp)

#### 'GET /videos'

- Description: Retrieve list of videos thumbnail.
- Response Body: array wich has items of object with properties **'url'**(string),**created_at**(Timestamp),**upadted_at**(Timestamp)

#### 'POST /products'

- Description: Create new product
- Request Body: **'linkProduct'**(string),**'title'**(string),**'price'**(number),**'videoId'**(string)
- Response Body: **'linkProduct'**(string), **'title'**(string),**'price'**(number), **'videoId'**(string), **created_at**(Timestamp),**upadted_at**(Timestamp)

#### 'GET /products/:idVideo'

- Description: Retrieve list of ptoducts based on **'idVideo'**.
- Parameters: **'idVideo'**
- Response Body: array wich has items of object with properties **'linkProduct'**(string), **'title'**(string),**'price'**(number), **'videoId'**(string), **created_at**(Timestamp),**upadted_at**(Timestamp)

#### 'POST /products'

- Description: Create new product
- Request Body: **'userName'**(string),**'comment'**(string),**'videoId'**(string)
- Response Body: **'userName'**(string),**'comment'**(string),**'videoId'**(string), **created_at**(Timestamp),**upadted_at**(Timestamp)

#### 'GET /comment/:idVideo'

- Description: Retrieve list of comments based on **'idVideo'**.
- Parameter:**'idVideo'**
- Response Body: array wich has items of object with properties **'userName'**(string),**'comment'**(string),**'videoId'**(string),**created_at**(Timestamp),**upadted_at**(Timestamp)

