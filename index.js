var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
    };


window.addEventListener('load', function () {
    if ( isMobile.Android() ) {
        document.location.href = "https://play.google.com/store/apps/details?id=com.StefMorojna.SpaceflightSimulator";
        document.getElementById("logo").src = "spaceflightsimulator.png";
    }
    else if(isMobile.iOS())
    {
        document.location.href="https://apps.apple.com/us/app/spaceflight-simulator/id1308057272";
        document.getElementById("logo").src = "spaceflightsimulator.png";
    }
    else
    {
        document.location.href = "https://www.google.com"
    }
})
