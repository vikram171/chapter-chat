# Web Development Final Project - Chapter Chat

Submitted by: **Vikram Singh**

This web app: **Chapter Chat is a book-focused discussion forum that lets users create posts, share thoughts, add images, leave comments, upvote, sort, search, and manage posts easily.**

Time spent: **15** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Web app includes a create form that allows the user to create posts**
  - Form requires users to add a post title
  - Forms should have the *option* for users to add: 
    - additional textual content
    - an image added as an external image URL
- [x] **Web app includes a home feed displaying previously created posts**
  - Web app must include home feed displaying previously created posts
  - By default, each post on the posts feed should show only the post's:
    - creation time
    - title 
    - upvotes count
  - Clicking on a post should direct the user to a new page for the selected post
- [x] **Users can view posts in different ways**
  - Users can sort posts by either:
    - creation time
    - upvotes count
  - Users can search for posts by title
- [x] **Users can interact with each post in different ways**
  - The app includes a separate post page for each created post when clicked, where any additional information is shown, including:
    - content
    - image
    - comments
  - Users can leave comments underneath a post on the post page
  - Each post includes an upvote button on the post page. 
    - Each click increases the post's upvotes count by one
    - Users can upvote any post any number of times
- [x] **A post that a user previously created can be edited or deleted from its post pages**
  - After a user creates a new post, they can go back and edit the post
  - A previously created post can be deleted from its post page

The following **optional** features are implemented:

- [ ] Web app implements pseudo-authentication
- [ ] Users can repost a previous post by referencing its post ID
- [ ] Users can customize the interface
- [ ] Users can add more characterics to their posts
- [ ] Web app displays a loading animation whenever data is being fetched

The following **additional** features are implemented:

* [x] Fully responsive and mobile-friendly layout
* [x] Clean project folder structure with separate pages/components
* [x] Supabase backend integration with live database operations

## Video Walkthrough

Here's a walkthrough of implemented user stories:  
📝 **Note**: _Zoom in on the GIF below to view details more clearly._

<img src='https://i.imgur.com/evUeB6h.gif' title='Video Walkthrough' alt='Video Walkthrough' />

## Screenshots

### 🏠 Home Feed  
![Home Feed](https://i.imgur.com/ch5eJOL.png)

### ➕ Create a New Post  
![Create Post](https://i.imgur.com/9JSel3y.png)

### 📄 Post Page  
![Post Page](https://i.imgur.com/aN9S7dY.png)

### ✏️ Update A Post 1  
![Update Post 1](https://i.imgur.com/ccJUZu8.png)

### ✏️ Update A Post 2  
![Update Post 2](https://i.imgur.com/UstBurf.png)

## Notes

The biggest challenge was correctly configuring Supabase RLS to enable delete and update functionality without authentication. I also had to ensure that the app updated in real-time and that my git commits didn’t accidentally push unrelated files from other projects.

## License

    Copyright 2025 Vikram Singh

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

