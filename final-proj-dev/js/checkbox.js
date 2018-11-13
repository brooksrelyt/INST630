function toggleCheckbox(element){
   if (element.checked) {
      element.setAttribute("checked", "checked");
      selectBoxs(element);
   } else {
      element.setAttribute("checked", "");
      unselectBoxs(element);
   }
}