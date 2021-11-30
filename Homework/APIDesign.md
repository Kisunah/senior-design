# API Design & Endpoints

## Full Text Search
### HTTP Route
```json
    POST codebaseEnpoint/search
```

### Example Request
```json
    {
        "query": "quicksort",
        "tags": {
            "language": "python"
        }
    }
```

### Example Response
```json
    {
        "results": [
            {
                "name": "Snipper Name",
                "description": "code snippet description",
                "code": "**quicksort code**",
                "tags": {
                    "language": "python"
                },
                "comments": [
                    {
                        "user": "userName",
                        "comment": "comment text"
                    }
                ],
                "votes": [
                    {
                        "user": "userName",
                        "voteType": "up"
                    }
                ],
                "voteNumber": 1
            }
        ]
    }
```

### Response Parameters
Status Codes | Description
-------------|--------------
200 | Code block created
400 | Bad request

## Insert Data into DB

### HTTP Route
```json
POST codebaseEnpoint/insertCode
```

### Example Request
```json
    {
        "name": "Example name",
        "description": "example description of the code block",
        "code": "actual code",
        "tags": {
            "langauge": "javascript"
        }
    }
```

### Response Parameters
Status Code | Description
------------|------------
204 | Code block was successfully uploaded
400 | Bad Request

## Vote

### HTTP Routes
```json
POST codebaseEndpoint/codeId/upVote
POST codebaseEndpoint/codeId/downVote
```

### Example Request
```json
{
    "user": "userName",
    "voteType": "up"
}
```

### Response Parameters
Status Code | Description
------------|-------------
204 | Vote was successfully added to its code block
400 | Bad Request
## Comment

### HTTP Route
```json
POST codebaseEndpoint/codeId/comment
```

### Example Request
```json
{
    "user": "userName",
    "comment": "comment text"
}
```

### Response Parameters
Status Code | Description
------------|------------
204 | Comment was successfully added to its code block
400 | Bad Request

## Compile User Code

### HTTP Route
```
POST https://api.jdoodle.com/v1/execute
```

This is a third party API that we will use to verify code that users are uploading is valid.