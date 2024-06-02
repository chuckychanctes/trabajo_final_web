/*Menú*/
$(document).ready(function() {
  $(".menu-icon").click(function() {
    $("nav ul").toggleClass("showing");
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}

/*DESPLAZAMIENTO SUAVE*/
$('a.scroll').click(function(e) {
  e.preventDefault();
  $('html, body').stop().animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1200);
});


/*POPUP*/
(function(document) {

    function SimpleModal(options) {
        this.id = options.id;
        this.modalElement = document.querySelector("#" + this.id);
        this.closeElements = this.modalElement.querySelectorAll(
            ".simple-modal-close, .simple-modal-background"
        );

        const context = this;
        Array.prototype.forEach.call(this.closeElements, function(node) {
            node.addEventListener(
                "click",
                context.handleCloseClick.bind(context)
            );
        });
    }

    SimpleModal.prototype.handleCloseClick = function(event) {
        this.close.call(this);
    };

    SimpleModal.prototype.open = function() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        this.modalElement.setAttribute("aria-modal", true);
        this.addClass.call(this, "simple-modal-visible");
    };

    SimpleModal.prototype.close = function() {
        document.removeEventListener("keydown", this.handleKeyDown);
        this.modalElement.setAttribute("aria-modal", false);
        this.removeClass.call(this, "simple-modal-visible");
        this.modalElement.querySelector('.simple-modal-content').innerHTML = '';
    };

    SimpleModal.prototype.hasClass = function(cls) {
        return !!this.modalElement.className.match(
            new RegExp("(\\s|^)" + cls + "(\\s|$)")
        );
    };

    SimpleModal.prototype.addClass = function(cls) {
        if (!this.hasClass.call(this, cls)) {
            this.modalElement.className += " " + cls;
        }
    };

    SimpleModal.prototype.removeClass = function(cls) {
        if (this.hasClass.call(this, cls)) {
            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            this.modalElement.className = this.modalElement.className.replace(
                reg,
                " "
            );
        }
    };

    SimpleModal.prototype.handleKeyDown = function(event) {
        var KEY_TAB = 9;
        var KEY_ESC = 27;

        switch (event.keyCode) {
            case KEY_TAB:
            /* Handle if TAB key is pressed (see above) */
            case KEY_ESC:
                this.close.call(this);
                break;
            default:
                break;
        } // end switch
    };

        /*
        Prevent modal from loading if no browser compatibility.
    */
    function _isModalCompatible() {
        if (typeof document.addEventListener==='undefined') {
            return false;
        }
        return true;
    }

    // initialize the modal on load
    if (_isModalCompatible()) {

        const options = {
            id: "homepage-video-modal"
        };

        const homepageVideoModal = new SimpleModal(options);
        homepageVideoModal.open();
    }
})(document);
