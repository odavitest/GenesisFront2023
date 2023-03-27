import React from 'react';
import Preloader from '../component/preloader';
import Header from '../component/header';
import Footer from '../component/footer';
import CourseAdv from '../component/courseadv';
import emblemImage from '../images/emblem.png';
import axios from "axios";

function Root() {
    
    const [ preloaderActive, setPreloaderActive ] = React.useState(true);
    const [ allCoursesData, setAllCoursesData ] = React.useState(null);
    
    document.querySelector('body').classList.add('genesis');

    const tokenAPIUrl = 'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions';
    let allCoursesAPIUrl = '';
    let apiToken = '';
    let courseAPIUrl = '';
    //let allCoursesData = null;
    let courseData = null;
    let cardsPerPage = 10;
    let currentPage = 1;
    let numberPages = null; 
    
    React.useEffect( () => {
        console.log("Request for Token was sent!");
        axios.get(tokenAPIUrl, {timeout: 15000}).then((response) => {
            apiToken = response.data.token;
        
            // API call to get all courses
            allCoursesAPIUrl = `https://api.wisey.app/api/v1/core/preview-courses?token=${apiToken}`;
            console.log("Request for the list of courses was sent!");
            axios.get(allCoursesAPIUrl, {timeout: 20000}).then((response) => {
                //allCoursesData = response.data.courses;
                console.log("Courses received!");
                console.log("Courses: ", response.data.courses);
                setAllCoursesData(response.data.courses);
                // updateAdvCourse(allCoursesData);
                // updateCoursesList(allCoursesData);
                setPreloaderActive(false);
            }).catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
        
                    console.log('Data: Stupid API is off or very slow - Using local data');
                    // allCoursesData = getAllCoursesData();
                    //updateAdvCourse(allCoursesData);
                    //updateCoursesList(allCoursesData);
                setPreloaderActive(false); 
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })  
        }).catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
    
                console.log('Data: Stupid API is off or very slow - Using local data');
                //allCoursesData = getAllCoursesData();
                //updateAdvCourse(allCoursesData);
                //updateCoursesList(allCoursesData);
            setPreloaderActive(false); 
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
    }, []);

    if (!allCoursesData) return 'No data received!';

    return (
        <>
        
            <Preloader active = { preloaderActive } />
            
            <Header />

            <CourseAdv data = { allCoursesData } />
            
            <section className="slogan filled-gradient blue">
                <div className="container slogan__wrapper">
                    <img className="pet-photo-left" src="images/header-dog.svg" alt="profile photo" width="167" height="167" />    
                    <h2 className="container title-h2">Це вивчить, навіть, дитина</h2>
                    <img className="pet-photo-right" src="images/header-cat.svg" alt="profile photo" width="167" height="167" />
                </div>
            </section>
            
            <section className="list-courses">
                <div className="container list-courses__head-block">
                    <h2 className="title-h2">Обери свій курс</h2>
                    <div className="list-courses__head-controls">
                        <div className="icon-block">
                            <div className="icon-wrapper filled-gradient blue">
                                <img src="images/earth.svg" alt="All" />
                            </div>
                            <p>Усі</p>
                        </div>
                        <div className="icon-block">
                            <div className="icon-wrapper filled-gradient blue">
                                <img src="images/dolar.svg" alt="Paid" /> 
                            </div>
                            <p>Платні</p>
                        </div>
                        <div className="icon-block">
                            <div className="icon-wrapper filled-gradient blue">
                                <img src="images/remote.svg" alt="Free" />
                            </div>
                            <p>Безплатні</p>
                        </div>
                    </div>
                </div>
                <div id="list-courses" className="container list-courses__cards-block">       
                    
                    
                        <div className="list-courses__card">
                            <div>
                                <div className="upper-status card-wrapper">
                                    <div className="price text-orange text-16px">Безкоштовно</div>
                                    <div className="stars text-16px">3,5</div>
                                </div>
                                <div className="course-photo">
                                    <img src="images/tom.jpg" alt="preview" />
                                </div>
                                <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                                <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                                <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                                <div className="course-meta card-wrapper">
                                    <div className="lessons text-16px">2 уроки</div>
                                    <div className="days text-16px">27 днів</div>
                                </div>
                            </div>
                            <button className="btn text-16px filled-gradient gray">Переглянути</button>
                        </div>
                        <div className="list-courses__card">
                            <div>
                                <div className="upper-status card-wrapper">
                                    <div className="price text-gradient blue text-16px">USD 15</div>
                                    <div className="stars text-16px">4,5</div>
                                </div>
                                <div className="course-photo">
                                    <img src="images/tom.jpg" alt="preview" />
                                </div>
                                <div className="course-avail card-wrapper text-orange text-12px">СТАРТ 30 БЕРЕЗНЯ</div>
                                <h4 className="course__title card-wrapper text-20px text-gradient blue">Lack of Motivation & How to Overcome It</h4>
                                <p className="course-abstract card-wrapper text-16px">Reignite your inner drive by managing factors that dampen your motivation.</p>
                                <div className="course-meta card-wrapper">
                                    <div className="lessons text-16px">7 уроків</div>
                                    <div className="days text-16px">500 годин</div>
                                </div>
                            </div>
                            <button className="btn text-16px filled-gradient orange">Реєстрація</button>
                        </div>
                        <div className="list-courses__card">
                            <div>
                                <div className="upper-status card-wrapper">
                                    <div className="price text-orange text-16px">Безкоштовно</div>
                                    <div className="stars text-16px">3,5</div>
                                </div>
                                <div className="course-photo">
                                    <img src="images/tom.jpg" alt="preview" />
                                </div>
                                <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                                <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                                <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                                <div className="course-meta card-wrapper">
                                    <div className="lessons text-16px">2 уроки</div>
                                    <div className="days text-16px">27 днів</div>
                                </div>
                            </div>
                            <button className="btn text-16px filled-gradient gray">Переглянути</button>
                        </div>
                        <div className="list-courses__card">
                            <div>
                                <div className="upper-status card-wrapper">
                                    <div className="price text-orange text-16px">Безкоштовно</div>
                                    <div className="stars text-16px">3,5</div>
                                </div>
                                <div className="course-photo">
                                    <img src="images/tom.jpg" alt="preview" />
                                </div>
                                <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                                <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                                <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                                <div className="course-meta card-wrapper">
                                    <div className="lessons text-16px">2 уроки</div>
                                    <div className="days text-16px">27 днів</div>
                                </div>
                            </div>
                            <button className="btn text-16px filled-gradient gray">Переглянути</button>
                        </div>
                        <div className="list-courses__card">
                            <div>
                                <div className="upper-status card-wrapper">
                                    <div className="price text-orange text-16px">Безкоштовно</div>
                                    <div className="stars text-16px">3,5</div>
                                </div>
                                <div className="course-photo">
                                    <img src="images/tom.jpg" alt="preview" />
                                </div>
                                <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                                <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                                <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                                <div className="course-meta card-wrapper">
                                    <div className="lessons text-16px">2 уроки</div>
                                    <div className="days text-16px">27 днів</div>
                                </div>
                            </div>
                            <button className="btn text-16px filled-gradient gray">Переглянути</button>
                        </div>
                        <div className="list-courses__card">
                            <div>
                                <div className="upper-status card-wrapper">
                                    <div className="price text-orange text-16px">Безкоштовно</div>
                                    <div className="stars text-16px">3,5</div>
                                </div>
                                <div className="course-photo">
                                    <img src="images/tom.jpg" alt="preview" />
                                </div>
                                <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                                <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                                <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                                <div className="course-meta card-wrapper">
                                    <div className="lessons text-16px">2 уроки</div>
                                    <div className="days text-16px">27 днів</div>
                                </div>
                            </div>
                            <button className="btn text-16px filled-gradient gray">Переглянути</button>
                        </div>
                        <div className="list-courses__card">
                            <div>
                                <div className="upper-status card-wrapper">
                                    <div className="price text-orange text-16px">Безкоштовно</div>
                                    <div className="stars text-16px">3,5</div>
                                </div>
                                <div className="course-photo">
                                    <img src="images/tom.jpg" alt="preview" />
                                </div>
                                <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                                <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                                <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                                <div className="course-meta card-wrapper">
                                    <div className="lessons text-16px">2 уроки</div>
                                    <div className="days text-16px">27 днів</div>
                                </div>
                            </div>
                            <button className="btn text-16px filled-gradient gray">Переглянути</button>
                        </div>
                        <div className="list-courses__card">
                            <div>
                                <div className="upper-status card-wrapper">
                                    <div className="price text-orange text-16px">Безкоштовно</div>
                                    <div className="stars text-16px">3,5</div>
                                </div>
                                <div className="course-photo">
                                    <img src="images/tom.jpg" alt="preview" />
                                </div>
                                <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                                <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                                <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                                <div className="course-meta card-wrapper">
                                    <div className="lessons text-16px">2 уроки</div>
                                    <div className="days text-16px">27 днів</div>
                                </div>
                            </div>
                            <button className="btn text-16px filled-gradient gray">Переглянути</button>
                        </div>
                        <div className="list-courses__card">
                            <div>
                                <div className="upper-status card-wrapper">
                                    <div className="price text-orange text-16px">Безкоштовно</div>
                                    <div className="stars text-16px">3,5</div>
                                </div>
                                <div className="course-photo">
                                    <img src="images/tom.jpg" alt="preview" />
                                </div>
                                <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                                <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                                <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                                <div className="course-meta card-wrapper">
                                    <div className="lessons text-16px">2 уроки</div>
                                    <div className="days text-16px">27 днів</div>
                                </div>
                            </div>
                            <button className="btn text-16px filled-gradient gray">Переглянути</button>
                        </div>
                        <div className="list-courses__card">
                            <div>
                                <div className="upper-status card-wrapper">
                                    <div className="price text-orange text-16px">Безкоштовно</div>
                                    <div className="stars text-16px">3,5</div>
                                </div>
                                <div className="course-photo">
                                    <img src="images/tom.jpg" alt="preview" />
                                </div>
                                <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                                <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                                <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                                <div className="course-meta card-wrapper">
                                    <div className="lessons text-16px">2 уроки</div>
                                    <div className="days text-16px">27 днів</div>
                                </div>
                            </div>
                            <button className="btn text-16px filled-gradient gray">Переглянути</button>
                        </div>
                    

                </div>
                <div className="container list-courses__pagination">
                    <button className="pagination-left"></button>
                    <div className="pagination-page filled-gradient gray text-16px">Сторінка 1/4</div>
                    <button className="pagination-right on"></button>
                </div>
            </section>
            
            <Footer />
        
        </>
  );
}

export default Root;
