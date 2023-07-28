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

#### 'POST http://localhost:3000/videos'

- Description: Create new videos thumbnail
- Request Body: **'url'**(string)
- Response Body: **'url'**(string),**created_at**(Timestamp),**upadted_at**(Timestamp)

#### 'GET http://localhost:3000/videos'

- Description: Retrieve list of videos thumbnail.
- Response Body: array wich has items of object with properties **'url'**(string),**created_at**(Timestamp),**upadted_at**(Timestamp)

#### 'POST http://localhost:3000/products'

- Description: Create new product
- Request Body: **'linkProduct'**(string),**'title'**(string),**'price'**(number),**'videoId'**(string)
- Response Body: **'linkProduct'**(string), **'title'**(string),**'price'**(number), **'videoId'**(string), **created_at**(Timestamp),**upadted_at**(Timestamp)

#### 'GET http://localhost:3000/products/:idVideo'

- Description: Retrieve list of ptoducts based on **'idVideo'**.
- Parameters: **'idVideo'**
- Response Body: array wich has items of object with properties **'linkProduct'**(string), **'title'**(string),**'price'**(number), **'videoId'**(string), **created_at**(Timestamp),**upadted_at**(Timestamp)

#### 'POST http://localhost:3000/comment'

- Description: Create new product
- Request Body: **'userName'**(string),**'comment'**(string),**'videoId'**(string)
- Response Body: **'userName'**(string),**'comment'**(string),**'videoId'**(string), **created_at**(Timestamp),**upadted_at**(Timestamp)

#### 'GET http://localhost:3000/comment:idVideo'

- Description: Retrieve list of comments based on **'idVideo'**.
- Parameter:**'idVideo'**
- Response Body: array wich has items of object with properties **'userName'**(string),**'comment'**(string),**'videoId'**(string),**created_at**(Timestamp),**upadted_at**(Timestamp)

## API request and response

Videos Object

```
{
    id:ObjectId,
    url:String,
    created_at: datetime(iso 8601),
    updated_at: datetime(iso 8601)
}
```
### POST /videos
Creates a new Videos Thumbnail and returns the new object

- **URL params**
  
  none

- **Headers**
  
  Content-Type: application/json

- **Request**
  
  ``````
  {
    url:string
  }
  ``````
- Success Response:

    - code: 201
    - content :
    ``````
    {
        message:"Success",
        status:201,
        data:{<videos_object>}
    }
    ``````
- Error response
    - code: 400
    - response:{
    message:"Bad Request",
    code:400
}

    - code: 500
    - response:{
    message:error.message,
    code:500
}

### GET /videos
Returns all Videos thumbnail

- **URL params**
  
  none

- **Headers**
  
  Content-Type: application/json

- **Request**

    none
- Success Response:

    - code: 200
    - content :
    ``````
    {
        message:"Success",
        status:200,
        data:[{<videos_object>}]
    }
    ``````
- Error response
    - code: 500
    - response:{
    message:error.message,
    code:500
}

Poduct Object

``````
{
    id:ObjectId
    linkProduct:String,
    title:String,
    price:Number,
    videoId:ObjectId,
    created_at: datetime(iso 8601),
    updated_at: datetime(iso 8601)
}

``````

### POST /products
Creates a new Product and returns the new object

- **URL params**
  
  none

- **Headers**
  
  Content-Type: application/json

- **Request**
  
  ``````
  {
    linkProduct:string,
    title:string,
    price:int,
    videoId:string
  }
  ``````
- Success Response:

    - code: 201
    - content :
    ``````
    {
        message:"Success",
        status:201,
        data:{<videos_object>}
    }
    ``````
- Error response
    - code: 400
    - response:{
    message:"Bad Request",
    code:400
}

    - code: 500
    - response:{
    message:error.message,
    code:500
}

### GET /products/:idVideo
Returns all Product associated with the specified idVideo from video thumbnail

- **URL params**
  
  Required=[idVideo:int]

- **Headers**
  
  Content-Type: application/json

- **Request**
  
  none
- Success Response:

    - code: 200
    - content :
    ``````
    {
        message:"Success",
        status:201,
        data:[
            {
                <product_object>,
                videos:[{<videos_object>}]
            }
        ]
    }
    ``````
- Error response
    - code: 404
    - response:{
    message:"Not found",
    code:400
}

    - code: 500
    - response:{
    message:error.message,
    code:500
}

Comment Object

``````
{
    id: ObejctId,
    userName:string,
    comment:string,
    videoId:ObjectId,
    created_at: datetime(iso 8601),
    updated_at: datetime(iso 8601)
}
``````
### POST /comment
Creates a new Comment and returns the new object

- **URL params**
  
  none

- **Headers**
  
  Content-Type: application/json

- **Request**
  
  ``````
  {
    userName:String,
    comment:String,
    videoId:String
  }
  ``````
- Success Response:

    - code: 201
    - content :
    ``````
    {
        message:"Success",
        status:201,
        data:{<comment_object>}
    }
    ``````
- Error response
    - code: 400
    - response:{
    message:"Bad Request",
    code:400
}

    - code: 500
    - response:{
    message:error.message,
    code:500
}
### GET /comment/:idVideo
Returns all Comment associated with the specified idVideo thumbnail

- **URL params**
  
  Required=[idVideo:int]

- **Headers**
  
  Content-Type: application/json

- **Request**
  
  none
- Success Response:

    - code: 200
    - content :
    ``````
    {
        message:"Success",
        status:200,
        data:[
            {
                <comment_object>,
                videos:[{<videos_object>}]
            }
        ]
    }
    ``````
- Error response
    - code: 404
    - response:{
    message:"Not found",
    code:400
}

    - code: 500
    - response:{
    message:error.message,
    code:500
}

## How to run in local

``````bash
npm run dev
``````
