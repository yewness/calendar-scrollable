var eventSource = {
  url: '/events.json',
  textColor: 'white'
}
var holidaySource = {
  url: '/holidays.json',
  textColor: 'white'
}

var requirement = {
  header: {
    left: 'title',
    right: ''
  },
  fixedWeekCount: false,
  firstDay: 1,
  // eventOverlap: false,
  eventSources: [
    eventSource,
    holidaySource
  ]
}

function init() {
  $('.home-calendar').fullCalendar(requirement)
}

function bindCalendar() {
  var dataCalendar = $('.calendar-overflow')
  dataCalendar.scroll(function() {
    // check the position of the calendar
    if ($(this).scrollTop() == 0) {
      console.log($('.calendar-overflow .calendar:nth-child(1)'))
      $('.calendar-overflow .home-calendar:nth-child(1)').prepend( "<p class=test>Test</p>" );
      // $('.test').fullCalendar(requirement).fullCalendar('prev');
    }

    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      console.log($('.calendar-overflow .calendar:last-child'))
      $('.calendar-overflow .home-calendar:last-child').append( "<p class=test>Test</p>" );
      // dataCalendar.append( "<p class=test>Test</p>" );
      // $('.test').fullCalendar(requirement).fullCalendar('next');
    }
    // if scroll below is the last child of the calendar, append a new calendar class down and go the the next month


    // if it's scrolling to the top, check the first child of the calendar, append a new calendar class on top and go the prev month
  })
  // $('".fc-scroller:nth-child(1)"').bind('scroll', function(event) {
  //   console.log($(this).scrollLeft()+" --- "+$(this).innerWidth()+" --- "+$(this)[0].scrollWidth);
  //   if($(this).scrollLeft() <= 0) {
  //     //left scroll : end reached
  //     $('#calendar').fullCalendar('prev');
  //   }
  //   if($(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth) {
  //     //right scroll : end reached
  //     $('#calendar').fullCalendar('next');
  //   }
  // });
  console.log("after bind");
}

$(document).on('turbolinks:load', function() {
  init();
  bindCalendar();
})
