// $('#reset').click(function(){
//     $("input[type='checkbox']").attr("checked",false);
// });

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

$('#star-filter').delegate('input[type=checkbox]', 'change', function() {
	$('input.star').not(this).prop('checked', false);  
	var $list = $('.leaflet-zoom-animated > g > circle'),
	$checked = $('input:checked');	
	if ($checked.length) {							
		var selector = '';
		$($checked).each(function(index, element){                            
			selector += "[data-star~='" + element.value + "'], [data-valuetwo~='" + element.value + "']";                            
		});                        
		$list.hide();                        
		$('.leaflet-zoom-animated > g > circle').filter(selector).show();			   
	}
	else {
		$list.show();
	}
});