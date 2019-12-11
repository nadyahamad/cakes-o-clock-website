console.log('it works') /*checked to see js is inserted correctly*/

$(document).ready(function() {  /*ready() method is used to make a function available after the document is loaded*/
  $('.submit').click(function(event) {
  event.preventDefault() /*everytime something makes the form invalid this function will prevent it to submit */
  console.log('Clicked button')/*checked to see the send button works well- the function  */
 
 /*Get values for the three fields*/
  var subject = $('.subject').val()
  var email=$('.email').val()
  var message=$('.message').val()
  var statusElm =$('.status')/*User can't see the console log > display it for user with var statusElm*/
  statusElm.empty() /*empty the form in case of multiple validations*/
   
    /*Check if values validate*/  
  if(email.length >5 && email.includes('@') && email.includes('.')) { /*All three conditions need to be true before continuing*/
   statusElm.append('<div> Email is valid </div>')  /*append will add new html inside that selector*/
 } else {
   event.preventDefault()
   statusElm.append('<div> Email is not valid </div>')
 }

 if(subject.length >= 2) {
    statusElm.append('<div> Subject is valid </div>')
 } else {
   event.preventDefault()
   statusElm.append('<div> Subect is not valid </div>')
 }

 if(message.length >=10) {
   statusElm.append('<div> Message is valid </div>')
   }else {
     event.preventDefault()
     statusElm.append('<div> Message is not valid </div>')
   }
})     
     
$.ajax({
			url:'https://formspree.io/x19171544@student.ncirl.ie',
			method:'POST',
			data:{
				message:message,
				_replyto:email,
				 email:email,
				comments:comments,
				_subject:'My Form Submission',
			},
			dataType:"json",
			success:function() {
				console.log('success');	
				$('#formBlock').hide();
				$('#thankyouBlock').show();
			}	

  })
})



    
    