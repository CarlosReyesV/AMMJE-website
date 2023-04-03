/* Be part modal functions */
$(function() {
    // all needed variables
    var $overlaybepart = $('.overlay-be-part');
    var $mainPopUp = $('.main-popup-be-part')
    var $signIn = $('#sign-in');
    var $register = $('#register');
    var $formSignIn = $('form.sign-in');
    var $formRegister = $('form.register');
    var $firstChild = $('nav ul li:first-child');
    var $secondChild = $('nav ul li:nth-child(2)');
    var $thirdChild = $('nav ul li:nth-child(3)');
    //defining function to create underline initial state on document load
    function initialState() {
        $('.underline').css({
            "width": $firstChild.width(),
            "left": $firstChild.position().left,
            "top": $firstChild.position().top + $firstChild.outerHeight(true) + 'px'
        });
    }
  initialState(); //() used after calling function to call function immediately on doc load
  //defining function to change underline depending on which li is active
    function changeUnderline(el) {
        $('.underline').css({
            "width": el.width(),
            "left": el.position().left,
            "top": el.position().top + el.outerHeight(true) + 'px'
        });
    } //note: have not called the function...don't want it called immediately
    $firstChild.on('click', function(){
        var el = $firstChild;
        changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
        $secondChild.removeClass('activeTime');
        $thirdChild.removeClass('activeTime');
        $(this).addClass('activeTime');
    });
    $secondChild.on('click', function(){
        var el = $secondChild;
        changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
        $firstChild.removeClass('activeTime');
        $thirdChild.removeClass('activeTime');
        $(this).addClass('activeTime');
    });
    $thirdChild.on('click', function(){
        var el = $thirdChild;
        changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
        $firstChild.removeClass('activeTime');
        $secondChild.removeClass('activeTime');
        $(this).addClass('activeTime');
    });
    $('button').on('click', function(){
        $overlaybepart.addClass('visible');
        $mainPopUp.addClass('visible');
        $signIn.addClass('activeTime');
        $register.removeClass('activeTime');
        $formRegister.removeClass('move-left');
        $formSignIn.removeClass('move-left');
    });
    $overlaybepart.on('click', function(){
        $(this).removeClass('visible');
        $mainPopUp.removeClass('visible');
    });
    $('#popup-close-button a').on('click', function(e){
        e.preventDefault();
        $overlaybepart.removeClass('visible');
        $mainPopUp.removeClass('visible');
    });
    $signIn.on('click', function(){
        $signIn.addClass('activeTime');
        $register.removeClass('activeTime');
        $formSignIn.removeClass('move-left');
        $formRegister.removeClass('move-left');
    });
    $register.on('click', function(){
        $signIn.removeClass('activeTime');
        $register.addClass('activeTime');
        $formSignIn.addClass('move-left');
        $formRegister.addClass('move-left');
    });
    $('input').on('submit', function(e){
      e.preventDefault(); //used to prevent submission of form...remove for real use
    });
});