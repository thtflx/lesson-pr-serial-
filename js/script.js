window.addEventListener('DOMContentLoaded', () => {



    // const tabsParent = document.querySelector('.tabheader__items'), // tablani otasi
    //     tabs = document.querySelectorAll('.tabheader__item'), // kategoriya nomlari
    //     tabsContent = document.querySelectorAll('.tabcontent'); // tablani ichidagi kontent

    // har bitta tab content ni o'zini berkitadigan 
    // va qaysi kategoriya active bo'lsa, uni ham 
    // o'chirib tashlaydigan funksiya.
    // function hideTabContent() {
    //     tabsContent.forEach((item) => {
    //         item.classList.add('hide');
    //         item.classList.remove('show');
    //     });

    //     tabs.forEach((item) => {
    //         item.classList.remove('tabheader__item_active');
    //     });
    // }


    // function showTabContent(index = 0) {
    //     tabsContent[index].classList.add('show');
    //     tabsContent[index].classList.remove('hide');
    //     tabs[index].classList.add('tabheader__item_active');
    // }

    // hideTabContent();
    // showTabContent();


    // Bera uju delegirovanie ni qollayobmiz.
    // Kodni asosiy uje kallasi shera.
    // tabsParent.addEventListener('click', (event) => {
    //     const target = event.target;
    //     if (target && target.classList.contains('tabheader__item')) {
    //         tabs.forEach((item, index) => {
    //             if (target == item) {
    //                 // console.log(index); // bosilganni tartib raqamini ko'rsatadi
    //                 hideTabContent();
    //                 showTabContent(index);
    //             }
    //         });
    //     }
    // });





    // 1st try.
    // const tabsParent = document.querySelector('.tabheader');
    // const tabItems = document.querySelectorAll('.tabheader__item');
    // const tabsContent = document.querySelectorAll('.tabcontent');



    // function hideTabContent() {
    //     tabsContent.forEach((item) => {
    //         item.classList.add('hide');
    //         item.classList.remove('show');
    //     });

    //     tabItems.forEach((item) => {
    //         item.classList.remove('tabheader__item_active');
    //     });
    // }


    // function showTabContent(i = 0) {
    //     tabsContent[i].classList.add('show');
    //     tabsContent[i].classList.remove('hide');
    //     tabItems[i].classList.add('tabheader__item_active');
    // }

    // hideTabContent();
    // showTabContent();



    // tabsParent.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('tabheader__item')) {
    //         tabItems.forEach((item, i) => {
    //             if (target === item) {
    //                 hideTabContent();
    //                 showTabContent(i);
    //             }
    //         });
    //     }
    // });





    // 2nd try.
    // const tabsWrapper = document.querySelector('.tabheader'),
    //     tabItems = document.querySelectorAll('.tabheader__item'),
    //     tabsContent = document.querySelectorAll('.tabcontent');


    // function hideContent() {
    //     tabsContent.forEach((item) => {
    //         item.classList.add('hide');
    //         item.classList.remove('show');
    //     });

    //     tabItems.forEach((item) => {
    //         item.classList.remove('tabheader__item_active');
    //     });

    // } 


    // function showContent(index = 0) {
    //     tabsContent[index].classList.add('show');
    //     tabsContent[index].classList.remove('hide');
    //     tabItems[index].classList.add('tabheader__item_active');
    // }

    // hideContent();
    // showContent();


    // tabsWrapper.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('tabheader__item')) {
    //         tabItems.forEach((item, index) => {
    //             if (target === item) {
    //                 hideContent();
    //                 showContent(index);
    //             }
    //         });
    //     }
    // });





    // 3rd try.
    // cathegory.
    // const tabsParent = document.querySelector('.tabheader');
    // const tabItems = document.querySelectorAll('.tabheader__item');

    // // content.
    // const tabContents = document.querySelectorAll('.tabcontent');


    // function hideContent() {
    //     tabContents.forEach((item) => {
    //         item.classList.add('hide');
    //         item.classList.remove('show');
    //     });

    //     tabItems.forEach((item) => {
    //         item.classList.remove('tabheader__item_active');
    //     });
    // }


    // function showContent(id = 0) {
    //     tabItems[id].classList.add('tabheader__item_active');
    //     tabContents[id].classList.add('show');
    //     tabContents[id].classList.remove('hide');
    // }

    // hideContent();
    // showContent();


    // tabsParent.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('tabheader__item')) {
    //         tabItems.forEach((item, id) => {
    //             if (item == target) {
    //                 hideContent();
    //                 showContent(id);
    //             }
    //         });
    //     }
    // });




    // 4th try.
    // const tabHeader = document.querySelector('.tabheader'),
    //     tabItems = document.querySelectorAll('.tabheader__item'),
    //     tabContents = document.querySelectorAll('.tabcontent');


    // // birinchi kontentni yoqatadigan funksiya yozamiz.
    // function hideContent() {
    //     tabContents.forEach((item) => {
    //         item.classList.add('hide');
    //         item.classList.remove('show');
    //     });

    //     tabItems.forEach((item) => {
    //         item.classList.remove('tabheader__item_active');
    //     });
    // }

    // hideContent();

    // // ikkinchi uni aniq qaysi birinidur ko'rsatadigan funksiya yozamiz.
    // function showContent(i = 0) {
    //     tabContents[i].classList.add('show');
    //     tabContents[i].classList.remove('hide');
    //     tabItems[i].classList.add('tabheader__item_active');
    // }

    // showContent();


    // // umumiy hammasini ishlaydigan qilamiz endi.
    // tabHeader.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('tabheader__item')) {
    //         tabItems.forEach((item, i) => {
    //             if (item == target) {
    //                 hideContent();
    //                 showContent(i);
    //             }
    //         });
    //     }
    // });


    // 5th try.
    const wrapperTab = document.querySelector('.tabheader');
    const tabItems = document.querySelectorAll('.tabheader__item');
    const tabContents = document.querySelectorAll('.tabcontent');


    function hideContent() {
        tabContents.forEach((content) => {
            content.classList.add('hide');
            content.classList.remove('show');
        });

        tabItems.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
    }

    hideContent();



    function showConent(i = 0) {
        tabContents[i].classList.add('show');
        tabContents[i].classList.remove('hide');
        tabItems[i].classList.add('tabheader__item_active');
    }

    showConent();


    wrapperTab.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('tabheader__item')) {
            tabItems.forEach((item, i) => {
                if (item == event.target) {
                    hideContent();
                    showConent(i);
                }
            });
        }

    });



    // LOADER.
    // const loader = document.querySelector('.loader');

    // // bu loader, ya'ni paperman 2 sekunddan keyin o'chadi.
    // setTimeout(() => {
    //     // loader.style.opacity = '0';
    //     loader.classList.add('opacity'); // yoki bunay

    //     // bu setTimeOut ni aslida qo'shmasa ham bo'ladi, lekin
    //     // bu chtobi playnorok o'tishi uchun.
    //     setTimeout(() => {
    //         // loader.style.display = 'none';
    //         loader.classList.add('display') // yoki bunay
    //     }, 500);
    // }, 3000);


    // 1st try.
    // const load = document.querySelector('.loader');

    // function loadFunc() {
    //     setTimeout(() => {
    //         load.classList.add('opacity');

    //     }, 2000);
    // }

    // loadFunc();


    // 2nd try.
    const loader = document.querySelector('.loader');

    function setLoader() {
        setTimeout(() => {

            loader.classList.add('opacity');

            setTimeout(() => {
                // loader.style.display = 'none'; // yoki bu
                loader.classList.add('display'); // yoki bu
            }, 500);
        }, 3000);
    }

    setLoader();


    // 3rd try.
    // const loader = document.querySelector('.loader');

    // function loadLoader() {
    //     setTimeout(() => {
    //         // loader.style.opacity = '0';
    //         loader.classList.add('opacity');


    //         setTimeout(() => {
    //             // loader.style.display = 'none';
    //             loader.classList.add('display');
    //         }, 500);
    //     }, 3000);
    // }

    // loadLoader();







    // Timer.
    // const deadline = '2023-05-20';

    // // 1st part.
    // function getTimeRemaining(endtime) {
    //     const timer = Date.parse(endtime) - Date.parse(new Date()); // orqaga qarab ketayotgan vaqtni ko'rsatadi.

    //     const days = Math.floor(timer / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
    //     const minutes = Math.floor((timer / 1000 / 60) % 60);
    //     const seconds = Math.floor((timer / 1000) % 60);

    //     return { timer, days, hours, minutes, seconds }
    // }


    // // 2nd part.
    // function setClock(selector, endtime) {
    //     const timer = document.querySelector(selector);
    //     const days = timer.querySelector('#days');
    //     const hours = timer.querySelector('#hours');
    //     const minutes = timer.querySelector('#minutes');
    //     const seconds = timer.querySelector('#seconds');
    //     const timeInterval = setInterval(updateClock, 1000);

    //     updateClock();

    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);

    //         days.innerHTML = t.days;
    //         hours.innerHTML = t.hours;
    //         minutes.innerHTML = t.minutes;
    //         seconds.innerHTML = t.seconds;

    //         if (t.timer <= 0) {
    //             clearInterval(timeInterval)
    //         }
    //     }
    // }


    // // 3rd part.
    // setClock('.timer', deadline);



    // 1st try.
    // const deadline = '2023-05-20'; // bu 8-dekabr degani

    // // // Date.parse nimaligini tushuntirish uchun.
    // // // console.log(Date.parse('2023-12-08')) // 1701993600000
    // // // krch shu narsani millisekundga o'tqazib beradi.

    // // // new Date() ni tushuntirish uchun .
    // // // console.log(new Date()); // Thu Dec 08 2022 17:19:25 GMT+0300 (Moscow Standard Time)
    // // // bera uje yangi ya'ni xozirgi vaqtni ko'rsatadi.


    // // // anabu endtime esa 2023-yilni 8-dekabridan xozirgi vaqtni ayirobman degani

    // // // qolgan vaqtni aniqlash degani.
    // function getTimeRemaining(endtime) {
    //     const timer = Date.parse(endtime) - Date.parse(new Date()), // timer - bu oraliq vaqt degani
    //         days = Math.floor(timer / (1000 * 60 * 60 * 24)), // bu 2023-yildan to shu kungacha necha kun qolganini ko'rsatadi
    //         hours = Math.floor((timer / (1000 * 60 * 60)) % 24), // bu yerda necha soat qolganini aniqlayobmiz
    //         minutes = Math.floor((timer / 1000 / 60) % 60), // bu esa minutni aniqlayobmiz
    //         seconds = Math.floor((timer / 1000) % 60); // sekundni aniqlayobmiz

    //     return { timer, days, hours, minutes, seconds }
    // }

    // // selector - bu ona div. HTML dagi har bittd spanlarni onasi. Bu universal funksiya.
    // function setClock(selector, endtime) {
    //     // endi biza HTML dagi span larni olamiz endi.
    //     const timer = document.querySelector(selector), // ona divni o'zi bu
    //         days = timer.querySelector('#days'), //kunlarni
    //         hours = timer.querySelector('#hours'), // soatlarni
    //         minutes = timer.querySelector('#minutes'), // minutlarni
    //         seconds = timer.querySelector('#seconds'), // sekundlarni olobmiz
    //         timeInterval = setInterval(updateClock, 1000); // har bir sekunnda updateClock ishlaydi

    //     updateClock();

    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);

    //         days.innerHTML = t.days;
    //         hours.innerHTML = t.hours;
    //         minutes.innerHTML = t.minutes;
    //         seconds.innerHTML = t.seconds;

    //         if (t.timer <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }

    // setClock('.timer', deadline);



    // 2nd try.
    // Timer.
    // const deadline = '2023-05-20';

    // // I - budilnik.
    // function getTimeRemaining(endtime) {
    //     const timer = Date.parse(endtime) - Date.parse(new Date()); // orqaga qarab ketayotgan vaqtni ko'rsatadi. // timer,Date.parse

    //     const days = Math.floor(timer / 86400000); // all. kun,soat,minut,sekund - Math.floor
    //     const hours = Math.floor((timer / 3600000) % 24);
    //     const minutes = Math.floor((timer / 16.68) % 60);
    //     const seconds = Math.floor((timer / 1000) % 60);

    //     return { timer, days, hours, minutes, seconds } // return
    // }


    // // II - grain timer.
    // function setClock(selector, endtime) {
    //     const timer = document.querySelector(selector); // all. taymerni roditel qilamiz/ all ni topamiz/ interval o'rnatamiz
    //     const days = timer.querySelector('#days');
    //     const hours = timer.querySelector('#hours');
    //     const minutes = timer.querySelector('#minutes');
    //     const seconds = timer.querySelector('#seconds');
    //     const timeInterval = setInterval(updateClock, 1000);

    //     updateClock();

    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);

    //         days.innerHTML = t.days;
    //         hours.innerHTML = t.hours;
    //         minutes.innerHTML = t.minutes;
    //         seconds.innerHTML = t.seconds;

    //         if (t.timer <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }


    // // III - chaqir hammani.
    // setClock('.timer', deadline);



    // 3rd try.
    // const deadline = '2023-05-20';

    // function getTimeRemaining(endtime) {
    //     const timer = Date.parse(endtime) - Date.parse(new Date());

    //     const days = Math.floor(timer / 86400000);
    //     const hours = Math.floor((timer / 3600000) % 24);
    //     const minutes = Math.floor((timer / 16.68) % 60);
    //     const seconds = Math.floor((timer / 1000) % 60);

    //     return { timer, days, hours, minutes, seconds };
    // }


    // function setClock(selector, endtime) {
    //     const timer = document.querySelector(selector);

    //     const days = timer.querySelector('#days');
    //     const hours = timer.querySelector('#hours');
    //     const minutes = timer.querySelector('#minutes');
    //     const seconds = timer.querySelector('#seconds');
    //     const timeInterval = setInterval(updateClock, 1000);

    //     updateClock();

    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);

    //         days.innerHTML = t.days;
    //         hours.innerHTML = t.hours;
    //         minutes.innerHTML = t.minutes;
    //         seconds.innerHTML = t.seconds;

    //         if (t.timer <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }

    // setClock('.timer', deadline);



    // 4th try.
    // const deadline = '2022-12-31'; // new year

    // function getTimeRemaining(endtime) {
    //     const timer = Date.parse(endtime) - Date.parse(new Date());

    //     const days = Math.floor(timer / 86400000);
    //     const hours = Math.floor((timer / 3600000) % 24);
    //     const minutes = Math.floor((timer / 16.68) % 24);
    //     const seconds = Math.floor((timer / 1000) % 24);

    //     return { timer, days, hours, minutes, seconds };
    // }



    // function setClock(selector, endtime) {
    //     const timer = document.querySelector(selector);

    //     const days = timer.querySelector('#days');
    //     const hours = timer.querySelector('#hours');
    //     const minutes = timer.querySelector('#minutes');
    //     const seconds = timer.querySelector('#seconds');
    //     const timeInterval = setInterval(updateClock, 1000);

    //     updateClock();

    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);

    //         days.innerHTML = t.days;
    //         hours.innerHTML = t.hours;
    //         minutes.innerHTML = t.minutes;
    //         seconds.innerHTML = t.seconds;

    //         if (t.timer <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }

    // setClock('.timer', deadline);


    // // 5th try.
    // const deadline = '2023-05-02';

    // function getTimeRemaining(endtime) {
    //     const timer = Date.parse(endtime) - Date.parse(new Date());

    //     const days = Math.floor(timer / 86400000);
    //     const hours = Math.floor((timer / 3600000) % 24);
    //     const minutes = Math.floor((timer / 16.68) % 60);
    //     const seconds = Math.floor((timer / 1000) % 60);

    //     return { timer, days, hours, minutes, seconds };
    // }

    // function setClock(selector, endtime) {
    //     const timer = document.querySelector(selector);

    //     const days = timer.querySelector('#days');
    //     const hours = timer.querySelector('#hours');
    //     const minutes = timer.querySelector('#minutes');
    //     const seconds = timer.querySelector('#seconds');
    //     const timeInterval = setInterval(updateClock, 1000);

    //     updateClock();

    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);

    //         days.innerHTML = t.days;
    //         hours.innerHTML = t.hours;
    //         minutes.innerHTML = t.minutes;
    //         seconds.innerHTML = t.seconds;

    //         if (t.timer <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }


    // setClock('.timer', deadline);

    // my try:
    const deadline = '2024-12-31';

    function getTimeRemaining(endtime) {
        const timer = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(endtime / 36400000);
        const hours = Math.floor((endtime / 3600000) % 24);
        const minutes = Math.floor((endtime / 16.68) % 60);
        const seconds = Math.floor((endtime / 1000) % 60);

        return { timer, days, hours, minutes, seconds };
    }


    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);






    // REAL TIME CLOCK (addition).

    // const daysEl = document.querySelector('#days')
    // const hourEL = document.querySelector('#hours');
    // const minutesEl = document.querySelector('#minutes');
    // const secondsEl = document.querySelector('#seconds');


    // function updatedTime() {
    //     let days, hour, seconds, minutes;

    //     days = new Date().getDay()
    //     hour = new Date().getHours()
    //     seconds = new Date().getSeconds()
    //     minutes = new Date().getMinutes()


    //     daysEl.innerHTML = days
    //     hourEL.innerHTML = hour
    //     secondsEl.innerHTML = seconds
    //     minutesEl.innerHTML = minutes


    //     setTimeout(() => {
    //         updatedTime()
    //     }, 1000)
    // }

    // updatedTime()


    // 1st try.
    // const elDays = document.querySelector('#days'),
    //     elHours = document.querySelector('#hours'),
    //     elMinutes = document.querySelector('#minutes'),
    //     elSeconds = document.querySelector('#seconds');

    // function updTime() {
    //     let days, hours, minutes, seconds;

    //     days = new Date().getDay();
    //     hours = new Date().getHours();
    //     minutes = new Date().getMinutes();
    //     seconds = new Date().getSeconds();

    //     elDays.innerHTML = days;
    //     elHours.innerHTML = hours;
    //     elMinutes.innerHTML = minutes;
    //     elSeconds.innerHTML = seconds;

    //     setTimeout(() => {
    //         updTime();
    //     }, 1000);
    // }

    // updTime();


    // MODAL.
    const modalBtns = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }


    modalBtns.forEach((btn) => {
        btn.addEventListener('click', openModal);
    });


    modal.addEventListener('click', (e) => {
        const target = e.target;

        if (target == modal || target.getAttribute('data-close') == '') {
            closeModal();
        }
    });


    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // 5 sekunddan keyin och modalni degani.
    setTimeout(() => {
        openModal();
    }, 3000);


    // // not mine:
    // const modalTrigger = document.querySelectorAll('[data-modal]'),
    //     modal = document.querySelector('.modal'),
    //     modalCloseBtn = document.querySelector('.modal__close')

    // function closeModal() {
    //     modal.classList.add('hide')
    //     modal.classList.remove('show')
    //     document.body.style.overflow = ''
    // }

    // function openModal() {
    //     modal.classList.add('show')
    //     modal.classList.remove('hide')
    //     document.body.style.overflow = 'hidden'
    //     clearInterval(modalTimerId)
    // }

    // modalTrigger.forEach((item) => {
    //     item.addEventListener('click', openModal)
    // })

    // modalCloseBtn.addEventListener('click', closeModal)

    // modal.addEventListener('click', (e) => {
    //     if (e.target == modal) {
    //         closeModal()
    //     }
    // })

    // document.addEventListener('keydown', (e) => {
    //     if (e.code === 'Escape' && modal.classList.contains('show')) {
    //         closeModal()
    //     }
    // })

    // const modalTimerId = setTimeout(openModal, 50000)

    // function showModalByScroll() {
    //     if (
    //         window.pageYOffset + document.documentElement.clientHeight >=
    //         document.documentElement.scrollHeight
    //     ) {
    //         openModal()
    //         window.removeEventListener('scroll', showModalByScroll)
    //     }
    // }

    // window.addEventListener('scroll', showModalByScroll)




    // 45-dars. Optimize.
    console.log(window.pageYOffset + document.documentElement.clientHeight); // saytni oxirigacha qancha masofa borligini chiqarib beradi

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // bu kod esa, bir marta ochadi faqat degani modalni oxiriga scroll qilgan payti
        }
    }


    window.addEventListener('scroll', showModalByScroll);






    // 50-dars. Loyiha. Class.
    // class MenuCard {
    //     constructor(src, alt, title, descr, price, parentSelector) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //         this.parent = document.querySelector(parentSelector); 
    //         // for TRANSFER $ to UZS.
    //         this.transfer = 11300;
    //         this.changeToUZS(); // constructor ishlab ketgan payti, bu changeToUZS ham ishlasin deymiz.
    //     }

    //     // hozir birinchi $ ni so'm ga o'tkazib beradigan qilobmiz.
    //     changeToUZS() {
    //         this.price = this.price * this.transfer;
    //     }

    //     render() {
    //         const element = document.createElement('div');
    //         element.innerHTML = `
    //         <div class="menu__item">
    //             <img src=${this.src} alt=${this.alt} />
    //             <h3 class="menu__item-subtitle">${this.title}</h3>
    //             <div class="menu__item-descr">
    //                 ${this.descr}
    //             </div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Price:</div>
    //                 <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
    //             </div>
    //         </div>
    //         `;

    //         this.parent.append(element);
    //     }
    // }


    // // bizada 2 xil yo'l bor edi.
    // // 1-si:
    // // const card1 = new MenuCard();
    // // card1.render(); // qilib berishimiz ham mumkin.


    // // lekin 2-yo'ldan ketayveramiz.
    // new MenuCard(
    //     "img/tabs/1.png",
    //     "vegy",
    //     `Plan "Usual"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     10,
    //     `.menu .container`
    // ).render();

    // new MenuCard(
    //     "img/tabs/2.jpg",
    //     "elite",
    //     `Plan "Premium"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     15,
    //     `.menu .container`
    // ).render();

    // new MenuCard(
    //     "img/tabs/3.jpg",
    //     "post",
    //     `Plan "VIP"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     20,
    //     `.menu .container`
    // ).render();


    // 1st try.
    // class MenuCard {
    //     constructor(src, alt, title, descr, price, parentSelector) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //         this.parent = document.querySelector(parentSelector);
    //         this.som = 11303;
    //         this.transfer();
    //     }

    //     // $ to UZS.
    //     transfer() {
    //         this.price = this.price * this.som;
    //     }

    //     pass() {
    //         const element = document.createElement('div');
    //         element.innerHTML = `
    //         <div class="menu__item">
    //             <img src=${this.src} alt=${this.alt} />
    //             <h3 class="menu__item-subtitle">${this.title}</h3>
    //             <div class="menu__item-descr">
    //                 ${this.descr}
    //             </div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Price:</div>
    //                 <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
    //             </div>        
    //         </div>
    //         `;

    //         this.parent.append(element);
    //     }
    // }


    // new MenuCard(
    //     "img/tabs/1.png",
    //     "vegy",
    //     `Plan "Usual"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     10,
    //     `.menu .container`
    // ).pass();

    // new MenuCard(
    //     "img/tabs/2.jpg",
    //     "elite",
    //     `Plan "Premium"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     15,
    //     `.menu .container`
    // ).pass();

    // new MenuCard(
    //     "img/tabs/3.jpg",
    //     "post",
    //     `Plan "VIP"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     20,
    //     `.menu .container`
    // ).pass();



    // 2nd try.
    // class MenuCard {
    //     constructor(src, alt, title, descr, price, parentSelector) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //         this.parent = document.querySelector(parentSelector);
    //         this.som = 11303;
    //         this.transfer();
    //     }

    //     transfer() {
    //         this.price = this.price * this.som;
    //     }

    //     pass() {
    //         const element = document.createElement('div');
    //         element.innerHTML = `
    //         <div class="menu__item">
    //             <img src=${this.src} alt=${this.alt} />
    //             <h3 class="menu__item-subtitle">${this.title}</h3>
    //             <div class="menu__item-descr">
    //                 ${this.descr}
    //             </div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Price:</div>
    //                 <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
    //             </div>                
    //         </div>
    //         `

    //         this.parent.append(element);
    //     }
    // }


    // new MenuCard(
    //     "img/tabs/1.png",
    //     "vegy",
    //     `Plan "Usual"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     10,
    //     `.menu .container`
    // ).pass();

    // new MenuCard(
    //     "img/tabs/2.jpg",
    //     "elite",
    //     `Plan "Premium"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     15,
    //     `.menu .container`
    // ).pass();

    // new MenuCard(
    //     "img/tabs/3.jpg",
    //     "post",
    //     `Plan "VIP"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     20,
    //     `.menu .container`
    // ).pass();





    // 51-dars. Loyiha. Rest operator.



    // class MenuCard {
    //     constructor(src, alt, title, descr, price, parentSelector, ...classes) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //         this.classes = classes;
    //         this.parent = document.querySelector(parentSelector);
    //         this.som = 11303;
    //         this.transfer();
    //     }

    //     transfer() {
    //         this.price = this.price * this.som;
    //     }

    //     pass() {
    //         const element = document.createElement('div');

    //         if (this.classes.length === 0) {
    //             this.element = 'menu__item';
    //             element.classList.add(this.element);
    //         } else {
    //             this.classes.forEach((classname) => {
    //                 element.classList.add(classname);
    //             });
    //         }

    //         this.classes.forEach((classname) => {
    //             element.classList.add(classname);
    //         });


    //         element.innerHTML = `
    //             <img src=${this.src} alt=${this.alt} />
    //             <h3 class="menu__item-subtitle">${this.title}</h3>
    //             <div class="menu__item-descr">
    //                 ${this.descr}
    //             </div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Price:</div>
    //                 <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
    //             </div>                
    //         `;

    //         this.parent.append(element);
    //     }
    // }


    // new MenuCard(
    //     "img/tabs/1.png",
    //     "vegy",
    //     `Plan "Usual"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     10,
    //     `.menu .container`,
    //     'menu__item'
    // ).pass();

    // new MenuCard(
    //     "img/tabs/2.jpg",
    //     "elite",
    //     `Plan "Premium"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     15,
    //     `.menu .container`,
    //     'menu__item'
    // ).pass();

    // new MenuCard(
    //     "img/tabs/3.jpg",
    //     "post",
    //     `Plan "VIP"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     20,
    //     `.menu .container`,
    //     'menu__item'
    // ).pass();


    // try.
    // class MenuCard {
    //     constructor(src, alt, title, descr, price, parentSelector, ...classes) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //         this.classes = classes;
    //         this.parent = document.querySelector(parentSelector);
    //         this.som = 11500;
    //         this.transfer();
    //     }

    //     transfer() {
    //         this.price = this.price * this.som;
    //     }

    //     pass() {
    //         const element = document.createElement('div');

    //         if (this.classes.length === 0) {
    //             this.element = 'menu__item';
    //             element.classList.add(this.element);
    //         } else {
    //             this.classes.forEach((classname) => {
    //                 element.classList.add(classname);
    //             });
    //         }

    //         this.classes.forEach((classname) => {
    //             element.classList.add(classname);
    //         });

    //         element.innerHTML = `
    //             <img src=${this.src} alt=${this.alt} />
    //             <h3 class="menu__item-subtitle">${this.title}</h3>
    //             <div class="menu__item-descr">${this.descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Price:</div>
    //                 <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
    //             </div>  
    //         `;

    //         this.parent.append(element);
    //     }
    // }


    // new MenuCard(
    //     `img/tabs/1.png`,
    //     `vegy`,
    //     `Plan "Usual"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     10,
    //     `.menu .container`,
    //     'menu__item'
    // ).pass();

    // new MenuCard(
    //     "img/tabs/2.jpg",
    //     "elite",
    //     `Plan "Premium"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     15,
    //     `.menu .container`,
    //     'menu__item'
    // ).pass();

    // new MenuCard(
    //     "img/tabs/3.jpg",
    //     "post",
    //     `Plan "VIP"`,
    //     `
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
    //     `,
    //     20,
    //     `.menu .container`,
    //     'menu__item'
    // ).pass();


    // try.
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.som = 11500;
            this.transfer();
        }

        transfer() {
            this.price = this.price * this.som;
        }

        pass() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach((classname) => {
                    classname.classList.add(classname);
                });
            }

            this.classes.forEach((classname) => {
                classname.classList.add(classname);
            });

            element.innerHTML = `
                <img src="${this.src}" alt="${this.alt}" />
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Price:</div>
                    <div class="menu__item-total"><span>${this.price}</span> month</div>
                </div>
            `;

            this.parent.append(element);
        }
    }


    new MenuCard(
        `img/tabs/1.png`,
        `vegy`,
        `Plan "Usual"`,
        `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
        `,
        10,
        `.menu .container`,
        'menu__item'
    ).pass();

    new MenuCard(
        "img/tabs/2.jpg",
        "elite",
        `Plan "Premium"`,
        `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
        `,
        15,
        `.menu .container`,
        'menu__item'
    ).pass();

    new MenuCard(
        "img/tabs/3.jpg",
        "post",
        `Plan "VIP"`,
        `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
        `,
        20,
        `.menu .container`,
        'menu__item'
    ).pass();






    // 56-dars. Loyiha Ma'lumotlarni yuborish.
    // FORM.
    // const forms = document.querySelectorAll('form');

    // forms.forEach((form) => {
    //     postData(form);
    // });

    // const msg = {
    //     loading: `img/spinner.svg`,
    //     succes: `Thanks for submitting our form`,
    //     failure: `Somethign went wrong`
    // }


    // function postData(form) {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault(); // brauzer odatiy ishini qilmasligi uchun prvntdflt ni beramiz.

    //         const statusMessage = document.createElement('img');
    //         statusMessage.src = msg.loading;
    //         statusMessage.style.cssText = `
    //             display: block;
    //             margin: 0 auto;
    //         `
    //         form.insertAdjacentElement('afterend',statusMessage);

    //         const request = new XMLHttpRequest;
    //         request.open('POST', 'server.php');

    //         request.setRequestHeader('Content-Type', 'application/json');

    //         const obj = {}
    //         const formData = new FormData(form);

    //         formData.forEach((val, key) => {
    //             obj[key] = val;
    //         });

    //         const json = JSON.stringify(obj);

    //         request.send(json);

    //         request.addEventListener('load', () => {
    //             if (request.status === 200) {
    //                 console.log(request.response);
    //                 showThanksModal(msg.succes);

    //                 // step.
    //                 form.reset();
    //                 setTimeout(() => {
    //                     statusMessage.remove();
    //                 }, 2000);
    //             } else {
    //                 showThanksModal(msg.failure);
    //             }
    //         })
    //     });
    // }


    // step. 60-darsdan keyingi o'zagrishlar.
    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
        postData(form);
    });

    const msg = {
        loading: `img/spinner.svg`,
        succes: `Thanks for submitting our form`,
        failure: `Somethign went wrong`
    }

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // brauzer odatiy ishini qilmasligi uchun prvntdflt ni beramiz.

            const statusMessage = document.createElement('img');
            statusMessage.src = msg.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `
        });
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);

        const obj = {}
        formData.forEach((val, key) => {
            obj[key] = val;
        });

        fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
            .then((data) => data.text())
            .then((data) => {
                console.log(data);
                showThanksModal(msg.succes);
                form.reset();
                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(msg.failure);
            })
            .finally(() => {
                form.reset();
            });
    }





    // 57-dars. Dynamic styling.
    function showThanksModal(message) {
        const prevModalDialogue = document.querySelector('.modal__dialog');

        prevModalDialogue.classList.add('hide');
        openModal()

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>    
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialogue.classList.add('show');
            prevModalDialogue.classList.remove('hide');
            closeModal();
        }, 4000);
    }





    // 60-dars. Loyiha. Fetch API.
    // bu aslida XAMMP ni zamena qilib turuvchisi
    // Fetch API - XMLHttpRequest dan ko'ra ancha qulayroq.

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'aziz' })
        })
        .then(response => response.json())
        .then(json => console.log(json));

    // output:
    // { name: 'aziz', id: 101 }

    // mytry.
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ name: 'aziz' })
    //     })
    //     .then(response => response.json())
    //     .then(json => console.log(json));

    // mytry.
    // fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ name: 'aziz' })
    //     })
    //     .then(response => response.json())
    //     .then(json => console.log(json));



    // 61-dars. Map, filter, reduce.

});