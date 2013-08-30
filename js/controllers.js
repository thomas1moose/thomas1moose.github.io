'use strict';

/* Controllers */

angular.module('thomasApp.controllers', []).
  controller('EventsCtrl', [function() {
  	$('#calendar').fullCalendar({
		events: 'https://www.google.com/calendar/feeds/94ujfdd63gi5jpbnv9ipnv8jqc%40group.calendar.google.com/public/basic',
		eventRender: function(event, element) {
			var title = event.title.replace(/\s+/g, '-').toLowerCase();
			var link = event.start.getDate()+'/'+event.start.getMonth()+'/'+event.start.getFullYear()+'/'+title;
			element.attr('href', link);
		}
	});
  }]);