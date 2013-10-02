Student = Backbone.Model.extend({
  defaults:{
    first: '',
    last: '',
    email: '',
    github: '',
    photo: ''
     },

    idAttribute: '_id',

     initialize: function() {
		console.log('cool new model')

	}
});

Class = Backbone.Collection.extend({
	initialize: function() {
		console.log('cool new collection')
	},

  model: Student,

  url: "http://0.0.0.0:3000/collections/students"
});


// var data = [
//     {
//         id: "Bradley",
//         first: 'Caleb',
//         last: 'Bradley',
//         email: 'calebbradley30@yahoo.com',
//         github: 'https://github.com/calebbradley',
//         photo: 'https://0.gravatar.com/avatar/6e1409c2af985ad17320157ffd13b67c?d=https%3A%2F%2Fidenticons.github.com%2F5b515ef064cf164fa1bd61f03eb6d9fa.png&s=420'
//     },
// 	{
// 		id: "Flack",
// 		first: 'Andy',
//     	last: 'Flack',
//     	email: 'flack.ap@gmail.com',
//     	github: 'https://github.com/FlackAP',
//     	photo: 'https://1.gravatar.com/avatar/b05691109d08ca754b4d92984b53b23a?d=https%3A%2F%2Fidenticons.github.com%2F1f05bde9094f992be5264d254dc63842.png&s=420'
//     },
//     {
//         id: "Hendley",
//         first: 'Jake',
//         last: 'Hendley',
//         email: 'jhendley25@gmail.com',
//         github: ' https://github.com/jhendley25',
//         photo: 'https://1.gravatar.com/avatar/a4d6a575778b5aea9afddd13471f5178?d=https%3A%2F%2Fidenticons.github.com%2F9745e271f4fb0ac83b37286d6ac03942.png&s=420'
//     },
//     {
//         id: "Poplin",
//         first: 'Ryan',
//         last: 'Poplin',
//         email: 'fender14@charter.net',
//         github: 'https://github.com/ryanpoplin',
//         photo: 'https://1.gravatar.com/avatar/5f82bfa696bada6b49afcac4569017cb?d=https%3A%2F%2Fidenticons.github.com%2Fce1b18b1d3e7b2cb1527db14040458e9.png&s=420'
//     },    
// 	{
//         id: "Tamburro",
//     	first: 'Joe',
//     	last: 'Tamburro',
//     	email: 'joetamburro38@gmail.com',
//     	github: 'https://github.com/joetamburro',
//     	photo: 'https://2.gravatar.com/avatar/68832c35b4a14e91197ebc989d70694b?d=https%3A%2F%2Fidenticons.github.com%2Fab95055bbcfd4dcb4725994058c98e0c.png&s=420'
//     }, 
//    ,	
//  	{
//         id: "VanLeeuwen",
//     	first: 'Joe',   
//     	last: 'VanLeeuwen',
//     	email: 'jvnlwn@gmail.com',
//     	github: 'https://github.com/joe-vanleeuwen',
//     	photo: 'https://2.gravatar.com/avatar/9630334f86049b7af41ae84c5c52a166?d=https%3A%2F%2Fidenticons.github.com%2Fd8ffb2214e1db5dd70ebac58b9c6bdde.png&s=420'
//     }

// ]