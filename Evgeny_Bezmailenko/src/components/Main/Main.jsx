import './Main.css';

import React, { Component } from 'react';


import Aside from 'components/Aside';
import PostsContainer from 'containers/PostsContainer';


export default class Main extends Component {
    render() {
        return (
            <main role="main" className="container">
                <div className="row">
                    <PostsContainer/>
                    <Aside/>
                </div>
            </main>
        );
    }
}