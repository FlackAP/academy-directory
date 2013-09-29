DirectoryRouter = Backbone.Router.extend({

	initialize: function() {

	},

	routes: {
		"table": "showTable",
		"thumbnail": "showThumbnail",
		"students/:last": "showStudent"
	},

	showTable: function(){
		console.log("showing all students")
		$('.container').html('')
		this.students = new Class ()
		this.students.add( data )
	},

	showStudent: function(id) {
		console.log('student id: ', id)
		$('.container').html('')
		shownStudent = this.students.get(id)
		new StudentView({model: shownStudent})
	} 	

})

var router= new DirectoryRouter()
Backbone.history.start()