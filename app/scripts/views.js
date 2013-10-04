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
		this.$el.attr('href', '#/students/' + this.model.get('_id') ),
		this.$el.append( this.template({item: this.model }) )
	}
}),

StudentView = Backbone.View.extend({

	template: _.template( $('#student-template').text() ),

	className:'student-unit',

	initialize: function(){
		$('.container').append(this.$el),
		this.render()
	},

	render: function(){
		$('.student-unit').html('')
		this.$el.append( this.template({item: this.model }) )
	}
}),

EditView = Backbone.View.extend({
	template: _.template( $('#edit-template').text() ),

	className:'edit-unit',

	events: {
		"click #save": "save"
	},

	initialize: function(){
		console.log('editing coooool'),
		$('.container').append(this.$el),
		this.render()
	},

	render: function(){
		console.log('ok'),
		$('.student-unit').html(''),
		this.$el.append( this.template({item: this.model}) )
	},

	save: function() {
		console.log('oh wow'),

		this.model.set({
    	  "first": this.$el.find('#first-input').val(),
    	  "last": this.$el.find('#last-input').val(),
    	  "github": this.$el.find('#github-input').val(),
    	  "email": this.$el.find('#email-input').val()
    	}),

		this.model.save()
    }
})
