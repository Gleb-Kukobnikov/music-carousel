export default () => {
    return {
        restrict: 'E',
        template: '<p class="lead text-white text-center ">Displaying {{slideIndex + 1}} {{" of " + totalSlides}}</p>'
    };
}