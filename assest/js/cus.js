var waypoint = new Waypoint({
    element: document.getElementById('fecture'),
    handler: function(direction) {
        if (direction === "down") {
            document.querySelector(".navbar").classList.add("navbar-control")
            document.querySelector(".navbar").classList.add("animate__fadeInDown")
            document.querySelector(".navbar").classList.add("shadow-lg")
        } else {
            document.querySelector(".navbar").classList.remove("navbar-control")
            document.querySelector(".navbar").classList.remove("animate__fadeInDown")
            document.querySelector(".navbar").classList.remove("shadow-lg")

        }
    },
    offset: '10%'
})