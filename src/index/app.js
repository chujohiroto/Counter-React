import React, { Component } from 'react';
import Header from './header';
import Main from './main/main';
//import Count from './count';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <h1>Hello, React! Counter Sample</h1>
                <div>
                    <h3>Chujo Hiroto</h3>
                </div>
                <Main />
            </React.Fragment >
        )
    }
}
export default App;