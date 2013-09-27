DirectoryRouter = Backbone.Router.extend({

	initialize: function() {

	},

	routes: {
		"table": "showTable",
		"thumbnail": "showThumbnail",
		"students/:last": "showStudent"
	},

	showTable: function(){
		console.log("gonna show alllll the items")
		$('.container').html('')
		this.students = new Class ()
		this.students.add( data )
	},

	showStudent: function(id) {
		console.log(id)
		$('.container').html('')
		var shownStudent = this.students.get(id)
		new StudentView({model: shownStudent})
	} 	

})

var router= new DirectoryRouter()
Backbone.history.start()