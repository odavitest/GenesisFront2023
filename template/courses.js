// Initialization
console.log("Start");
let coursePhoto = document.querySelector('.active-lesson-card .course-photo');
var player = null;


document.getElementById('adv').addEventListener('click', 
    (e) => {
        let target = e.target.closest('button');
        let courseUrl = target.getAttribute('data-url');
        //let currentUrl = new URL(location.href);
        target && (location.href = courseUrl);
    });

document.getElementById('list-courses').addEventListener('click', 
    (e) => {
        let target = e.target.closest('button.btn');
        if (target) {
            let courseUrl = target.getAttribute('data-url');
            console.log(target, courseUrl);
            target && (location.href = courseUrl);
        }
    });

document.querySelector('.list-courses__pagination').addEventListener('click', 
    (e) => {
        let target1 = e.target.closest('.pagination-left');
        let target2 = e.target.closest('.pagination-right');
        if (target1 && target1.classList.contains('on')) {
            currentPage--;
            updateCoursesList(allCoursesData);    
        } else if (target2 && target2.classList.contains('on')) {
            currentPage++;
            updateCoursesList(allCoursesData);
        };
    });

// Get an API key
let tokenAPIUrl = 'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions';
let apiToken = '';
let allCoursesAPIUrl = '';
let courseAPIUrl = '';
let allCoursesData = null;
let courseData = null;
let cardsPerPage = 10;
let currentPage = 1;
let numberPages = null;

console.log("Request for Token was sent!");
preloaderToggle('on');
axios.get(tokenAPIUrl, {timeout: 15000}).then((response) => {
    apiToken = response.data.token;

    // API call to get all courses
    allCoursesAPIUrl = `https://api.wisey.app/api/v1/core/preview-courses?token=${apiToken}`;
    console.log("Request for the list of courses was sent!");
    axios.get(allCoursesAPIUrl, {timeout: 20000}).then((response) => {
        allCoursesData = response.data.courses;
        console.log("Courses received!");
        updateAdvCourse(allCoursesData);
        updateCoursesList(allCoursesData);
        preloaderToggle('off');
    }).catch(error => {
        console.log('Error in data request = ' + error.code);
        console.log('Stupid API is off or very slow - Using local data');
        allCoursesData = getAllCoursesData();
        updateAdvCourse(allCoursesData);
        updateCoursesList(allCoursesData);
        preloaderToggle('off'); 
    })  
}).catch(error => {
    console.log('Error in token request = ' + error.code);
    console.log('Stupid API is off or very slow - Using local data');
    allCoursesData = getAllCoursesData();
    updateAdvCourse(allCoursesData);
    updateCoursesList(allCoursesData);
    preloaderToggle('off'); 
});

function updateAdvCourse(data) {
    let numberCourses = data.length;
    console.log(`We've got ${numberCourses} courses`);
    // Find random course for advertisment section
    let advCourseIndex = Math.floor(Math.random()*(numberCourses + 1));
    console.log('Adv Course is ' + advCourseIndex);
    // Render adv. section
    let advCourse = data[advCourseIndex];
    let launchDate = new Date(advCourse.launchDate)
        .toLocaleDateString('uk', 
            { 
                weekday: "short",
                year: "numeric",
                month: "2-digit",
                day: "numeric",
                minute: "2-digit",
                hour: "2-digit"
            });
    console.log('Launch date is ' + launchDate);
    let advSectionMarkup = `<h4 class="course-adv__left-date text-gradient orange">
                ${(advCourse.status === 'launched') ? 'Доступно з ' + launchDate : 'Старт ' + launchDate}
                </h4>
                <h2 class="title-h2">Безкоштовний курс</h2>
                <div class="course-adv__right">
                    <div class="course-rating">
                        <div id="rating" class="stars text-16px">${advCourse.rating}</div>
                    </div>
                    <img id="course-image" class="profile-photo" src="${advCourse.previewImageLink + '/cover.webp'}" alt="profile photo" width="634" height="647">
                </div>
                <h1 class="course-adv__left-title title-h1 text-gradient blue">${advCourse.title}</h1>
                <p class="text-22px text-italic">${advCourse.description}</p>
                <ul class="course-adv__left-features">
                    <li class="features">${advCourse.duration + ' годин навчання, практики'}</li>
                    <li class="features">${advCourse.lessonsCount + ' уроків'}</li>
                </ul>
                <button class="btn filled-gradient orange text-20px" data-url="${'/product.html?course=' + advCourse.id}">Переглянути</button>`;
    document.getElementById('adv').innerHTML = '';
    document.getElementById('adv').insertAdjacentHTML('beforeend', advSectionMarkup);

    //document.getElementById('rating').innerText = advCourse.rating;
    //document.getElementById('course-image').src = advCourse.previewImageLink + '/cover.webp';
};

