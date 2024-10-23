// window scroll (滚动)
$(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

// Document Ready
$(document).ready(function () {

    // Typing animation
    new Typed('#type-it', {
        strings: ['a student.', '22 years old.', 'a Designer.', 'a Fronted Developer.'],
        typeSpeed: 100,
        loop: true    /* 循环 */
    });

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 2,
        margin: 30, /*两个item之间的间隔 */
        // nav: true,
        autoplay: true,
        autoplayTimeout: 3000,  /* 2秒切换 */
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            }
        }
    });

    $.scrollIt({
        // upKey: 38,             
        // downKey: 40,           
        easing: 'linear',
        // scrollTime: 600,       
        // activeClass: 'active', 
        // onPageChange: null,   
        topOffset: 0
    });

    //点击滚动到about部分
    $('.scrollToAbout').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000, function () {
            // 显示关于部分，并添加动画类
            $('#about').removeClass('hidden').addClass('animate__animated animate__slideInUp');
        });


    });

    //监听滚动事件以控制显示状态
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        var aboutSectionTop = $('#about').offset().top;
        var windowHeight = $(window).height();
        var aboutSectionBottom = aboutSectionTop + $('#about').outerHeight();
        if (scrollTop + windowHeight >= aboutSectionTop && scrollTop <= aboutSectionBottom) {
            $('#about').removeClass('hidden').addClass('animate__animated animate__slideInUp');
        } else {
            $('#about').addClass('hidden').removeClass('animate__animated animate__slideInUp');
        }
    });

    // Toggle按钮展出收缩卡片
    // document.getElementById('toggleButton').addEventListener('click', function () {
    //     document.querySelector('.hobby-container').classList.toggle('active');
    // });

    // 介绍卡片滑动窗口
    var slide = $("#slide");
    var x = 0; // #slide的元素的垂直位置（top），初始值为0
    $('#up').on('click', function () {
        if (x < 0) {
            x += 325;
            slide.css("top", x + "px");
        }
    });
    $('#down').on('click', function () {
        if (x > -1500) {
            x -= 325
            slide.css("top", x + "px");
        }
    });


    // const watchVideoButton = $('#watchVideoButton'); // 获取按钮
    const hometownVideo = $('.hometown-video'); // 获取视频窗口
    const videoElement = $('.hometown-video video')[0]; // 获取视频元素
    // const closeButton = $('.hometown-video .close'); // 获取关闭按钮

    // 确保视频在初始加载时隐藏
    hometownVideo.hide();

    // 修改二：页面加载时重置视频窗口状态，确保隐藏
    // hometownVideo.removeClass('show');
    // videoElement.pause();
    // videoElement.currentTime = 0;

    // 视频按钮点击事件
    $('#watchVideoButton').on('click', function (e) {
        e.preventDefault(); // 阻止链接默认行为
        hometownVideo.fadeIn(300).addClass('show'); // 渐入显示
        // hometownVideo.addClass('show'); // 修改二：显示视频窗口
        videoElement.play(); // 播放视频
    });

    // 关闭按钮点击事件
    $('.hometown-video .close').on('click', function () {
        hometownVideo.removeClass('show'); // 隐藏视频窗口
        videoElement.pause(); // 暂停视频
        videoElement.currentTime = 0; // 重置时间
    });

    // 修改一：点击按钮显示视频窗口
    // watchVideoButton.on('click', function (e) {
    //     e.preventDefault(); // 阻止默认跳转行为
    //     hometownVideo.addClass('show'); // 显示视频窗口
    //     videoElement.play(); // 播放视频
    // });

    // 修改一：点击关闭按钮关闭视频窗口
    // closeButton.on('click', function () {
    //     hometownVideo.removeClass('show'); // 隐藏视频窗口
    //     videoElement.pause(); // 暂停视频
    //     videoElement.currentTime = 0; // 重置视频时间
    // });

});