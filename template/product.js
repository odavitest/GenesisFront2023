// Initialization
console.log("Start");
let currentUrl = new URL(location.href);
let courseID = currentUrl.searchParams.get('course');
courseID = (courseID) ? courseID : 'f58ff842-2d2b-4f24-9a4b-c6f6e1fd866e'; // '3b77ceb6-fb43-4cf5-a25b-8fe9222a0714';
console.log("Current course ID is " + courseID);

let coursePhoto = document.querySelector('.active-lesson-card .course-photo');
var player = videojs('player');

//coursePhoto.addEventListener('mouseenter', (e) => startVideoPreview());
//coursePhoto.addEventListener('mouseleave', (e) => stopVideoPreview());
document.getElementById('lessons-container').addEventListener('click', 
    (e) => {
        let target = e.target.closest('.lesson-card');
        target && !target.classList.contains('blocked') && switchLesson(target.getAttribute('data-index'));
    });


let activityInfoObj = [];

//Check localStorage for previous activity
let activityInfo = window.localStorage.getItem('babys-academy-courses');
if (!activityInfo) {
    console.log("No previous activities");
    activityInfoObj = [{"id": courseID, "activeLesson": 1}];
    window.localStorage.setItem('babys-academy-courses', JSON.stringify(activityInfoObj));
} else {
    console.log("Checking courses");
    activityInfoObj = JSON.parse(activityInfo);
    if (!activityInfoObj.find(course => course.id === courseID)) {
        console.log("New course!");
        activityInfoObj.push({"id": courseID, "activeLesson": 1});
        window.localStorage.setItem('babys-academy-courses', JSON.stringify(activityInfoObj));
    } else {
        console.log("Old course!");
    }
}
console.log(activityInfoObj);

// Get an API key
let tokenAPIUrl = 'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions';
let apiToken = '';
let allCoursesAPIUrl = '';
let courseAPIUrl = '';
let allCoursesData = null;
let courseData = null;

console.log("Request for Token was sent!");
preloaderToggle('on');
axios.get(tokenAPIUrl).then((response) => {
    apiToken = response.data.token;

    // API call to get all courses
    // allCoursesAPIUrl = `https://api.wisey.app/api/v1/core/preview-courses?token=${apiToken}`;
    // axios.get(allCoursesAPIUrl).then((response) => {
    //     allCoursesData = response.data;
    //     console.log(allCoursesData);
    // });
    
    // API call to get specific course
    
    courseAPIUrl = `https://api.wisey.app/api/v1/core/preview-courses/${courseID}?token=${apiToken}`;
    console.log("Request for course was sent!");
    axios.get(courseAPIUrl).then((response) => {
        courseData = response.data;
        updateDetailedPage(courseData);
        preloaderToggle('off');
    }).catch(error => {
        console.log('Error = ' + error.code);
    });
});

function updateDetailedPage(data) {
    document.getElementById('course-title').innerText = data.title;
    document.getElementById('course-descr').innerText = data.description;
    document.getElementById('rating').innerText = data.rating;
    document.getElementById('course-image').src = data.previewImageLink + '/cover.webp';
    let launchDate = new Date(data.launchDate)
        .toLocaleDateString('uk', 
            { 
                weekday: "short",
                year: "numeric",
                month: "2-digit",
                day: "numeric",
                minute: "2-digit",
                hour: "2-digit"
            });
    document.getElementById('launch-date').innerText = (data.status === 'launched') ? 'Доступно з ' + launchDate : 'Стартуємо ' + launchDate;
    document.getElementById('duration').innerText = data.duration + " годин навчання, практики";
    document.getElementById('lessons').innerText = data.lessons.length + " уроків";
    document.getElementById('skills').innerHTML = '';
    data.meta.skills.forEach(skill => {
        const markup = `<li class="features">${skill}</li>`;
        document.getElementById('skills').insertAdjacentHTML('beforeend', markup);
    });
    document.getElementById('lessons-container').innerHTML = '';
    data.lessons.sort((lesson, prev) => lesson.order - prev.order ).forEach((lesson, index) => {
        const markup = 
        `<div class="lesson-card ${lesson.status === 'locked' ? 'blocked' : (activityInfoObj.find(course => course.id === courseID).activeLesson === index + 1) ? 'active' : '' }" data-index = "${index + 1}">
            <div class="lesson__circle-block">
                <div class="lesson__day">
                    <p class="text-14px text-gradient orange">Урок</p>
                    <p class="lesson__number text-gradient orange">${index + 1}</p>
                </div>
            </div>
            <div class="lesson__status text-16px">${lesson.status === 'locked' ? 'Статус: Заблоковано' : 'Статус виконання: 10%'}</div>
            <div class="lesson__info text-16px">${lesson.title}</div>
        </div>`;

        document.getElementById('lessons-container').insertAdjacentHTML('beforeend', markup);
        
    });
    // Render active lesson card
    let activeLesson = activityInfoObj.find(course => course.id === courseID).activeLesson;
    document.getElementById('active-lesson-photo').src = data.lessons[activeLesson-1].previewImageLink + '/lesson-' + data.lessons[activeLesson-1].order + ".webp";
    let videoMarkup = `
            <video id="player" width="1920" height="1080" poster="${data.lessons[activeLesson-1].previewImageLink + '/lesson-' + data.lessons[activeLesson-1].order + '.webp'}" class="video-js vjs-default-skin" controls preload="auto">
            <source src="${data.lessons[activeLesson-1].link}" type="application/x-mpegURL">
        </video>`;
    
    player && player.dispose();
    coursePhoto.insertAdjacentHTML('beforeend', videoMarkup);
    player = videojs('player'); //reinitialize player element
    document.getElementById('active-lesson-number').innerText = activeLesson;
    document.getElementById('active-lesson-descr').innerText = data.lessons[activeLesson-1].title;
}

function switchLesson(lesson) {
    console.log('We are switching to lesson ' + lesson);
    activityInfoObj.find(course => course.id === courseID).activeLesson = +lesson;
    console.log(activityInfoObj);
    updateDetailedPage(courseData);
}

function startVideoPreview() {
    let videoElement = document.createElement('video');
    videoElement.setAttribute("controls", "true");
    videoElement.setAttribute("class", "video-js vjs-default-skin");
    videoElement.setAttribute("width","600");
    videoElement.setAttribute( "height", "300");
    //videoElement.setAttribute( "src", "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8");
    coursePhoto.appendChild(videoElement);
       
    // let iframeElement = document.createElement('iframe');
    // iframeElement.setAttribute("width", "560");
    // iframeElement.setAttribute("height", "315");
    // iframeElement.setAttribute("title", "YouTube video player");
    // iframeElement.setAttribute("frameborder", "0");
    // iframeElement.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    // iframeElement.setAttribute("allowfullscreen", "true");
    // iframeElement.setAttribute("autoplay", "true");
    // iframeElement.setAttribute("loop", "true");
    // iframeElement.setAttribute( "src", "https://www.youtube.com/embed/giXco2jaZ_4?controls=0&start=47&autoplay=1&loop=1&mute=1");
    // //coursePhoto.appendChild(videoElement);
    // coursePhoto.appendChild(iframeElement);
}
function stopVideoPreview() {
    let videoElement = document.querySelector('.active-lesson-card .course-photo video');
    coursePhoto.removeChild(videoElement);
    //let iframeElement = document.querySelector('.active-lesson-card .course-photo iframe');
    //coursePhoto.removeChild(iframeElement);
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