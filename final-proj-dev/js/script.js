// Reset the choices - might not be working
$('#reset').click(function(){
    $("input[type='checkbox']").attr("checked",false);
});


// CATEGORY FILTER
$('#cat-filter').delegate('input[type=checkbox]', 'change', function() {
	$('input.category').not(this).prop('checked', false);  
	var $list = $('.leaflet-zoom-animated > g > circle'),
	$checked = $('input:checked');	
	if ($checked.length) {							
		var selector = '';
		$($checked).each(function(index, element){                            
			selector += "[data-cat~='" + element.value + "']";                            
		});                        
		$list.hide();                        
		$('.leaflet-zoom-animated > g > circle').filter(selector).show();			   
	}
	else {
		$list.show();
	}
});

// STAR RATING FILTER
$('#star-filter').delegate('input[type=checkbox]', 'change', function() {
	$('input.star').not(this).prop('checked', false);  
	var $list = $('.leaflet-zoom-animated > g > circle'),
	$checked = $('input:checked');	
	if ($checked.length) {							
		var selector = '';
		var selector2 = '';
		$($checked).each(function(index, element, element2){
			selector += "[data-star~='" + element.value + "']";  
			selector2 += "[data-star~='" + element2.datavaluetwo + "']";   
		});                        
		$list.hide();
		$('.leaflet-zoom-animated > g > circle').filter('selector, selector2').show();
	}
	else {
		$list.show();
	}
});
