document.getElementById('AG').onchange = function() {
	var s = document.getElementById('AG');
    var children = s.options[s.selectedIndex].value;

 	if (children == '1') {
 		// var gen2option = "I recommend 'The Very Hungry Caterpillar' by Eric Carle"
 		// var gen3option = "I recommend 'The Secret Garden' by Frances Hodgson Burnett"

 		document.getElementById("genPara").innerHTML = "Would you like a Picture book or a Chapter book?";
 		document.getElementById("gen2").innerHTML = "Picture";
 		document.getElementById("gen3").innerHTML = "Chapter";

 		var e = document.getElementById("GN");
 		e.onchange = function() {
		    document.getElementById('recom').innerHTML = "I recommend 'The Very Hungry Caterpillar' by Eric Carle";
		}

 	} else {
 		document.getElementById("genPara").innerHTML = "Would you like a Fiction book or a Nonfiction book?";
 		document.getElementById("gen2").innerHTML = "Fiction";
 		document.getElementById("gen3").innerHTML = "Non-fiction";
 	}
   
};