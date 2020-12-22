document.addEventListener('DOMContentLoaded', function(){

    var leftBlock = document.querySelector("cf-left-game-cont"),
        rightBlock = document.querySelector("cf-right-game-cont"),
        centerBlock = document.querySelector("cf-game-cont"),
        fullCont = document.querySelector(".cont_with_game");


    function _checkSizes() {
        leftBlock.style.display = "inline-block";
        rightBlock.style.display = "inline-block";

        var size = leftBlock.offsetWidth + rightBlock.offsetWidth + centerBlock.offsetWidth;

        if (size>window.innerWidth)
            leftBlock.style.display = "none";

        size = rightBlock.offsetWidth + centerBlock.offsetWidth;

        if (size>window.innerWidth)
            rightBlock.style.display = "none";
    }

    _checkSizes();

    window.addEventListener("resize", function() {
        _checkSizes();
    });
});