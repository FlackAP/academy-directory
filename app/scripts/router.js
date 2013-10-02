DirectoryRouter = Backbone.Router.extend({

	initialize: function() {
		$('.container').html('')
		this.students = new Class ()
	},

	routes: {
		"table"				 : "showTable",
		"students/:id"	 	 : "showStudent",
		"students/:id/edit"  : "showEdit"
	},

	showTable: function(){
		console.log("showing all students")
		$('.container').html('')
		this.students.fetch({
			success: function(students){
				students.each(function(student){
					new TableView({model: student})
				})
			}
		})
	},

	showStudent: function(id) {
		console.log('student id: ', id)
		$('.container').html('')
		var shownStudent = this.students.get(id)
		new StudentView({model: shownStudent})
	},

	showEdit: function(id) {
		console.log('editing student id:', id)
		$('.container').html('')
		new Editview({model: student})
	}	
})

var router= new DirectoryRouter()
Backbone.history.start()