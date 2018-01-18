function eventSource(date) {
  return {
    url: '/events.json?start_date=' + setDate(date),
    textColor: 'white'
  }
}
function holidaySource(date) {
  return {
    url: '/holidays.json?start_date=' + setDate(date),
    textColor: 'white'
  }
}

function getRequirement(date) {
  return {
    header: {
      left: 'title',
      right: ''
    },
    defaultDate: setDate(date),
    fixedWeekCount: false,
    firstDay: 1,
    selectable: true,
    eventSources: [
      eventSource(date),
      holidaySource(date)
    ]
  }
}

function isValidDate(date) {
  var bits = (date + '').split('/');
  var d = new Date(bits[2] + '/' + bits[1] + '/' + bits[0]);
  return !!(d && (d.getMonth() + 1) == bits[1] && d.getDate() == Number(bits[0]));
}

function setDate(date) {
  console.log(date)
  if (isValidDate(date)) {
    return moment(date, 'DD/MM/YYYY', true).format();
  } else {
    return new Date();
  }
}

function init() {
  $('.home-calendar').fullCalendar(getRequirement())
}

function bindCalendar() {
  var dataCalendar = $('.calendar-overflow')
  dataCalendar.scroll(function() {
    // check the position of the calendar
    if ($(this).scrollTop() < 40) {
      firstCalenDate = $('.home-calendar:first-child').fullCalendar("getView").intervalStart.format();
      prevDate = moment(firstCalenDate).subtract(1, 'M').format('DD/MM/YYYY');
      $(this).prepend("<div class='home-calendar'></div>");
      $(this).find('.home-calendar:first-child').fullCalendar(getRequirement(prevDate));
    }

    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      lastCalenDate = $('.home-calendar:last-child').fullCalendar("getView").intervalStart.format();
      nextDate = moment(lastCalenDate).add(1, 'M').format('DD/MM/YYYY');
      $(this).append("<div class='home-calendar'></div>");
      $(this).find('.home-calendar:last-child').fullCalendar(getRequirement(nextDate));
    }
  })
  console.log("after bind");
}

$(document).on('turbolinks:load', function() {
  init();
  bindCalendar();
})
