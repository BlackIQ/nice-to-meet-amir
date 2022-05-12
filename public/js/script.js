$(document).ready(() => {
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

    $('.adjust').click(() => {
        if (ls.getItem('theme') === 'light') {
            ls.setItem('theme', 'dark');

            $('.main').removeClass('light');
            $('.navbar').removeClass('navbar-light');
            $('.btn-submit').removeClass('btn-dark');

            $('.main').addClass('dark');
            $('.navbar').addClass('navbar-dark');
            $('.btn-submit').addClass('btn-light');
        } else {
            ls.setItem('theme', 'light');

            $('.main').removeClass('dark');
            $('.navbar').removeClass('navbar-dark');
            $('.btn-submit').removeClass('btn-light');

            $('.main').addClass('light');
            $('.navbar').addClass('navbar-light');
            $('.btn-submit').addClass('btn-dark');
        }
    });
});