# Codebase Test Plan

## Overall Test Plan

For Codebase, our testing plan primarily focuses on initially testing each component individually with test data. These tests will be used to test standard features in the web application with both correct and incorrect usage to assure proper error handling given invalid information. This will be carried out on front end components and back-end components separately. Once these initial tests are completed, our team will move onto testing the applications ability to communicate and work cohesively. Finally we will stress test our application by inputting a large number of records to assure proper functionality and usability. 

## Test Case Descriptions
<br>**UIT-1.1**  - **User Interface Test 1**
<br>**UIT-1.2**  - This test will be used to assure a given users ability to sign-up/sign-in tot eh application.
<br>**UIT-1.3**  - This test will be carried out by navigating to the login page for the application. This page will be the redirect of any web page for on the site for an unauthenticated user. When on the login-in screen the user will be prompted for a username and password, they will provide valid credentials. From there they will be able to navigate the site freely.
<br>**UIT-1.4**  - Inputs: Valid user credentials
<br>**UIT-1.5**  - Output: Successful login
<br>**UIT-1.6**  - Normal
<br>**UIT-1.7**  - Blackbox
<br>**UIT-1.8**  - Functional
<br>**UIT-1.9**  - Unit Test

<br>**UIT-2.1**  - **User Interface Test 2**
<br>**UIT-2.2**  - This test will be used to assure a given users ability to sign-up/sign-in tot eh application.
<br>**UIT-2.3**  - This test will be carried out by navigating to the login page for the application. This page will be the redirect of any web page for on the site for an unauthenticated user. When on the login-in screen the user will be prompted for a username and password, they will provide invalid credentials. This request will be denied and the user will be asked for correct credentials.
<br>**UIT-2.4**  - Inputs: invalid user credentials
<br>**UIT-2.5**  - Output: Unsuccessful login
<br>**UIT-2.6**  - Normal
<br>**UIT-2.7**  - Blackbox
<br>**UIT-2.8**  - Functional
<br>**UIT-2.9**  - Unit Test

<br>**UIT-3.1**  - **User Interface Test 3**
<br>**UIT-3.2**  - This test will focus on assuring the functionality and display of the home page.
<br>**UIT-3.3**  - Once logged-in, users will be redirected to the home screen. This will feature display of different code snippets and filters.
<br>**UIT-3.4**  - Input: Logged-in user
<br>**UIT-3.5**  - Output: Correct display and functionality of home page mechanics
<br>**UIT-3.6**  - Normal
<br>**UIT-3.7**  - Blackbox
<br>**UIT-3.8**  - Functional
<br>**UIT-3.9**  - Unit Test

<br>**UIT-4.1**  - **User Interface Test 4**
<br>**UIT-4.2**  - This test will focus on assuring the functionality and display of the snippet page.
<br>**UIT-4.3**  - Once logged-in, users will be redirected to the home screen. This will feature display of different code snippets and filters. From there, users can redirect to any code snippet displayed or searched for. This page will display the code snippet along with its description. Users will be able to copy the code, comment, vote, and redirect to similar posts.
<br>**UIT-4.4**  - Input: Logged-in user and snippet
<br>**UIT-4.5**  - Output: Functional snippet display screen
<br>**UIT-4.6**  - Normal
<br>**UIT-4.7**  - Blackbox
<br>**UIT-4.8**  - Functional
<br>**UIT-4.9**  - Unit Test

<br>**UIT-5.1**  - **User Interface Test 5**
<br>**UIT-5.2**  - This test will focus on assuring the functionality and display of the user page.
<br>**UIT-5.3**  - Once logged-in, users will be redirected to the home screen. This will feature display of different code snippets and filters. They will be able to navigate to their profile page, here they can see all their posts along with user stats.
<br>**UIT-5.4**  - Input: Logged-in user
<br>**UIT-5.5**  - Output: Functional user display screen
<br>**UIT-5.6**  - Normal
<br>**UIT-5.7**  - Blackbox
<br>**UIT-5.8**  - Functional
<br>**UIT-5.9**  - Unit Test

<br>**UIT-6.1**  - **User Interface Test 6**
<br>**UIT-6.2**  - This test will focus on assuring the functionality of adding a new snippet.
<br>**UIT-6.3**  - Once logged-in, users will be redirected to the home screen. They will be able to navigate to their user page, here they will be able to create a new snippet. Featuring code, a title, description, and the ability to private the code snippet.
<br>**UIT-6.4**  - Input: Logged-in user
<br>**UIT-6.5**  - Output: Functional addition of snippet
<br>**UIT-6.6**  - Normal
<br>**UIT-6.7**  - Blackbox
<br>**UIT-6.8**  - Functional
<br>**UIT-6.9**  - Unit Test

