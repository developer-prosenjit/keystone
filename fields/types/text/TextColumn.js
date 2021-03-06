var React = require('react');

var TextColumn = React.createClass({
	propTypes: {
		col: React.PropTypes.object,
		list: React.PropTypes.object,
		data: React.PropTypes.object,
		href: React.PropTypes.string
	},
	renderValue: function() {
		return this.props.data.fields[this.props.col.path];
	},
	renderText () {
		return (
			<div className="ItemList__col-value">
				{this.renderValue()}
			</div>
		);
	},
	renderLink () {
		return (
			<a href={this.props.linkTo} className="ItemList__col-value ItemList__col-value--name">
				{this.renderValue()}
			</a>
		);
	},
	render: function() {
		return (
			<td>
				{this.props.linkTo ? this.renderLink() : this.renderText()}
			</td>
		);
	}
});

module.exports = TextColumn;
