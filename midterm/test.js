document.getElementById('AG').onchange = function() {
	var s = document.getElementById('AG');
    var children = s.options[s.selectedIndex].value;

 	if (children == '1') {
 		document.getElementById("genPara").innerHTML = "Would you like a Picture book or a Chapter book?";
 		document.getElementById("gen2").innerHTML = "Picture";
 		document.getElementById("gen3").innerHTML = "Chapter";
 	} else {
 		document.getElementById("genPara").innerHTML = "Would you like a Fiction book or a Nonfiction book?";
 		document.getElementById("gen2").innerHTML = "Fiction";
 		document.getElementById("gen3").innerHTML = "Non-fiction";
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
	}
} 