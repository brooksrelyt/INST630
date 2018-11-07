document.getElementById('AG').onchange = function() {
	var s = document.getElementById('AG');
    var children = s.options[s.selectedIndex].value;
    var recom = document.getElementById('recom');

 	if (children == 1) {
 		document.getElementById("genPara").innerHTML = "Would you like a Picture book or a Chapter book?";
 		document.getElementById("gen2").innerHTML = "Picture";
 		document.getElementById("gen3").innerHTML = "Chapter";
 		recom.innerHTML = " ";
 		document.getElementById('GN').selectedIndex = 0;
 	} else if (children == 2) {
 		document.getElementById("genPara").innerHTML = "Would you like a Fiction book or a Nonfiction book?";
 		document.getElementById("gen2").innerHTML = "Fiction";
 		document.getElementById("gen3").innerHTML = "Non-fiction";
 		recom.innerHTML = " ";
 		document.getElementById('GN').selectedIndex = 0;
 		// alert('its 2');


 		var opt = document.getElementById('GN').options[1];
	    opt.value =  'hack1';

	    var opt = document.getElementById('GN').options[2];
	    opt.value =  'hack2';
 	}   
};

function recomText(sel) {
	var e = document.getElementById("GN");
	var recom = document.getElementById('recom');
	
	if ( sel.options[sel.selectedIndex].value == "2" ) {
		recom.innerHTML = "I recommend 'The Very Hungry Caterpillar' by Eric Carle";
	}
	else if ( sel.options[sel.selectedIndex].value == "3" ) {
		recom.innerHTML = "I recommend 'The Secret Garden' by Frances Hodgson Burnett";
	} else if ( sel.options[sel.selectedIndex].value == "hack1" ) {
		recom.innerHTML = "I recommend 'Frankenstein' by Mary Shelley";
	} else if ( sel.options[sel.selectedIndex].value == "hack2" ) {
		recom.innerHTML = "I recommend 'A Brief History of Time' by S. Hawking";
	}
}