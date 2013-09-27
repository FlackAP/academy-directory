Student = Backbone.Model.extend({
  defaults:{
    first: '',
    last: '',
    email: '',
    github: '',
    photo: ''
     },

     initialize: function() {
		console.log('cool new model')

	}
});

Class = Backbone.Collection.extend({
	initialize: function() {
		console.log('cool new collection')
		this.on('add', function(item){
			new TableView( {model: item})
		})
	},

  model: Student
});


var data = [
	{
		id: "andy",
		first: 'Andy',
    	last: 'Flack',
    	email: 'flack.ap@gmail.com',
    	github: 'https://github.com/FlackAP',
    	photo: ''
    },

	{
    	first: 'Joe',
    	last: 'Tamburro',
    	email: 'joetamburro38@gmail.com',
    	github: 'https://github.com/joetamburro',
    	photo: ''
    },	
 	{
    	first: 'Joe',   
    	last: 'VanLeeuwen',
    	email: 'jvnlwn@gmail.com',
    	github: 'https://github.com/joe-vanleeuwen',
    	photo: ''
    },
    {
    	first: 'Keeron ', 
    	last: 'Thandroyen',
    	email: 'keeronmarc@gmail.com',
    	github: 'https://github.com/keeronmarc',
    	photo: ''
    },	
    {
    	first: 'Jake',
    	last: 'Hendley',
    	email: 'jhendley25@gmail.com',
    	github: ' https://github.com/jhendley25',
    	photo: ''
    },	
    {
    	first: 'Ryan',
    	last: 'Poplin',
    	email: '',
    	github: '',
    	photo: ''
    },
    {
        first: 'Caleb',
        last: 'Bradley',
        email: '',
        github: '',
        photo: ''
    },
    {

    }		
]