<br>**UIT-7.1**  - **API Test 1**
<br>**UIT-7.2**  - Assure our indexing API properly indexes new data into the database
<br>**UIT-7.3**  - Call the indexData API and ensure that the data is properly indexed into the data base and can be accessed
<br>**UIT-7.4**  - JSON object: code snippet as a string, boolean for isPublic, and list of tags as strings
<br>**UIT-7.5**  - 204 HTTP code
<br>**UIT-7.6**  - Normal
<br>**UIT-7.7**  - Blackbox
<br>**UIT-7.8**  - Functional
<br>**UIT-7.9**  - Unit Test

<br>**UIT-8.1**  - **API Test 2**
<br>**UIT-8.2**  - Assure our voting APIs properly add the vote objects to the database and increment the correct value
<br>**UIT-8.3**  - Call the upVote API on a code snippet and check that the all values are properly updated
<br>**UIT-8.4**  - Route variables: codeGuid (Unique ID for code snippets) and postType (whether the item being upvoted is a code snippet or a comment)
<br>**UIT-8.5**  - 204 HTTP code
<br>**UIT-8.6**  - Normal
<br>**UIT-8.7**  - Blackbox
<br>**UIT-8.8**  - Functional
<br>**UIT-8.9**  - Unit Test

<br>**UIT-9.1**  - **API Test 3**
<br>**UIT-9.2**  - Assure our voting APIs propery add the vote objects to the database and decrement the correct value
<br>**UIT-9.3**  - Call the downVote API on a code snippet and check that all values are properly updated
<br>**UIT-9.4**  - Route variables: codeGuid (Unique ID for code snippets) and postType (whether the item being upvoted is a code snippet or a comment)
<br>**UIT-9.5**  - 204 HTTP code
<br>**UIT-9.6**  - Normal
<br>**UIT-9.7**  - Blackbox
<br>**UIT-9.8**  - Functional
<br>**UIT-9.9**  - Unit Test

<br>**UIT-10.1**  - **API Test 4**
<br>**UIT-10.2**  - Assure the comment API adds a new user comment to the proper code snippet in the database
<br>**UIT-10.3**  - Call the createComment API on a code snippet and check that all values are properly updated
<br>**UIT-10.4**  - JSON object: comment text. Route variables: codeGuid
<br>**UIT-10.5**  - 204 HTTP code
<br>**UIT-10.6**  - Normal
<br>**UIT-10.7**  - Blackbox
<br>**UIT-10.8**  - Functional
<br>**UIT-10.9**  - Unit Test

<br>**UIT-11.1**  - **API Test 5**
<br>**UIT-11.2**  - Assure the upvote API works for comments
<br>**UIT-11.3**  - Call the upVote API on a comment and check that all values are properly updated
<br>**UIT-11.4**  - Route variables: codeGuid and postType
<br>**UIT-11.5**  - 204 HTTP code
<br>**UIT-11.6**  - Normal
<br>**UIT-11.7**  - Blackbox
<br>**UIT-11.8**  - Functional
<br>**UIT-11.9**  - Unit Test

<br>**UIT-12.1**  - **API Test 6**
<br>**UIT-12.2**  - Assure the downvote API works for comments
<br>**UIT-12.3**  - Call the downVote API on a comment and check that all values are properly updated
<br>**UIT-12.4**  - Route variables: codeGuid and postType
<br>**UIT-12.5**  - 204 HTTP code
<br>**UIT-12.6**  - Normal
<br>**UIT-12.7**  - Blackbox
<br>**UIT-12.8**  - Functional
<br>**UIT-12.9**  - Unit Test

<br>**UIT-13.1**  - **API Test 7**
<br>**UIT-13.2**  - Assure the full text search API returns the proper results
<br>**UIT-13.3**  - Call the search API and verify returned results are the desired results
<br>**UIT-13.4**  - JSON object: search string, list of filters
<br>**UIT-13.5**  - 200 HTTP code and search results
<br>**UIT-13.6**  - Normal
<br>**UIT-13.7**  - Blackbox
<br>**UIT-13.8**  - Functional
<br>**UIT-13.9**  - Unit Test
## Test Case Matrix

|       | Normal/Abnormal | Blackbox/Whitebox | Functional/Performance | Unit/Integration |
| ----- | --------------- | ----------------- | ---------------------- | ---------------- |
| UIT-1 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-2 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-3 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-4 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-5 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-6 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-7 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-8 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-9 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-10 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-11 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-12 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-13 | Normal          | Blackbox          | Functional             | Unit             |