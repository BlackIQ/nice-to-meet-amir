$(document).ready(() => {
    const ls = window.localStorage;

    if (ls.getItem('theme') === 'light') {
        $('.main').addClass('light');
        $('.navbar').addClass('navbar-light');
        $('.btn-submit').addClass('btn-dark');

        $('.card').addClass('border-dark');
        $('.card-header').addClass('border-dark');
        $('.card-footer').addClass('border-dark');
    } else {
        $('.main').addClass('dark');
        $('.navbar').addClass('navbar-dark');
        $('.btn-submit').addClass('btn-light');

        $('.card').addClass('border-light');
        $('.card-header').addClass('border-light');
        $('.card-footer').addClass('border-light');
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

            $('.card').addClass('border-light');
            $('.card-header').addClass('border-light');
            $('.card-footer').addClass('border-light');

            $('.card').removeClass('border-dark');
            $('.card-header').removeClass('border-dark');
            $('.card-footer').removeClass('border-dark');
        } else {
            ls.setItem('theme', 'light');

            $('.main').removeClass('dark');
            $('.navbar').removeClass('navbar-dark');
            $('.btn-submit').removeClass('btn-light');

            $('.main').addClass('light');
            $('.navbar').addClass('navbar-light');
            $('.btn-submit').addClass('btn-dark');

            $('.card').addClass('border-dark');
            $('.card-header').addClass('border-dark');
            $('.card-footer').addClass('border-dark');

            $('.card').removeClass('border-light');
            $('.card-header').removeClass('border-light');
            $('.card-footer').removeClass('border-light');
        }
    });
});