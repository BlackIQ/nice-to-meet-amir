$(document).ready(function () {
    const ls = window.localStorage;

    if (ls.getItem('theme') === 'light') {
        $('.main').addClass('light');
        $('.navbar').addClass('navbar-light');
        $('.btn-submit').addClass('btn-dark');
    } else {
        $('.main').addClass('dark');
        $('.navbar').addClass('navbar-dark');
        $('.btn-submit').addClass('btn-light');
    }
});