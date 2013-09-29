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

	events: {
		"click #edit" : "update",
		"click #save" : "save"
	},

	initialize: function(){
		$('.container').append(this.el),
		this.render()
	},

	render: function(){
		$('.student-unit').html('')
		this.$el.append( this.template({item: this.model }) )
	},

	update: function() {
		var editTemplate = _.template($("#edit-template").text());
		console.log('editing')
		$('.student-unit').html('')
		this.$el.append(editTemplate({item: this.model}) );
	},

	save: function() {
		var firstEdit = this.$el.find('input#first-input').val();
		var lastEdit = this.$el.find('input#last-input').val();
		var emailEdit = this.$el.find('input#email-input').val();
		var githubEdit = this.$el.find('input#github-input').val();

		this.model.set('name', firstEdit);
		this.model.set('last', lastEdit);
		this.model.set('email', emailEdit);
		this.model.set('github', githubEdit);

		this.render();
	}

})

