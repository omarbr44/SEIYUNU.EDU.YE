
        // Instance the tour
        const tg = new tourguide.TourGuideClient({
            exitOnClickOutside: false
        })
        tg.setOptions({dialogMaxWidth: 500,nextLabel:'التالي',prevLabel:'السابق',finishLabel:'اغلاق'})

        function showQuesBar() {
        let ques = document.querySelector('#ques-bar')
        if(ques.classList.contains('left-0')) {
            ques.classList.add('-left-120')
            ques.classList.remove('left-0')
        }
        else {
            ques.classList.add('left-0')
            ques.classList.remove('-left-120')
        }
        }
        function showQuesBarComponent2() {
        let ques = document.querySelector('#ques-bar-component-2')
        if(ques.classList.contains('left-0')) {
            ques.classList.add('-left-120')
            ques.classList.remove('left-0')
        }
        else {
            ques.classList.add('left-0')
            ques.classList.remove('-left-120')
        }
        }
        function showQuesBarComponent3() {
        let ques = document.querySelector('#ques-bar-component-3')
        if(ques.classList.contains('left-0')) {
            ques.classList.add('-left-120')
            ques.classList.remove('left-0')
        }
        else {
            ques.classList.add('left-0')
            ques.classList.remove('-left-120')
        }
        }
        function showQuesBarComponent4() {
        let ques = document.querySelector('#ques-bar-component-4')
        if(ques.classList.contains('left-0')) {
            ques.classList.add('-left-120')
            ques.classList.remove('left-0')
        }
        else {
            ques.classList.add('left-0')
            ques.classList.remove('-left-120')
        }
        }
        function toggleNav() {
        let navBig = document.querySelector('#nav-big')
        let navSmall = document.querySelector('#nav-small')
        let pageContent = document.querySelector('#page-content-for-mini')
        let navToggleIcon = document.querySelector('#nav-toggle-icon')
        if(navSmall.classList.contains('-right-120')) {
            navBig.classList.add('-right-120')
            navBig.classList.remove('right-0')
            navSmall.classList.remove('-right-120')
            if(window.innerWidth > 770)
                navSmall.classList.add('right-0')
            else
                navSmall.classList.add('right-77')
            pageContent.classList.add('mr-74')
            navToggleIcon.classList.remove('rotate-180')
        }
        else {
            navSmall.classList.add('-right-120')
            if(window.innerWidth > 770)
                navSmall.classList.remove('right-0')
            else
                navSmall.classList.remove('right-77')
            navBig.classList.remove('-right-120')
            navBig.classList.add('right-0')
            pageContent.classList.remove('mr-74')
            navToggleIcon.classList.add('rotate-180')
        }
        }


    jQuery('.nav-link').click( function(e) {
    jQuery('.nav-collapse').collapse('hide');
});