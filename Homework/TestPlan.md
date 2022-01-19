# Codebase Test Plan

## Overall Test Plan

For Codebase, our testing plan primarily focuses on initially testing each component individually with test data. These tests will be used to test standard features in the web application with both correct and incorrect usage to assure proper error handling given invalid information. This will be carried out on front end components and back-end components separately. Once these initial tests are completed, our team will move onto testing the applications ability to communicate and work cohesively. Finally we will stress test our application by inputting a large number of records to assure proper functionality and usability. 

## Test Case Descriptions
<br>**UI-T1.1**  - **User Interface Test 1**
<br>**UI-T1.2**  - This test will be used to assure a given users ability to sign-up/sign-in tot eh application.
<br>**UI-T1.3**  - This test will be carried out by navigating to the login page for the application. This page will be the redirect of any web page for on the site for an unauthenticated user. When on the login-in screen the user will be prompted for a username and password, they will provide valid credentials. From there they will be able to navigate the site freely.
<br>**UI-T1.4**  - Inputs: Valid user credentials
<br>**UI-T1.5**  - Output: Successful login
<br>**UI-T1.6**  - Normal
<br>**UI-T1.7**  - Blackbox
<br>**UI-T1.8**  - Functional
<br>**UI-T1.9**  - Unit Test

<br>**UI-T2.1**  - **User Interface Test 2**
<br>**UI-T2.2**  - This test will be used to assure a given users ability to sign-up/sign-in tot eh application.
<br>**UI-T2.3**  - This test will be carried out by navigating to the login page for the application. This page will be the redirect of any web page for on the site for an unauthenticated user. When on the login-in screen the user will be prompted for a username and password, they will provide invalid credentials. This request will be denied and the user will be asked for correct credentials.
<br>**UI-T2.4**  - Inputs: invalid user credentials
<br>**UI-T2.5**  - Output: Unsuccessful login
<br>**UI-T2.6**  - Normal
<br>**UI-T2.7**  - Blackbox
<br>**UI-T2.8**  - Functional
<br>**UI-T2.9**  - Unit Test

<br>**UI-T3.1**  - **User Interface Test 3**
<br>**UI-T3.2**  - This test will focus on assuring the functionality and display of the home page.
<br>**UI-T3.3**  - Once logged-in, users will be redirected to the home screen. This will feature display of different code snippets and filters.
<br>**UI-T3.4**  - Input: Logged-in user
<br>**UI-T3.5**  - Output: Correct display and functionality of home page mechanics
<br>**UI-T3.6**  - Normal
<br>**UI-T3.7**  - Blackbox
<br>**UI-T3.8**  - Functional
<br>**UI-T3.9**  - Unit Test

<br>**UI-T4.1**  - **User Interface Test 4**
<br>**UI-T4.2**  - This test will focus on assuring the functionality and display of the snippet page.
<br>**UI-T4.3**  - Once logged-in, users will be redirected to the home screen. This will feature display of different code snippets and filters. From there, users can redirect to any code snippet displayed or searched for. This page will display the code snippet along with its description. Users will be able to copy the code, comment, vote, and redirect to similar posts.
<br>**UI-T4.4**  - Input: Logged-in user and snippet
<br>**UI-T4.5**  - Output: Functional snippet display screen
<br>**UI-T4.6**  - Normal
<br>**UI-T4.7**  - Blackbox
<br>**UI-T4.8**  - Functional
<br>**UI-T4.9**  - Unit Test

<br>**UI-T5.1**  - **User Interface Test 5**
<br>**UI-T5.2**  - This test will focus on assuring the functionality and display of the user page.
<br>**UI-T5.3**  - Once logged-in, users will be redirected to the home screen. This will feature display of different code snippets and filters. They will be able to navigate to their profile page, here they can see all their posts along with user stats.
<br>**UI-T5.4**  - Input: Logged-in user
<br>**UI-T5.5**  - Output: Functional user display screen
<br>**UI-T5.6**  - Normal
<br>**UI-T5.7**  - Blackbox
<br>**UI-T5.8**  - Functional
<br>**UI-T5.9**  - Unit Test

<br>**UI-T6.1**  - **User Interface Test 6**
<br>**UI-T6.2**  - This test will focus on assuring the functionality of adding a new snippet.
<br>**UI-T6.3**  - Once logged-in, users will be redirected to the home screen. They will be able to navigate to their user page, here they will be able to create a new snippet. Featuring code, a title, description, and the ability to private the code snippet.
<br>**UI-T6.4**  - Input: Logged-in user
<br>**UI-T6.5**  - Output: Functional addition of snippet
<br>**UI-T6.6**  - Normal
<br>**UI-T6.7**  - Blackbox
<br>**UI-T6.8**  - Functional
<br>**UI-T6.9**  - Unit Test

