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

## Test Case Matrix

|       | Normal/Abnormal | Blackbox/Whitebox | Functional/Performance | Unit/Integration |
| ----- | --------------- | ----------------- | ---------------------- | ---------------- |
| UIT-1 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-2 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-3 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-4 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-5 | Normal          | Blackbox          | Functional             | Unit             |
| UIT-6 | Normal          | Blackbox          | Functional             | Unit             |