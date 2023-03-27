import styled from "styled-components";
import { Link } from "react-router-dom";

function CourseAdv({ data }) {

    console.log("Data: ", data);
    const numberCourses = data.length;
    console.log(`We've got ${numberCourses} courses`);
    
    // Find random course for advertisment section
    const advCourseIndex = Math.floor(Math.random()*(numberCourses + 1));
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
    
    /*const showProduct = () => {

    } */
   
    return (
        <section className="container course-adv">
            <div id="adv" className="course-adv__left">
                <h4 className="course-adv__left-date text-gradient orange">
                    {(advCourse.status === 'launched') ? 'Доступно з ' + launchDate : 'Старт ' + launchDate}
                </h4>
                <h2 className="title-h2">Безкоштовний курс</h2>
                <div className="course-adv__right">
                    <div className="course-rating">
                        <div id="rating" className="stars text-16px">{advCourse.rating}</div>
                    </div>
                    <img id="course-image" className="profile-photo" src={advCourse.previewImageLink + '/cover.webp'} alt="profile photo" width="634" height="647" />
                </div>
                <h1 className="course-adv__left-title title-h1 text-gradient blue">{advCourse.title}</h1>
                <p className="text-22px text-italic">{advCourse.description}</p>
                <ul className="course-adv__left-features">
                    <li className="features">{advCourse.duration + ' годин навчання, практики'}</li>
                    <li className="features">{advCourse.lessonsCount + ' уроків'}</li>
                </ul>
                <Link to={'/product/' + advCourse.id}><button className="btn filled-gradient orange text-20px" data-url={'/product/' + advCourse.id}>Переглянути</button></Link >
            </div>
        </section>
    )
}

export default CourseAdv;
