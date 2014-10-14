$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'skillz', 'd16174l-4r7z', 'prepress', 'contact'],
        sectionsColor: ['#fafafa', '#c41411', '#ef6c00', '#aeea00', '#1de9b6', '#0277bd'],
        slidesNavigation: true,
        css3: true,
        scrollingSpeed: 100,
        menu: '#menu',
        fixedElements: '#filldatgap, #menu',
        autoScrolling: true
        
    });
});
