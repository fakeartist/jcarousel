jQuery(function($) {
    // Select both carousels
    var carouselStage      = $('.carousel-stage');
    var carouselNavigation = $('.carousel-navigation');

    // Setup stage carousel
    carouselStage
        .jcarousel();

    // Setup connecting the stage carousel to the navigation carousel
    carouselStage
        .delegate('li', 'itemtargetin.jcarousel', function() {
            var items       = carouselNavigation.jcarousel('items');
            var currentItem = items.eq($(this).index());

            // Ensure current item is visible
            carouselNavigation
                .jcarousel('scrollIntoView', currentItem);

            // Remove active class from items
            items.not(currentItem).removeClass('active');

            // Add active class to current item
            currentItem.addClass('active');
        });

    // Setup navigation carousel
    carouselNavigation
        .jcarousel();

    // Setup navigation items controlling the stage carousel
    carouselNavigation
        .delegate('li', 'click', function() {
            carouselStage
                .jcarousel('scroll', $(this).index());
        });

    // Setup controls for the stage carousel
    $('.prev-stage')
        .on('inactive.jcarouselcontrol', function() {
            $(this).addClass('inactive');
        })
        .on('active.jcarouselcontrol', function() {
            $(this).removeClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.next-stage')
        .on('inactive.jcarouselcontrol', function() {
            $(this).addClass('inactive');
        })
        .on('active.jcarouselcontrol', function() {
            $(this).removeClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    // Setup controls for the navigation carousel
    $('.prev-navigation')
        .on('inactive.jcarouselcontrol', function() {
            $(this).addClass('inactive');
        })
        .on('active.jcarouselcontrol', function() {
            $(this).removeClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.next-navigation')
        .on('inactive.jcarouselcontrol', function() {
            $(this).addClass('inactive');
        })
        .on('active.jcarouselcontrol', function() {
            $(this).removeClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });
});
