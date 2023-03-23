# GenesisFront2023
It's just a repository for Genesis Front-End School 2023 Case

## Figma template
Template for this project is created in Figma.
Here is the [link](https://www.figma.com/file/wWHb5OOFRwdUtpEQfvdSDR/Genesis-Frontend-School-2.0?node-idthe=30%3A110&t=N7c6JWgDASpFKD7n-1)  

## HTML Template
HTML + CSS template is located in the `\template` folder.

It's actually fully working solution using the Vanilla JavaScript. It includes two pages: `index.html` and `product.html`

`index.html` is the main application webpage, which has quite simple structure: 
- the main menu and the "Company" logo (the fictitious company is called "Baby's Academy", it's specialized on teaching anyone in wide area of knowledge, but what is important - even babies would understand everything :) );
- the advertisement section, which shows (promotes) one randomly selected course from the list of all available courses;
- funny slogan section;
- the section with the list of all available courses, divided in pages by 10 courses each, together with pagination controls;
- the footer section.

`product.html` is the detailed view of the course selected on the `index.html`. This page has the following structure:
- the main menu and the "Company" logo;
- all the important information about the selected course (icluding the title, description, number of lessons, number of hours, the lists of obtained skills, preview picture of the course, rating, etc.);
- the course curriculum section, which contains the "cards" with lessons; each card contains the lesson number, description of the lesson, and the status indicator;
- the footer section.

### How to run this masterpiece :) - Now, it's available here: [https://sprightly-gnome-2c3a5b.netlify.app/](https://sprightly-gnome-2c3a5b.netlify.app/)
Prerequisites:
1) Install the addon for your browser (I used [this one](https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/)), which will serve the role of proxy server to full the protection of the API server. Otherwise, it would be not possible to use the API by the scripts running on my webpages.
2) Use any simple Live Server, like the one coming with the VS Code.

How everything works:
1) Open `index.html`. The most interesting part of it is the cards with the courses. If user keeps mouse over the preview picture of the course, the video preview starts automatically.
2) Press any of the buttons "Переглянути" in either of the sections. You may use the pagination controls to find the page with required course.
3) Upon pressing the button, the page `product.html` will be open with the parameter `?course=<course.id>`. This parameter is recognized by the script, so the correct course will be fetched from the API server and displayed on the page.
4) While staying on the `product.html` page, click on the lessons cards in the curriculum section to see the video lesson.
5) If the lesson's status is "blocked" it will not be selectable.
6) The API server is super slow, so the preloading picture is shown while the data is getting downloded.
7) The local storage of a browser is used to remember the courses and lessons viewed in order to show the last seen video.

More technical details:
1) In order to show the videos, the [video.js](https://videojs.com/) player is used (I didn't manage to make hls.js working).
2) In order to make life more fun, the [Axios](https://axios-http.com/docs/intro) was used instead of standard fetch.

TO DO:
1) It's easy to make these webpages responsive (I'll do it ASAP) - **Responsiveness is added on 23.03.2023**
2) Connection/communication erros can be easily handled using Axios fuctionality in the .then().catch() code sructure.
3) Video preview should be started with some short delay to avoid cases when user just slides mouse across the page to some desired destination.
4) If the progress in watching video can be considered as the user's progress, then it's possible to store the progress in the local storage and show it in the status line of each lesson.

## React powered website
The React solution is located in the `\website` folder.

TO DO:
Unfortunately, since the webpages with all functionality were created "from scratch", no time left for converting the webpages to React SPA (or TPA - two pages application :) )

Main steps to get React application working:
1) The main structure has been created with the help of `npx create-react-app .`
2) Add the following modules: styled-components and the react router
3) Develop such components as "course card", "list of course cards", "pagination", "lesson card", "active lesson", etc.
4) Just two more days of coding to get it done :)
 
