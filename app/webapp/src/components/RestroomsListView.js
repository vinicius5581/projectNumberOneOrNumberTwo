import React, { Component } from 'react';

import './RestroomsListView.scss';
import RestroomsListItem from './RestroomsListItem';

class RestroomsListView extends Component {
    render() {
        return (
            <ul className="list-view">
                <li>
                    <RestroomsListItem id="r1" />
                </li>
                <li>
                    <RestroomsListItem id="r2" />
                </li>
                <li>
                    <RestroomsListItem id="r3" />
                </li>
            </ul>
        );
    }
}

export default RestroomsListView;
