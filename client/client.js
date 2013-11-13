Template.messages.messages = function () {
	return Messages.find({},{sort:  {time: -1}});
}

Template.input.events = {
	'keydown input#message': function ( event ) {
			if (event.which == 13) {
				if (Meteor.user()) {
					var name = Meteor.user().username;
				} else {
					var name = 'Anonymous';
				}
				var message = $('#message');
				if (message.val() != "") {
					Messages.insert({name: name, message: message.val(), time: Date.now()});
					message.val("");
				}
			}
			 if (event.which == 32) {
				var espacio = $('#message').val()
                espacio = espacio + " " 
                		$('#message').val(espacio)
             }
             if (event.which == 66) {
                 var teclab = $('#message').val()
                 teclab = teclab + "b"
                         $('#message').val(teclab)
             }
             if (event.which == 78) {
                 var teclan = $('#message').val()
                 teclan = teclan + "n"
                         $('#message').val(teclan)
             }
	}
}


Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});



