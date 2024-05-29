var sidebarVisible = true;
var codeExpanded = false;
var windowSize = 0;
var is_overview = false;

$( document ).ready(function() {

    windowSize = window.innerWidth;
    // When the page loads check if we have an overview page and we are not in
    // mobile mode.
    is_overview = $(".overview-sidebar").length > 0 && windowSize >= 768;
    if (is_overview) {
        // console.log("init overview");
        setSidebarVisible(false);
    }
    // load the boolean from sessionStorage
    sidebarVisible = sidebarIsVisible();
    // only show the sidebar if we have determined that it is visible
    if (! sidebarVisible ) {
        if (window.innerWidth > 1200) {
            hideSidebarDesktop();
        }
    }
    //change collapse icons depending on context
    if (window.innerWidth > 1024) {
        collapseToggle = $(".collapse-toggle");
        if ( sidebarVisible ) {
            collapseToggle.html(collapseToggle.attr("data-collapse") + feather.icons['chevron-left'].toSvg());
        } else {
            collapseToggle.html(collapseToggle.attr("data-episodes") + feather.icons['chevron-right'].toSvg());
        }
    } else {
        $(".collapse-toggle").html(feather.icons['x'].toSvg());
    }
    //show mobile sidebar
    $(".navbar-toggler").click(function(){
        showSidebarMobile();
    });

    //showing and hiding sidebar
    $(".collapse-toggle").click(function(){
        if (window.innerWidth > 1200) {
            if (! sidebarIsVisible() ) {
                showSidebarDesktop();
            } else {
                hideSidebarDesktop();
            }
        } else {
            hideSidebarMobile();
        }
    });

    //attempt to smoothly handle resizing windows
    $(window).on('resize', function(){
        //nav is shown by default on desktop only
        if (window.innerWidth > 1200) {
            //reset css to desktop only if it's visible
            if ( sidebarIsVisible() ) {
                showSidebarDesktop();
            } else {
                hideSidebarDesktop();
            }

            if (windowSize > 1200 && ! sidebarIsVisible()) {
                hideSidebarDesktop();
            }
        }
        checkForExtraPadding();

        windowSize = window.innerWidth;

        if (window.innerWidth < 768) {
            var $toTop = $('#to-top');
            $toTop.hide();
        }
    });

    //show scroll to top button after scrolling 500px, with 100ms "debounce"
    $(document).scroll(function() {
        var scrollTimer = window.scrollTimer || null;
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        window.scrollTimer = window.setTimeout(
            function() {
                var $this     = $(this);
                var y         = $this.scrollTop();
                var $toTop    = $('#to-top');
                var isVisible = $toTop.is(':visible');
                if (y > 500) {
                    if (window.innerWidth > 768 && ! isVisible) {
                        $toTop.fadeIn();
                    }
                } else if (isVisible) {
                    $toTop.fadeOut();
                }
            },
            100
        );
    });

    //hide the mobile menu if a chapter section link is clicked
    $('.section-link').click(function(){
        if (window.innerWidth < 1200) {
            hideSidebarMobile();
        }
    });

    //expand all code button
    $("#expand-code").click(function(){
      btn = $("#expand-code");
        if (codeExpanded == true) {
            $(".solution-button").not(".collapsed").click();
            $(".spoiler-button").not(".collapsed").click();
            codeExpanded = false;
            btn.html(btn.attr("data-expand") + feather.icons['plus'].toSvg());
        } else {
            $(".solution-button.collapsed").click();
            $(".spoiler-button.collapsed").click();
            codeExpanded = true;
            btn.html(btn.attr("data-collapse") + feather.icons['minus'].toSvg());
        }
    });
});

// determine if the user has the sidebar showing
function sidebarIsVisible() {
    if (storageAvailable('sessionStorage')) {
        if (sessionStorage.getItem('sidebarVisible') === null) {
            sessionStorage.setItem('sidebarVisible', sidebarVisible);
        }
        return sessionStorage.getItem('sidebarVisible') == 'true';
    } else {
        return sidebarVisible
    }
}


function setSidebarVisible(value) {
    if (storageAvailable('sessionStorage')) {
        sessionStorage.setItem('sidebarVisible', value);
    } else {
        sidebarVisible = value;
    }
    return null
}

// check if we have local storage
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


//needed to avoid the collapsed navbar overlapping main content
function checkForExtraPadding(){
    if (window.innerWidth > 1200 && window.innerWidth < 1352)
    {
        if (! sidebarIsVisible()) {
            $('.primary-content').css({
                'padding-left': '90px'
            });
        }
    } else {
        $('.primary-content').css({
            'padding-left': ''});
    }
}

