# Database Design

## Users

| Field Name         | Datatype     |
| ------------------ | ------------ |
| ID (Primary Key)   | INT          |
| Username           | VARCHAR(50)  |
| JoinDate           | Datetime     |
| ProfilePicture     | VARCHAR(100) |
| ProfileDescription | VARCHAR(200) |

## Snippets

| Field Name               | Datatype      |
| ------------------------ | ------------- |
| ID (Primary Key)         | INT           |
| UserID (Foreign Key)     | INT           |
| CreationDate             | Datetime      |
| LanguageID (Foreign Key) | Datetime      |
| Title                    | VARCHAR(100)  |
| Description              | VARCHAR(1000) |
| Code                     | VARCHAR(MAX)  |
| Upvotes                  | INT           |
| Downvotes                | INT           |

## Tags

| Field Name       | Datatype     |
| ---------------- | ------------ |
| ID (Primary Key) | INT          |
| CreationDate     | Datetime     |
| Tag              | VARCHAR(100) |

## SnippetTags

| Field Name             | Datatype |
| ---------------------- | -------- |
| ID (Primary Key)       | INT      |
| SnippetID (Forign Key) | INT      |
| TagID (Foreign Key)    | INT      |

## Languages

| Field Name       | Datatype     |
| ---------------- | ------------ |
| ID (Primary Key) | INT          |
| Language         | VARCHAR(100) |

## UserVotes

| Field Name              | Datatype |
| ----------------------- | -------- |
| ID (Primary Key)        | INT      |
| SnippetID (Foreign Key) | INT      |
| UserID (Foreign Key)    | INT      |
| IsUpvote                | bool     |
| IsDownvote              | bool     |

## Comments

| Field Name              | Datatype     |
| ----------------------- | ------------ |
| ID (Primary Key)        | INT          |
| SnippetID (Foreign Key) | INT          |
| UserID (Foreign Key)    | INT          |
| CommentID (Foreign Key) | INT          |
| Comment                 | VARCHAR(MAX) |
| CreationDate            | Datetime     |

*CommentID will be a nullable field, it will allow the system to determine if it is a comment replying to another comment. If it is a first generation comment the field will be null.