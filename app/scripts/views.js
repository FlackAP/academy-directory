TableView = Backbone.View.extend({

	template: _.template( $('#table-template').text() ),
	tagName: "a",

	className:'table-unit',
 
	initialize: function(){
		console.log('view created!')
		$('.container').append(this.el),
		this.render()
	},

	render: function(){
		this.$el.attr('href', '#/students/' + this.model.get('id') ),
		this.$el.append( this.template({item: this.model }) )
	}
}),

StudentView = Backbone.View.extend({

	template: _.template( $('#student-template').text() ),

	className:'student-unit',

	initialize: function(){
		$('.container').append(this.el),
		this.render()
	},

	render: function(){
		$('.student-unit').html('')
		this.$el.append( this.template({item: this.model }) )
	}
})

EditView = Backbone.View.extend({
	template: _.template( $('#edit-template').text() ),

	className:'edit-unit',

	initialize: function(){
		$('.container').append(this.el),
		this.render()
	},

	render: function(){
		$('.edit-unit').html('')
		this.$el.append( template({item: this.model }) )
	}

})
