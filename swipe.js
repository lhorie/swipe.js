new function() {
	var startX, startY, threshold = 50, triggered = false
	$(document).on({
		touchstart: function(e) {
			triggered = false
			startX = e.originalEvent.touches[0].clientX
			startY = e.originalEvent.touches[0].clientY
		},
		touchmove: function(e) {
			var currX = e.originalEvent.touches[0].clientX
			var currY = e.originalEvent.touches[0].clientY
			if (currX > startX + threshold) triggered = $(e.target).trigger("swiperight")
			else if (currX < startX - threshold) triggered = $(e.target).trigger("swipeleft")
			else if (currY > startY + threshold) triggered = $(e.target).trigger("swipedown")
			else if (currY < startY - threshold) triggered = $(e.target).trigger("swipeup")
		},
		touchend: function(e) {triggered = false}
	})
}
