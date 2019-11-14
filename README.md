# Workast API

Summary: RESTful API that allow an application to manage users and articles.

## User Model:
```
{
    _id
    name (String)
    avatar (Url)
}

```
## Article Model
```
{
    _id
    userId (User._id)
    title (string)
    text (string)
    tags (array of strings)
}
```

## Required endpoints:
1. Create a new user
2. Create a new article
3. Edit an article
4. Delete an article
5. Return all articles (from all users) that contains the given tag(s) (1 or more)

## Authentication
This API will be private, used by a mobile app or server side applications so every call to the API will include an API token to validate. 
Please indicate in the API documentation where in the request we should place that token. Note: for simplicity make the token an environment variable

## Run Workast API
1. git clone https://github.com/odtorres/workast.git
2. cd workast
3. npm install
4. Rename ".env.copy" to ".env"
5. node server