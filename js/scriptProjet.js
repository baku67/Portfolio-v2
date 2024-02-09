

window.onload = function() {

    // Détection mobile
    var mobileDetection;
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
      mobileDetection = true ;
    } else {
      mobileDetection = false ;
    }
    // Fin
    console.log("Mobile detection JS: " + mobileDetection);



    if(!mobileDetection) {

        // Observer Slide1:
        const observerSlide1 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    document.getElementById('projectContainer1').classList.add('fadeInSlide');

                    // document.getElementById('iframe1').classList.add('iframeRotate');

                    setTimeout(function() {
                        document.getElementById("projectContainer1").style.opacity = "1";
                        document.getElementById("projectContainer1").classList.remove("fadeInSlide");

                        // document.getElementById('iframe1').style.opacity = "1";
                        // document.getElementById('iframe1').style.transform = "perspective(1220px) rotateY(0deg) translateX(35px) scale(0.65);";
                        // document.getElementById('iframe1').classList.remove('iframeRotate');
                    }, 1001)

                }
                else {

                    document.getElementById('iframe1').style.opacity = "0";
                    document.getElementById('projectContainer1').style.opacity = "0";

                }
            })
        })
        observerSlide1.observe(document.querySelector('#projectContainer1'));



                // Observer Slide2:
                const observerSlide2 = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
        
                            document.getElementById('projectContainer2').classList.add('fadeInSlide');
        
                            // document.getElementById('iframe2').classList.add('iframeRotate');
        
                            setTimeout(function() {
                                document.getElementById("projectContainer2").style.opacity = "1";
                                document.getElementById("projectContainer2").classList.remove("fadeInSlide");
        
                                // document.getElementById('iframe2').style.opacity = "1";
                                // document.getElementById('iframe1').style.transform = "perspective(1220px) rotateY(0deg) translateX(35px) scale(0.65);";
                                // document.getElementById('iframe2').classList.remove('iframeRotate');
                            }, 1001)
        
                        }
                        else {
        
                            document.getElementById('iframe2').style.opacity = "0";
                            document.getElementById('projectContainer2').style.opacity = "0";
        
                        }
                    })
                })
                observerSlide2.observe(document.querySelector('#projectContainer2'));


    }




    // **********  MOBILE: Click outside nav burger si actif = closeNav
    var sidenav = document.getElementById("mySidenav");
    var openBtn = document.getElementById("openBtn");
    var openBtn2 = document.getElementById("openBtn2");
    var closeBtn = document.getElementById("closeBtn");

    openBtn.onclick = openNav;
    openBtn2.onclick = openNav;
    closeBtn.onclick = closeNav;

    document.getElementById("pageContainerProjet").addEventListener('click', function(e){   

        console.log('clic nav burger');
        if (document.getElementById('mySidenav').contains(e.target)){
            // click dans nav burger
        } else {
            // click en dehors nav burger
            if (sidenav.classList.contains("active")) {
                console.log('clic outer nav burger');
                closeNav();
            }
        }
    });

    function openNav() {
        sidenav.classList.add("active");
        openBtn.style.display = "none";
        openBtn2.style.display = "none";

        // Blur() derrière ram sur mobile:
        // document.getElementById("pageContainerProjet").style.filter = "blur(2px)";
        document.getElementById("pageContainerProjet").style.opacity = "0.5";
        document.getElementById("pageTitleDiv").style.opacity = "0.5";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        sidenav.classList.remove("active");
        openBtn.style.display = "block";
        openBtn2.style.display = "block";

        // Blur() derrière ram sur mobile:
        // document.getElementById("pageContainerProjet").style.filter = "blur(0px)";
        document.getElementById("pageContainerProjet").style.opacity = "1";
        document.getElementById("pageTitleDiv").style.opacity = "1";
    }
    

    // (DESKTOP) On scrool page : sideNav (désactivé car page pas haute)
    // if(!mobileDetection) {
    //     // Observer navBarre:
    //     const observerContactButton = new IntersectionObserver(entries => {
    //         console.log('test observer pc nav')
    //         // Loop over the entries
    //         entries.forEach(entry => {
    //         // If the element is visible
    //         if (!entry.isIntersecting) {
    //             document.getElementById("sideNavDesktop").classList.add("fadeInDesktopNav")
    //         }
    //         else {
    //             document.getElementById("sideNavDesktop").classList.remove("fadeInDesktopNav");
    //         }
    //         })
    //     })
    //     observerContactButton.observe(document.querySelector('#menuLigneCv'));
    // }



    // *** LIGHTMODE: State des element avec data-theme (selon darkMode localStorage)
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    if (localStorage.getItem('darkMode') == "false") {

        themeToggle.checked = true;

        // body.setAttribute('data-theme', 'light');

    }

    // LIGHTMODE: changement du theme (toggle)
    themeToggle.addEventListener('change', function () {

        if (themeToggle.checked) {

            localStorage.setItem('darkMode', "false");

            // body.setAttribute('data-theme', 'light');
        
        } else {

            localStorage.setItem('darkMode', "true");

            // body.setAttribute('data-theme', 'dark');

        }
    });



    // Smiley titre portfolio
    document.getElementById('titleH1').addEventListener("mouseenter", function() {
        document.getElementById('smilePath').style.stroke = "var(--secondaryColor)";
        document.getElementById('smilePath').classList.toggle("smilePathResp");
        document.getElementById('smileSvgContainer').classList.toggle("smileSvgContainerResp");

        [...document.getElementsByClassName('titleO')].forEach((elem) => {
            elem.style.color = "var(--secondaryColor)";
        });
    })
    document.getElementById('titleH1').addEventListener("mouseleave", function() {
        document.getElementById('smilePath').style.stroke = "#ef3b2d";
        document.getElementById('smilePath').classList.toggle("smilePathResp");
        document.getElementById('smileSvgContainer').classList.toggle("smileSvgContainerResp");

        [...document.getElementsByClassName('titleO')].forEach((elem) => {
            elem.style.color = "#ef3b2d";
        });
    })





    // Fixed menuBörgir lors scroll (mobile), equivalent à la sideNav PC
    if(mobileDetection) {
        
        const observerHeaderBorger = new IntersectionObserver(entries => {

            entries.forEach(entry => {

            if (entry.isIntersecting) {
                document.getElementById("openBtn2").style.display = "none";
            }
            else {
                document.getElementById("openBtn2").style.display = "block";
            }
            })
        })
        observerHeaderBorger.observe(document.querySelector('#headerProjets'));
    }






    // Observer checkbox <Compétences/> CV
    // const observerCompetences = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             var skillsPathes = document.querySelectorAll('.arrowsSvg path');
    //             skillsPathes.forEach(element => {
    //                 var lengthRec2 = element.getTotalLength();
    //                 element.style.transition = element.style.WebkitTransition = 'none';
    //                 element.style.strokeDasharray = lengthRec2 + ' ' + lengthRec2;
    //                 element.style.strokeDashoffset = lengthRec2;
    //                 element.getBoundingClientRect();
    //                 element.style.transition = element.style.WebkitTransition =
    //                 'stroke-dashoffset 1s 0s ease-in-out';
    //                 element.style.strokeDashoffset = '0';    
    //             });
    //         }
    //     })
    // })
    // observerCompetences.observe(document.querySelector('#description'));




    // Observer de Slide que sur PC (ça ram deja assez sur mobile)



    
}





