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
		"click #edit-button" : "edit",
		"click #save" 		 : "save"
	},

	initialize: function(){
		$('.container').append(this.el),
		this.render()
	},

	render: function(){
		this.$el.append( this.template({item: this.model }) )
	},

	edit: function() {
		editTemplate = _.template($("#edit-template").text());
		this.$el.append(editTemplate({item: this.model}) );
	},

	save: function() {
		var firstEdit = this.$el.find('input#first-input').val();
		var lastEdit = this.$el.find('input#last-input').val();
		var emailEdit = this.$el.find('input#email-input').val();
		var githubEdit = this.$el.find('input#github-input').val();

		this.model.set('name', firstEdit);
		this.model.set('last', lastEdit);
		this.model.set('email', emailEdit)
		this.model.set('github', githubEdit);

		this.render();
	}

})