function updateCoursesList(data) {
    let numberCourses = data.length;

    // Render the Launch Date Ordered List of Courses 
    numberPages = Math.ceil(numberCourses/cardsPerPage);
    document.getElementById('list-courses').innerHTML = '';
    data.sort((course, prev) => course.launchDate - prev.launchDate ).forEach((course, index) => {
        if(index >= (currentPage-1)*cardsPerPage && index <= currentPage*cardsPerPage - 1) {
            const launchDate = new Date(course.launchDate)
                .toLocaleDateString('uk', 
                    { 
                        weekday: "short",
                        year: "numeric",
                        month: "2-digit",
                        day: "numeric",
                        minute: "2-digit",
                        hour: "2-digit"
                    });
                    
            const markup = `
            <div class="list-courses__card">
                <div>
                    <div class="upper-status card-wrapper">
                        <div class="price text-orange text-16px">Безкоштовно</div>
                        <div class="stars text-16px">${course.rating}</div>
                    </div>
                    <div class="course-photo" data-preview="${(course?.meta?.courseVideoPreview?.link) ? course.meta.courseVideoPreview.link : 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'}">
                        <img src="${course.previewImageLink + '/cover.webp'}" alt="preview">
                    </div>
                    <div class="course-avail card-wrapper text-orange text-12px">${(course.status === 'launched') ? 'Доступно з ' + launchDate : 'Стартуємо ' + launchDate}</div>
                    <h4 class="course__title card-wrapper text-20px text-gradient blue">${course.title}</h4>
                    <p class="course-abstract card-wrapper text-16px">${course.description}</p>
                    <div class="course-meta card-wrapper">
                        <div class="lessons text-16px">${course.lessonsCount} уроки</div>
                        <div class="days text-16px">${course.duration} годин</div>
                    </div>
                </div>
                <button class="btn text-16px filled-gradient gray" data-url="${'/product.html?course=' + course.id}">Переглянути</button>
            </div>`;

            document.getElementById('list-courses').insertAdjacentHTML('beforeend', markup);
        }
    });

    // Render Pagination block
    const paginationMarkup = `
        <button class="pagination-left"></button>
        <div class="pagination-page filled-gradient gray text-16px">Сторінка ${currentPage + '/' + numberPages}</div>
        <button class="pagination-right on"></button>`;
    
    document.querySelector('.list-courses__pagination').innerHTML = '';
    if (numberPages > 1) {
        document.querySelector('.list-courses__pagination').insertAdjacentHTML('beforeend', paginationMarkup);
        let pl = document.querySelector('.pagination-left');
        let pr = document.querySelector('.pagination-right');
        (currentPage > 1) ? pl.classList.add('on') : pl.classList.remove('on');
        (currentPage < numberPages) ? pr.classList.add('on') : pr.classList.remove('on');
    }
    document.querySelectorAll('#list-courses .course-photo').forEach(node => {
        node.addEventListener('mouseenter', 
        (e) => {
            let target = e.target.closest('.course-photo');
            console.log(target);
            let preview = target.getAttribute('data-preview');
            
            let videoMarkup = `
                <video id="player" width="960" height="540" class="video-js vjs-default-skin" controls muted autoplay pictureinpicture preload="auto">
                    <source src="${preview}" type="application/x-mpegURL">
                </video>`;
            
            player && player.player_ && player.dispose();
            target.insertAdjacentHTML('beforeend', videoMarkup);

            player = videojs('player'); //reinitialize player element
            console.log(player);

        });
        node.addEventListener('mouseleave', 
        (e) => {
            let target = e.target.closest('.course-photo');
            console.log(player);
            player && player.player_ && player.dispose();

        });
    });
}

