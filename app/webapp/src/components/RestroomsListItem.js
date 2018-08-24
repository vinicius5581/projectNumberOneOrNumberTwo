import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class RestroomsListItem extends Component {
    render() {
        const { id } = this.props;
        return (
            <div>
                <NavLink to={`/restrooms/${this.props.id}`}>Restroom Name</NavLink>
                <p>Address</p>
                <p>isPublic</p>
                <p>Ratings</p>
                <p>isFavorite</p>
                <p>my last visit</p>
            </div>
        );
    }
}

export default RestroomsListItem;
