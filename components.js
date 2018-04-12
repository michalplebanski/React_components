

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},

	render: function() {
		return(
			React.createElement('li', {}, 
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDesc, {desc: this.props.movie.desc}),
				React.createElement(MovieSrc, {src: this.props.movie.src})
			)
		);
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},

	render: function() {
		return React.createElement('h1', {}, this.props.title)
	}
});

var MovieDesc = React.createClass({
	propTypes: {
    	desc: React.PropTypes.string.isRequired,
	},

	render: function() {
		return React.createElement('p', {}, this.props.desc)
	}
});

var MovieSrc = React.createClass({
	propTypes: {
		src: React.PropTypes.string.isRequired,
	},

	render: function() {
		return React.createElement('img', {src: this.props.src})
	}
});

var MovieList = React.createClass({
	propTypes: {
		movies: React.PropTypes.array.isRequired,
	},
	render: function() {
		var moviesElements = this.props.movies.map(function(movie) {
			return React.createElement(Movie, {key:movie.id, movie: movie})
		});
		return React.createElement('ul', {}, moviesElements)
	}
});

var element = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista'),
	React.createElement(MovieList, {
		 movies: [
			{
				id: 1,
				title: 'Harry Potter',
				desc: 'Opowiesc o czarodzieju',
				src: 'image/harry.jpg'
			},		
			{
				id: 2,
				title: 'Król Lew',
				desc: 'Film o królu sawammy',
				src: 'image/król.jpg'
			},
			{
				id: 3,
				title: 'Piraci z Karaibów',
				desc: 'Film o piratach',
				src: 'image/piraci.jpg'
			},
			{
				id: 4,
				title: 'Władca pierścieni',
				desc: 'Film przygodowy',
				src: 'image/władca.jpg'
			}
		]
	})
);

ReactDOM.render(element, document.getElementById('app'));