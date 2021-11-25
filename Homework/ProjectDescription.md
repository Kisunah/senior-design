# Codebase

## Team Members

- Matthew Schlager: schlagmt@mail.uc.edu
- James Wilfong: wilfonjv@mail.uc.edu
- Seth Hanusik: hanusisw@mail.uc.edu

## Advisor

- Yizong Cheng: chengy@mail.uc.edu

## Project Abstract

The growing occupation of programming has driven the need for online open-source code repositories. Current solutions lack in-depth searching and sharing options. Codebase is a publicly available .NET MVC web application designed for storing code snippets to be shared and discussed online. It implements advanced searching techniques that allow users to find desired code and refutable code faster than current options.

## Project Description

Currently there are many repository options for programmers to store large and small snippets of code, most notably are GitHub products. GitHub provides a space, GitHub Gist, for users to store and share small snippets of code. However, this feature is under used and lacks standard searching options. Similar repository solutions are subject to similar flaws.

We introduce Codebase, an online repository designed for storing code snippets both publicly and privately. A given user will be able save and classify a piece of code either publicly or privately, each entry will be able to be tagged by language and purpose. This will allow users to also search, and filter code solutions based on their given needs, such as language, tags, and refutability. Publicly posted entries will feature a liking and commenting system to promote discussion and the advancement of better code over inefficient code.

Codebase has three primary goals defined to set it apart from other code repositories options:
1. Codebase will implement a modern user interface that will allow for users to easily traverse and make use of the searching and filtering options built into Codebase.
2. Codebase will use elastic search to search through many code snippets to find the most relevant responses to a user query. These results will also be able to be weighted based on popularity, freshness, and overall activity.
3. Codebase will provide online compiling for a subset of languages, the extend of languages will be based on the time available during development.

