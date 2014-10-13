$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'skillz', 'd16174l-4r7z', 'prepress', 'contact'],
        sectionsColor: ['#F5F0F0', '#c41411', '#f9a825', '#D9FF56', '#43E88F', '#91E0FF'],
        slidesNavigation: true,
        css3: true,
        scrollingSpeed: 100,
        menu: '#menu',
        fixedElements: '#filldatgap, #menu',
        autoScrolling: true
        
    });
});
