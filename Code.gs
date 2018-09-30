
  function createKPIForm() {  
   // create & name Form  
   var item = "Key Performance Indicator Form";  
   var form = FormApp.create(item)  
       .setTitle(item);
    form.setDescription("To Collect data from Baby Powder Team")
   
   // single line text field  
   item = "Name";  
   form.addTextItem()  
       .setTitle(item)  
       .setRequired(true); 

   item = "Divison";  
   var choices = ["Customer Relations", "Help Desk", "Sales & marketing", "Human Resource", "Finance", "Management"];  
   form.addMultipleChoiceItem()  
       .setTitle(item)  
       .setChoiceValues(choices)  
       .setRequired(true);  
    
    // Begin and End Date
   form.addDateItem()
    .setTitle('Begin Date of the Report');
   form.addDateItem()
    .setTitle('End Date of the Report');
    
   // multi-line "text area"  
   item = "Comments and Suggestions (4-6 sentences)";  
   form.addParagraphTextItem()  
       .setTitle(item)  
       .setRequired(true);  
   
   // radiobuttons  
   item = "Hours Spent with External Customer";  
   choices = ["0-10", "10-50", "50-100", "100-200"];  
   form.addMultipleChoiceItem()  
       .setTitle(item)  
       .setChoiceValues(choices)  
       .setRequired(true);  
    
 
   item = "Hours Spent with Internal Customer";  
   choices = ["0-10", "10-50", "50-100", "100-200"];  
   form.addMultipleChoiceItem()  
       .setTitle(item)  
       .setChoiceValues(choices)  
       .setRequired(true);
    
   item = "Hours Spent on Education";  
   choices = ["0-10", "10-50", "50-100", "100-200"];  
   form.addMultipleChoiceItem()  
       .setTitle(item)  
       .setChoiceValues(choices)  
       .setRequired(true);
    
   item = "Hours Spent on Management Reort";  
   choices = ["0-10", "10-50", "50-100", "100-200"];  
   form.addMultipleChoiceItem()  
       .setTitle(item)  
       .setChoiceValues(choices)  
       .setRequired(true);   
    
   // (multiple choice) checkboxes  
   //item = "Microphone preference (if any)";  
  // choices = ["wireless/lapel", "handheld", "podium/stand"];  
   //form.addCheckboxItem()  
      // .setTitle(item)  
       //.setChoiceValues(choices);  
 }  

