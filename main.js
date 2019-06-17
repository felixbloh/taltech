par_part = '';

$('.dsm').hover(
	function(){
		par_part = $('.sub').text() + ': ';
	},
	function(){
		par_part = '';
	});

$('.dropdown-menu li a').click(function(){
	$(this).parents(".dropdown").find('.btn').html(par_part + $(this).text() + '<span class="caret"></span>');
});

next_btn = document.getElementById('next');

$('.dropdown-menu li a').click(function(){
	$('#next').removeAttr('disabled');
	$(".btn").removeClass('dropdown-header');
	next_btn.style.backgroundColor = '#00d358';
	next_btn.style.color = 'white';
	next_btn.style.borderRadius = '#10px';
});

// $("#next").click(function() {
// 	var $current = $('.tab.active');
// 	$current.removeClass('active');
// 	$current.next().next('.tab').addClass('active');
// 	document.getElementById('check1').style.display = 'block';
// });

angular.module("myApp", [])
	.controller('defaultCtrl', ['$scope', function($scope) {
		$scope.submitForm = function (code) {
			document.getElementById('check1').style.display = 'block';
	}
}]);