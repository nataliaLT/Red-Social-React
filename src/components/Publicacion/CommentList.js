import React, { Component } from "react";
import Comentarios from './Comentarios';


class CommentList extends Component {

	render() {
		return (
			<ul>
				{this.props.items.map(u => {
					return (
						<Comentarios
							user={u.user}
							key={u.key}
							text={u.text}
							like={u.like}
							id={u.key}
							items={this.props.items}

						/>
					);
				})}
			</ul>
		)
	}
}

export default CommentList;