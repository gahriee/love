$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var text_wrapper = $(".text-wrapper");
  var scroll_hint = $("#scroll-hint");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    
    // Check if scrolling is needed after the animation finishes
    setTimeout(function() {
        checkScroll();
    }, 600); 
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    scroll_hint.css("opacity", "0"); // Hide hint immediately on close
    
    // Optional: Reset scroll position to top when closed so it starts fresh next time
    setTimeout(function() {
        text_wrapper.scrollTop(0);
    }, 500);
  }

  // Check if content overflows
  function checkScroll() {
    var elem = text_wrapper[0];
    // Only show if content is actually taller than the container
    if (elem.scrollHeight > elem.clientHeight) {
        scroll_hint.css("opacity", "1"); 
    } else {
        scroll_hint.css("opacity", "0"); 
    }
  }

  // Detect scroll to toggle the hint
  text_wrapper.scroll(function() {
    var elem = $(this);
    
    if (elem.scrollTop() > 10) { 
        // User scrolled down -> Hide hint
        scroll_hint.css("opacity", "0");
    } else {
        // User is back at the top -> Show hint again
        scroll_hint.css("opacity", "1");
    }
  });
});