function showSidebarMobile(){
    // console.log("showSidebarMobile()");
    var $sidebar        = $('#sidebar');
    var $sidebarCol     = $('#sidebar-col');
    var $primaryContent = $('.primary-content');
    var $sidebarInner   = $('.sidebar-inner');
    var $collapseToggle = $('.collapse-toggle');
    $collapseToggle.css({display: ''});
    $collapseToggle.html(feather.icons['x'].toSvg());
    setSidebarVisible(true);
    if (window.innerWidth < 768) {
        $sidebar.css({
            display: 'flex',
            position: 'absolute',
            top: '150px',
            left: '0px',
            right: '0px'
        });
    } else {
        $sidebar.css({
            display: 'flex',
            position: 'absolute',
            top: '200px',
            left: '0px',
            right: '0px'
        });
    }
    $sidebarCol.css({position: '', display: ''});
    $sidebarInner.css('visibility', 'visible');
    $sidebar.show();
    $sidebar.attr('aria-hidden', 'false');
}

function hideSidebarMobile(){
    // console.log('hideSidebarMobile()');
    setSidebarVisible(false);
    var $sidebar = $('#sidebar');
    $sidebar.hide();
    $sidebar.attr('tabindex', '-1'); // remove from tab order
    $sidebar.attr('aria-hidden', 'true'); // ensure not read by screen readers
}

function showSidebarDesktop(){
    // console.log("showSidebarDesktop()");
    setSidebarVisible(true);
    if ($('.overview-sidebar').length > 0) {
        hideSidebarOverview();
        return(true)
    }
    var $sidebar        = $('#sidebar');
    var $sidebarCol     = $('#sidebar-col');
    var $primaryContent = $('.primary-content');
    var $sidebarInner   = $('.sidebar-inner');
    var $collapseToggle = $('.collapse-toggle');
    $sidebar.css({
        display: 'flex',
        position: 'relative',
        top: '0px'
    });
    $sidebarCol.attr('class', 'col-lg-4');
    $sidebarCol.css({
        position: 'relative',
        width:'',
        top: '',
        height: ''
    });
    $primaryContent.attr('class', "col-xl-8 primary-content");
    $sidebarInner.css('visibility', 'visible');
    $collapseToggle.html($collapseToggle.attr("data-collapse") + feather.icons['chevron-left'].toSvg());
    $sidebar.attr('aria-hidden', 'false');
    $collapseToggle.attr('aria-expanded', 'true');
    $sidebar.show();
    checkForExtraPadding();
}

function hideSidebarDesktop(){
    // console.log("hideSidebarDesktop()");
    setSidebarVisible(false);
    var is_overview     = $('.overview-sidebar').length > 0;
    if (is_overview) {
        hideSidebarOverview();
        return(true)
    }
    var $sidebar        = $('#sidebar');
    var $sidebarCol     = $('#sidebar-col');
    var $primaryContent = $('.primary-content');
    var $sidebarInner   = $('.sidebar-inner');
    var $collapseToggle = $('.collapse-toggle');
    $sidebarInner.css('visibility', 'hidden');
    $collapseToggle.html($collapseToggle.attr("data-episodes") + feather.icons['chevron-right'].toSvg());
    // resize primary content before sidebar col
    // when the primary content adjusts its size, the vertical content shrinks
    // and we need to account fo that.
    $primaryContent.attr('class', "col-lg-12 primary-content");
    // Here, we squish the sidebar to the left and readjust its height to be
    // equal to the primary content
    $sidebarCol.css({
        position: 'absolute',
        left: '-10px',
        width:'115px',
        height: ($primaryContent.height())
    });
    $sidebar.attr('tabindex', '-1');
    $sidebar.attr('aria-hidden', 'true');
    $collapseToggle.attr('aria-expanded', 'false');
    checkForExtraPadding();
}

function hideSidebarOverview(){
    // console.log("hideSidebarOverview()");
    setSidebarVisible(false);
    var is_overview     = $('.overview-sidebar').length > 0;
    var $sidebar        = $('#sidebar');
    var $sidebarCol     = $('#sidebar-col');
    var $primaryContent = $('.primary-content');
    var $sidebarInner   = $('.sidebar-inner');
    var $collapseToggle = $('.collapse-toggle');
    $primaryContent.attr('class', "col-lg-12 primary-content");
    $sidebarInner.css('visibility', 'hidden');
    $collapseToggle.css({display: 'none'})
    // resize primary content before sidebar col
    // when the primary content adjusts its size, the vertical content shrinks
    // and we need to account fo that.
    // Here, we squish the sidebar to the left and readjust its height to be
    // equal to the primary content
    $sidebar.css({display: 'none'});
    $sidebarCol.css({
        display: 'none'
    });
    $sidebarCol.attr('class', 'col-lg-1');
    $sidebarCol.attr('tabindex', '-1');
    $sidebarCol.attr('aria-hidden', 'true');
    $sidebar.attr('tabindex', '-1');
    $sidebar.attr('aria-hidden', 'true');
    $collapseToggle.attr('aria-expanded', 'false');
    checkForExtraPadding();
}
