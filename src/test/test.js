import React, { Component } from 'react';
import './index.css';
import {router,route} from ''

class Index extends Component {
    submit = () => {
        alert('hhah')
    }

    render() {
        return (
            <div className="index">
                <header className="index-header">
                    <h2 className="App-title">主页-王二妹</h2>
                </header>
                <p className="index-intro">
                    你可以在app.js中修改
                </p>
                <a onclick={this.submit}></a>
            </div>
        );
    }
}

export default Index;


