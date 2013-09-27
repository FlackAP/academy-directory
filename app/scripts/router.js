DirectoryRouter = Backbone.Router.extend({

	initialize: function() {
		this.items = new Class ()
		this.items.add ( data )
	},

	routes: {
		"table": "showTable",
		"thumbnail": "showThumbnail",
		"students/:last": "showStudent"
	},

	showTable: function(){
		console.log("gonna show alllll the items")
		$('.container').html('')
		this.items = new Class ()
		this.items.add( data )
	},

	showStudent: function(last) {
		$('.container').html('')
		var itemToShow = this.items.get(last)
		new StudentView({model: itemToShow})
	}

})

var router= new DirectoryRouter()
Backbone.history.start()