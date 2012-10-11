new function() {
	var startX, startY
	$(document).on({
		touchstart: function(e) {
			startX = e.originalEvent.touches[0].clientX
			startY = e.originalEvent.touches[0].clientY
		},
		touchmove: function(e) {
			var currX = e.originalEvent.touches[0].clientX
			var currY = e.originalEvent.touches[0].clientY
			if (currX != startX) $(e.target).trigger("swipe" + (currX > startX ? "left" : "right"))
			if (currY != startY) $(e.target).trigger("swipe" + (currY > startY ? "up" : "down"))
		}
	})
}