<br>**API-T1.1**  - **API Test 1**
<br>**API-T1.2**  - Assure our indexing API properly indexes new data into the database
<br>**API-T1.3**  - Call the indexData API and ensure that the data is properly indexed into the data base and can be accessed
<br>**API-T1.4**  - JSON object: code snippet as a string, boolean for isPublic, and list of tags as strings
<br>**API-T1.5**  - 204 HTTP code
<br>**API-T1.6**  - Normal
<br>**API-T1.7**  - Blackbox
<br>**API-T1.8**  - Functional
<br>**API-T1.9**  - Unit Test

<br>**API-T2.1**  - **API Test 2**
<br>**API-T2.2**  - Assure our voting APIs properly add the vote objects to the database and increment the correct value
<br>**API-T2.3**  - Call the upVote API on a code snippet and check that the all values are properly updated
<br>**API-T2.4**  - Route variables: codeGuid (Unique ID for code snippets) and postType (whether the item being upvoted is a code snippet or a comment)
<br>**API-T2.5**  - 204 HTTP code
<br>**API-T2.6**  - Normal
<br>**API-T2.7**  - Blackbox
<br>**API-T2.8**  - Functional
<br>**API-T2.9**  - Unit Test

<br>**API-T3.1**  - **API Test 3**
<br>**API-T3.2**  - Assure our voting APIs propery add the vote objects to the database and decrement the correct value
<br>**API-T3.3**  - Call the downVote API on a code snippet and check that all values are properly updated
<br>**API-T3.4**  - Route variables: codeGuid (Unique ID for code snippets) and postType (whether the item being upvoted is a code snippet or a comment)
<br>**API-T3.5**  - 204 HTTP code
<br>**API-T3.6**  - Normal
<br>**API-T3.7**  - Blackbox
<br>**API-T3.8**  - Functional
<br>**API-T3.9**  - Unit Test

<br>**API-T4.1**  - **API Test 4**
<br>**API-T4.2**  - Assure the comment API adds a new user comment to the proper code snippet in the database
<br>**API-T4.3**  - Call the createComment API on a code snippet and check that all values are properly updated
<br>**API-T4.4**  - JSON object: comment text. Route variables: codeGuid
<br>**API-T4.5**  - 204 HTTP code
<br>**API-T4.6**  - Normal
<br>**API-T4.7**  - Blackbox
<br>**API-T4.8**  - Functional
<br>**API-T4.9**  - Unit Test

<br>**API-T5.1**  - **API Test 5**
<br>**API-T5.2**  - Assure the upvote API works for comments
<br>**API-T5.3**  - Call the upVote API on a comment and check that all values are properly updated
<br>**API-T5.4**  - Route variables: codeGuid and postType
<br>**API-T5.5**  - 204 HTTP code
<br>**API-T5.6**  - Normal
<br>**API-T5.7**  - Blackbox
<br>**API-T5.8**  - Functional
<br>**API-T5.9**  - Unit Test

<br>**API-T6.1**  - **API Test 6**
<br>**API-T6.2**  - Assure the downvote API works for comments
<br>**API-T6.3**  - Call the downVote API on a comment and check that all values are properly updated
<br>**API-T6.4**  - Route variables: codeGuid and postType
<br>**API-T6.5**  - 204 HTTP code
<br>**API-T6.6**  - Normal
<br>**API-T6.7**  - Blackbox
<br>**API-T6.8**  - Functional
<br>**API-T6.9**  - Unit Test

<br>**API-T7.1**  - **API Test 7**
<br>**API-T7.2**  - Assure the full text search API returns the proper results
<br>**API-T7.3**  - Call the search API and verify returned results are the desired results
<br>**API-T7.4**  - JSON object: search string, list of filters
<br>**API-T7.5**  - 200 HTTP code and search results
<br>**API-T7.6**  - Normal
<br>**API-T7.7**  - Blackbox
<br>**API-T7.8**  - Functional
<br>**API-T7.9**  - Unit Test
## Test Case Matrix

|       | Normal/Abnormal | Blackbox/Whitebox | Functional/Performance | Unit/Integration |
| ----- | --------------- | ----------------- | ---------------------- | ---------------- |
| UI-T1 | Normal          | Blackbox          | Functional             | Unit             |
| UI-T2 | Normal          | Blackbox          | Functional             | Unit             |
| UI-T3 | Normal          | Blackbox          | Functional             | Unit             |
| UI-T4 | Normal          | Blackbox          | Functional             | Unit             |
| UI-T5 | Normal          | Blackbox          | Functional             | Unit             |
| UI-T6 | Normal          | Blackbox          | Functional             | Unit             |
| API-T1 | Normal          | Blackbox          | Functional             | Unit             |
| API-T2 | Normal          | Blackbox          | Functional             | Unit             |
| API-T3 | Normal          | Blackbox          | Functional             | Unit             |
| API-T4 | Normal          | Blackbox          | Functional             | Unit             |
| API-T5 | Normal          | Blackbox          | Functional             | Unit             |
| API-T6 | Normal          | Blackbox          | Functional             | Unit             |
| API-T7 | Normal          | Blackbox          | Functional             | Unit             |