function preloaderToggle(state) {
    switch(state) {
        case 'on': {
            document.querySelector('.preloader').classList.add('active');
            //document.querySelector('body').classList.add('loading');
            return true;
        }
        case 'off': {
            document.querySelector('.preloader').classList.remove('active');
            //document.querySelector('body').classList.remove('loading');
            return true;
        }
        default: return false;
    }
}
function getAllCoursesData() {
    const rawCoursesData = '{"courses":[{"id":"352be3c6-848b-4c19-9e7d-54fe68fef183","title":"Lack of Motivation & How to Overcome It","tags":["productivity"],"launchDate":"2023-03-06T16:50:06.000Z","status":"launched","description":"Reignite your inner drive by managing factors that dampen your motivation.","duration":521,"lessonsCount":2,"containsLockedLessons":true,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it","rating":3.5,"meta":{"slug":"lack-of-motivation-how-to-overcome-it","skills":["Aligning your goals with your motives","Overcoming decision paralysis","Reframing negative self-talk","Gaining clarity","Challenging yourself"],"courseVideoPreview":{"link":"https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8","duration":27,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview"}}},{"id":"3b77ceb6-fb43-4cf5-a25b-8fe9222a0714","title":"The Power of Self-Discipline: How to Stay on Track","tags":["productivity"],"launchDate":"2023-03-06T16:25:24.000Z","status":"launched","description":"Find the inner strength to overcome procrastination and reach your goals.","duration":509,"lessonsCount":2,"containsLockedLessons":true,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track","rating":3.5,"meta":{"slug":"the-power-of-self-discipline-how-to-stay-on-track","skills":["Increasing self-awareness","Personal accountability","Developing a routine","Improving self-control","Focusing on long-term goals"],"courseVideoPreview":{"link":"https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/preview/AppleHLS1/preview.m3u8","duration":19,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track/preview"}}},{"id":"f58ff842-2d2b-4f24-9a4b-c6f6e1fd866e","title":"Win Your Emotional Battle Against Procrastination","tags":["productivity"],"launchDate":"2023-03-06T16:13:29.000Z","status":"launched","description":"Learn to manage negative emotions that make you put things off.","duration":568,"lessonsCount":2,"containsLockedLessons":true,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/Win-your-emotional-battle-against-procrastination","rating":3.5,"meta":{"slug":"Win-your-emotional-battle-against-procrastination","skills":["Eliminating boredom","Overcoming the fear of failure","Dealing with uncertainty","Managing feelings of guilt","Recognizing your emotions"],"courseVideoPreview":{"link":"https://wisey.app/videos/Win-your-emotional-battle-against-procrastination/preview/AppleHLS1/preview.m3u8","duration":17,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/Win-your-emotional-battle-against-procrastination/preview"}}},{"id":"9c5d78a1-c393-4666-8de4-b9d10c424d30","title":"Goal-Setting 101: Become Productive, Not Busy","tags":["productivity"],"launchDate":"2023-02-20T13:19:00.000Z","status":"launched","description":"Achieve anything you want by defining goals that actually matter to you.","duration":566,"lessonsCount":2,"containsLockedLessons":true,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/goal-setting-101-become-productive-not-busy","rating":3.5,"meta":{"slug":"goal-setting-101-become-productive-not-busy","skills":["Define goals that matter to you"],"courseVideoPreview":{"link":"https://wisey.app/videos/goal-setting-101-become-productive-not-busy/preview/AppleHLS1/preview.m3u8","duration":17,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/goal-setting-101-become-productive-not-busy/preview"}}},{"id":"6d923b27-9980-41c1-bd0f-102772377b8d","title":"How to Stop Procrastinating","tags":["productivity"],"launchDate":"2023-02-12T13:04:20.000Z","status":"launched","description":"It only takes 10-15 minutes a day to eliminate procrastination once and for all","duration":4560,"lessonsCount":14,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/anti-procrastination-quiz","rating":3.5,"meta":{"slug":"anti-procrastination-quiz","skills":["Taking responsibility "],"courseVideoPreview":{"link":"https://wisey.app/videos/anti-procrastination-quiz/preview/AppleHLS1/preview.m3u8","duration":0,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/anti-procrastination-quiz/preview"}}},{"id":"b6f69a35-70f8-49fa-8da9-f05e1a75f6ef","title":"Think Creatively, Solve Problems Easily","tags":["productivity"],"launchDate":"2023-01-24T15:53:07.000Z","status":"launched","description":"Want to generate brilliant ideas on the spot? W’ell show you how to do it using creative techniques.","duration":1603,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/think-creatively-solve-problems-easily","rating":4,"meta":{"slug":"think-creatively-solve-problems-easily","skills":["Start generating brilliant ideas now!","Thinking outside the box","Generating unique ideas","Modifying the problem","Identifying the best solutions"],"courseVideoPreview":{"link":"https://wisey.app/videos/think-creatively-solve-problems-easily/preview/AppleHLS1/preview.m3u8","duration":31,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/think-creatively-solve-problems-easily/preview"}}},{"id":"d75b0a7d-dba8-44e1-9b66-25074f701d9f","title":"The Art of Logical Reasoning","tags":["productivity"],"launchDate":"2023-01-24T15:37:48.000Z","status":"launched","description":"Logic isn’t just about saying things that are right. It’s about making sense of our chaotic world and creating order where there is none.","duration":1577,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/the-art-of-logical-reasoning","rating":3.5,"meta":{"slug":"the-art-of-logical-reasoning","skills":["Learn how to make sense out of chaos","Building logical arguments","Inductive reasoning","Deductive reasoning","Creating hypotheses","Recognizing logical fallacies"],"courseVideoPreview":{"link":"https://wisey.app/videos/the-art-of-logical-reasoning/preview/AppleHLS1/preview.m3u8","duration":33,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/the-art-of-logical-reasoning/preview"}}},{"id":"59ba9bb7-2bd6-49db-afce-c09964125bc6","title":"Money Management for Financial Freedom","tags":["productivity"],"launchDate":"2023-01-24T14:46:43.000Z","status":"launched","description":"From spending to saving and earning — we’ll show you how to take proper care of your funds.","duration":1583,"lessonsCount":10,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/money-management-for-financial-freedom","rating":5,"meta":{"slug":"money-management-for-financial-freedom","skills":["Learn how to take care of your funds","Building a financial foundation","Budgeting","Personal spending control","Protecting your finances"],"courseVideoPreview":{"link":"https://wisey.app/videos/money-management-for-financial-freedom/preview/AppleHLS1/preview.m3u8","duration":0,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/money-management-for-financial-freedom/preview"}}},{"id":"cf21a172-5a09-460c-a02f-51bfc2314e79","title":"Memory training simulator","tags":["learning ability"],"launchDate":"2023-01-11T11:19:46.000Z","status":"launched","description":"Work out your memory to remember anything, from phone numbers to speeches.","duration":1140,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/memory-bootcamp","rating":4.2,"meta":{"slug":"memory-bootcamp","skills":["Self-assertion"],"courseVideoPreview":{"link":"https://wisey.app/videos/memory-bootcamp/preview/AppleHLS1/preview.m3u8","duration":123,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/memory-bootcamp/preview"}}},{"id":"58a1a586-51d1-4a74-a30b-bddd095af398","title":"Learn & Grow. Relationships","tags":["communication"],"launchDate":"2022-12-19T14:44:27.000Z","status":"launched","description":"Learn how to fix or improve your relationships with loved ones, friends, coworkers, and just anybody.","duration":4523,"lessonsCount":9,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/learn-and-grow-relationships","rating":5,"meta":{"slug":"learn-and-grow-relationships","skills":["improving relationships"],"courseVideoPreview":{"link":"https://wisey.app/videos/learn-and-grow-relationships/preview/AppleHLS1/preview.m3u8","duration":31,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/learn-and-grow-relationships/preview"}}},{"id":"c6854516-4bee-4425-9dce-019976a1ae23","title":"Learn & Grow. Self-Improvement","tags":["learning ability"],"launchDate":"2022-12-19T14:22:18.000Z","status":"launched","description":"How do we take proper care of our needs and wants to achieve fulfillment? Let’s find out!","duration":5742,"lessonsCount":12,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/learn-and-grow-self-improvement","rating":4.8,"meta":{"slug":"learn-and-grow-self-improvement","skills":["taking proper care of needs","taking proper care of wants"],"courseVideoPreview":{"link":"https://wisey.app/videos/learn-and-grow-self-improvement/preview/AppleHLS1/preview.m3u8","duration":40,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/learn-and-grow-self-improvement/preview"}}},{"id":"d1346a13-0872-4c89-b23b-ab163da0db1a","title":"Staying Focused in a Chaotic World","tags":["productivity"],"launchDate":"2022-12-12T13:10:39.000Z","status":"launched","description":"After this course, you’ll be able to aim your focus as easily as a laser pointer.","duration":1468,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/staying-focused-in-a-chaotic-world","rating":4.8,"meta":{"slug":"staying-focused-in-a-chaotic-world","skills":["Improving attention span ","Staying concentrated","Mindful multitasking ","Directing selective attention ","Switching activities"],"courseVideoPreview":{"link":"https://wisey.app/videos/staying-focused-in-a-chaotic-world/preview/AppleHLS1/preview.m3u8","duration":32,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/staying-focused-in-a-chaotic-world/preview"}}},{"id":"648f2414-a10d-4bd2-a28d-4d030dccd73c","title":"Negotiating for the Best Outcome","tags":["communication"],"launchDate":"2022-12-12T12:26:21.000Z","status":"launched","description":"Learn how to sway negotiations your way and avoid common pitfalls that can derail them.","duration":1566,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/negotiating-for-the-best-outcome","rating":3.5,"meta":{"slug":"negotiating-for-the-best-outcome","skills":["Reaching the most desirable solution","Drafting the best possible agreement","Finding alternatives","Communication in a crisis"],"courseVideoPreview":{"link":"https://wisey.app/videos/negotiating-for-the-best-outcome/preview/AppleHLS1/preview.m3u8","duration":43,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/negotiating-for-the-best-outcome/preview"}}},{"id":"a99646f9-718a-4687-842e-4994a8ca764b","title":"How to Manage Time Like a Pro","tags":["productivity"],"launchDate":"2022-11-28T04:38:40.000Z","status":"launched","description":"Understand the matter of time and learn how to manipulate it to accomplish more, more easily.","duration":1552,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/how-to-manage-a-time-like-a-pro","rating":4.7,"meta":{"slug":"how-to-manage-a-time-like-a-pro","skills":["Task management","Scheduling 100%","Prioritizing","Delegating"],"courseVideoPreview":{"link":"https://wisey.app/videos/how-to-manage-a-time-like-a-pro/preview/AppleHLS1/preview.m3u8","duration":27,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/how-to-manage-a-time-like-a-pro/preview"}}},{"id":"a31a7531-6bae-4592-a4d3-97a663f5091a","title":"The Secret to Speed Learning","tags":["learning ability"],"launchDate":"2022-10-28T09:28:20.000Z","status":"launched","description":"Find out how to acquire and retain precious knowledge that you can actually put to use in real life.","duration":1405,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/the-secret-to-speed-learning","rating":4.1,"meta":{"slug":"the-secret-to-speed-learning","skills":["Power law of practice","Rapid skill acquisition","Deeper comprehension","Retaining information","Knowledge context"],"courseVideoPreview":{"link":"https://wisey.app/videos/the-secret-to-speed-learning/preview/AppleHLS1/preview.m3u8","duration":32,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/the-secret-to-speed-learning/preview"}}},{"id":"19b1ff92-5a83-4192-9dba-97feb641b35d","title":"Negotiations for Life and Work","tags":["communication"],"launchDate":"2022-10-28T09:27:47.000Z","status":"launched","description":"Let us teach you the basics of negotiations to help you prepare for important talks.","duration":1766,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/negotiations-for-life-and-work","rating":4.7,"meta":{"slug":"negotiations-for-life-and-work","skills":["Conflict styles ","Distributive approach","Investigating interest","Finding issues","Setting the groung rules"],"courseVideoPreview":{"link":"https://wisey.app/videos/negotiations-for-life-and-work/preview/AppleHLS1/preview.m3u8","duration":35,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/negotiations-for-life-and-work/preview"}}},{"id":"5c9a0a38-b7c3-4149-a176-a50653548bc8","title":"Say No to Procrastination","tags":["productivity"],"launchDate":"2022-10-28T09:27:32.000Z","status":"launched","description":"Dealing with procrastination requires a complex approach, and we’ve got one just for you.","duration":1743,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/say-no-to-procrastination","rating":4.6,"meta":{"slug":"say-no-to-procrastination","skills":["Motivation formula","Managing priorities","Managing negative thingkin","Focusing on easy tasks","Developing self-awerness"],"courseVideoPreview":{"link":"https://wisey.app/videos/say-no-to-procrastination/preview/AppleHLS1/preview.m3u8","duration":32,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/say-no-to-procrastination/preview"}}},{"id":"ca34d358-fd6a-4aa5-a636-cd0d99e420fa","title":"How to Think Critically","tags":["productivity"],"launchDate":"2022-09-22T15:14:27.000Z","status":"launched","description":"Join us as we maneuver through the world of manipulations and fakes to discover the truth.","duration":1706,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/how-to-think-critically","rating":4.4,"meta":{"slug":"how-to-think-critically","skills":["Recognizing arguments","Indetyfying reasons","Recognizing the truth","Validating information","Eliminating stereotypes","Argument map"],"courseVideoPreview":{"link":"https://wisey.app/videos/how-to-think-critically/preview/AppleHLS1/preview.m3u8","duration":34,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/how-to-think-critically/preview"}}},{"id":"c3330608-21a5-4b37-b56c-df43637efb45","title":"Habit Hacking","tags":["productivity"],"launchDate":"2022-09-08T15:25:59.293Z","status":"launched","description":"Learn about the psychology of habit formation and discover effective ways to build any habit you want.","duration":1458,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/habit-hacking","rating":4.4,"meta":{"slug":"habit-hacking","skills":["Habit control","The habit loop ","Habit-motivation cycle ","Eliminating triggers","Sticking to a habit","Reinforcing positive habits"],"courseVideoPreview":{"link":"https://wisey.app/videos/habit-hacking/preview/AppleHLS1/preview.m3u8","duration":28,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/habit-hacking/preview"}}},{"id":"dd361e1f-9094-4103-81e1-bf4f4a0eb5f7","title":"A Road to Healthy Relationships","tags":["psychology"],"launchDate":"2022-09-08T14:43:08.801Z","status":"launched","description":"In this course, we’ll show you what healthy relationships can look like and how to build one yourself.","duration":1497,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/a-road-to-healthy-relationships","rating":4.7,"meta":{"slug":"a-road-to-healthy-relationships","skills":["Mutual respect","Ahcieving intimacy ","Building trust ","Managing conflicts","Open communication"],"courseVideoPreview":{"link":"https://wisey.app/videos/a-road-to-healthy-relationships/preview/AppleHLS1/preview.m3u8","duration":34,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/a-road-to-healthy-relationships/preview"}}},{"id":"b36ee0ce-6ddf-4fe3-bcd8-af6affc4e4f2","title":"Surviving Toxic People 101","tags":["psychology"],"launchDate":"2022-08-03T00:00:01.000Z","status":"launched","description":"We all know that one person who always oversteps the line. Let’s learn how to deal with them.","duration":1583,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/toxic-people","rating":4.3,"meta":{"slug":"toxic-people","skills":["Personal freedom ","Self-assertion","Taking responsibility ","Resisting manipulations","Managing passive-agression"],"courseVideoPreview":{"link":"https://wisey.app/videos/toxic-people/preview/AppleHLS1/preview.m3u8","duration":35,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/toxic-people/preview"}}},{"id":"d7a759c4-652b-414f-aec7-c8c6fafec442","title":"How to Make Rational Decisions","tags":["productivity"],"launchDate":"2022-08-03T00:00:01.000Z","status":"launched","description":"Let’s learn how to combat the 5 mistakes of decision-making and feel more confident in your own choices.","duration":1585,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/rational-decisions","rating":4.3,"meta":{"slug":"rational-decisions","skills":["Tackling self-doubt ","Managing risks ","Creating alternatives ","Taking action ","Letting go of others’ opinion","Knowing your priorities "],"courseVideoPreview":{"link":"https://wisey.app/videos/rational-decisions/preview/AppleHLS1/preview.m3u8","duration":27,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/rational-decisions/preview"}}},{"id":"8aff6759-960f-4b4b-a3f5-8960696da5a2","title":"Cognitive psychology: animated course","tags":["psychology"],"launchDate":"2022-06-13T12:54:43.538Z","status":"launched","description":"Beautifully animated short course on how your brain, attention and memory work.","duration":849,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/cognitive-animation","rating":3.5,"meta":{"slug":"cognitive-animation","fullCourseProductId":"a0e4d025-ecea-489d-a340-a3af959afa48","fullCourseProductFamily":"сognitive_psychology"}},{"id":"c01a4ebe-82aa-4ee2-994e-6337ed9c4079","title":"Cognitive psychology: hack your mind","tags":["psychology"],"launchDate":"2022-06-13T12:48:10.021Z","status":"launched","description":"Learn how your brain, attention, and memory work. Discover how your cognitive processes influence your mental state.","duration":848,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/cognitive-video","rating":4.8,"meta":{"slug":"cognitive-video","fullCourseProductId":"a0e4d025-ecea-489d-a340-a3af959afa48","fullCourseProductFamily":"сognitive_psychology"}},{"id":"97ea598b-728c-4ca6-bccd-ef9cd734a1b5","title":"Cognitive psychology: interactive quiz","tags":["psychology"],"launchDate":"2022-06-03T13:18:55.120Z","status":"launched","description":"Interactive experimental short course on how your brain, attention and memory work.","duration":1140,"lessonsCount":5,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/cognitive-simulator","rating":4.3,"meta":{"slug":"cognitive-simulator","fullCourseProductId":"a0e4d025-ecea-489d-a340-a3af959afa48","fullCourseProductFamily":"сognitive_psychology"}},{"id":"6cd0d6ac-4462-4154-bece-6590ad307b76","title":"Cognitive psychology: hack your mind","tags":["psychology"],"launchDate":"2022-05-05T00:00:01.000Z","status":"launched","description":"Learn how your brain, attention, and memory work. Discover how your cognitive processes influence your mental state.","duration":7505,"lessonsCount":10,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/cognitive-psychology","rating":4.3,"meta":{"slug":"cognitive-psychology","skills":["Personal freedom ","Self-assertion","Taking responsibility ","Resisting manipulations","Managing passive-agression"],"courseVideoPreview":{"link":"https://wisey.app/videos/cognitive-psychology/preview/AppleHLS1/preview.m3u8","duration":32,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/cognitive-psychology/preview"}}},{"id":"b44aaeca-1e02-471e-96c6-363f9d7e4f9f","title":"Win your life back from fears and anxiety","tags":["psychology"],"launchDate":"2022-04-11T15:10:01.000Z","status":"launched","description":"Learn how to deal with excessive anxiety and stress effectively. Get rid of intrusive thoughts and toxic beliefs.","duration":5934,"lessonsCount":10,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/win-your-life-back","rating":4.6,"meta":{"slug":"win-your-life-back","skills":["Reducing anxiety ","Fight or flight response ","Negative thinking patterns","Anchoring emotions","Managing self-behaviour"],"courseVideoPreview":{"link":"https://wisey.app/videos/win-your-life-back/preview/AppleHLS1/preview.m3u8","duration":34,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/win-your-life-back/preview"}}},{"id":"2f772101-986b-4119-8f7c-a629cf2ac9b5","title":"How to learn effectively","tags":["learning ability"],"launchDate":"2021-12-29T12:29:37.261Z","status":"launched","description":"Earn a higher chance to success, gaining more from any education.","duration":7530,"lessonsCount":10,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/how-to-learn","rating":4.2,"meta":{"slug":"how-to-learn","skills":["Memorization techniques","Balanced perfectionism ","Learning techniques","Education styles","Finding motivation"],"courseVideoPreview":{"link":"https://wisey.app/videos/how-to-learn/preview/AppleHLS1/preview.m3u8","duration":29,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/how-to-learn/preview"}}},{"id":"1cd306b8-99fe-487c-a683-98e1e9a7a5e7","title":"How to develop a stable mindset","tags":["psychology"],"launchDate":"2021-12-29T12:29:37.261Z","status":"launched","description":"Learn how to protect yourself from stress & find capabilities to thrive.","duration":17478,"lessonsCount":15,"containsLockedLessons":false,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/stable-mindset","rating":4.5,"meta":{"slug":"stable-mindset","skills":["Reducing anxiety ","Dealing with panic attacks","Defining inner coflict","Emotional resilence ","Finding balance"],"courseVideoPreview":{"link":"https://wisey.app/videos/stable-mindset/preview/AppleHLS1/preview.m3u8","duration":30,"previewImageLink":"https://wisey.app/assets/images/web/course-covers/stable-mindset/preview"}}}]}';
    const backupCoursesData = JSON.parse(rawCoursesData);
    return backupCoursesData.courses;
}