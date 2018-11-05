// Create an array of objects
var courses = [{ code: 'INST620', title: 'Diverse Populations, Inclusion, and Information', instructor: 'Hill', classroom: 'ONLINE' },
  { code: 'INST627', title: 'Data Analytics for Information Professionals', instructor: 'Kacorri', classroom: 'HBK 0105' },
  { code: 'INST630', title: 'Introduction to Programming for the Information Professional', instructor: 'Diker', classroom: 'HBK 0105' },
  { code: 'INST631', title: 'Fundamentals of Human-Computer Interaction ', instructor: 'Golbeck', classroom: 'BPS 1238' }];

// Capture form element value(s)
(function () {
  var form = document.getElementById('submit_code');
  var elements = form.elements;
  var elCode = elements.Code;

  addEvent(form, 'submit', function (e) {
    e.preventDefault(); // Stop the form from being sent

    var i = courses.map(function (e) { return e.code; }).indexOf(elCode.value); // Get index of object with matching code value

    var newEl = document.createElement('p'); // Create a new element and assign to variable
    var newText = document.createTextNode(courses[i].code + ' ' + courses[i].title + ' ' + courses[i].instructor + ' ' + courses[i].classroom); // Create a new text node and assign to variable
    newEl.appendChild(newText); // Attach text node to element
    var position = document.getElementsByTagName('div')[0]; // Identify position to add the element
    position.appendChild(newEl); // Add element into position
  });
}());
