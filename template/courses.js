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
axios.get(tokenAPIUrl).then((response) => {
    apiToken = response.data.token;

    // API call to get all courses
    allCoursesAPIUrl = `https://api.wisey.app/api/v1/core/preview-courses?token=${apiToken}`;
    console.log("Request for the list of courses was sent!");
    axios.get(allCoursesAPIUrl).then((response) => {
        allCoursesData = response.data.courses;
        console.log("Courses received!");
        updateAdvCourse(allCoursesData);
        updateCoursesList(allCoursesData);
        preloaderToggle('off');
    }).catch(error => {
        console.log('Error = ' + error.code);
    });
    
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
                <h1 class="course-adv__left-title title-h1 text-gradient blue">${advCourse.title}</h1>
                <p class="text-22px text-italic">${advCourse.description}</p>
                <ul class="course-adv__left-features">
                    <li class="features">${advCourse.duration + ' годин навчання, практики'}</li>
                    <li class="features">${advCourse.lessonsCount + ' уроків'}</li>
                </ul>
                <button class="btn filled-gradient orange text-20px" data-url="${'/product.html?course=' + advCourse.id}">Переглянути</button>`;
    document.getElementById('adv').innerHTML = '';
    document.getElementById('adv').insertAdjacentHTML('beforeend', advSectionMarkup);

    document.getElementById('rating').innerText = advCourse.rating;
    document.getElementById('course-image').src = advCourse.previewImageLink + '/cover.webp';
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
                    <div class="course-photo" data-preview="${course.meta.courseVideoPreview.link}">
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
            return true;
        }
        case 'off': {
            document.querySelector('.preloader').classList.remove('active');
            return true;
        }
        default: return false;
    }
}