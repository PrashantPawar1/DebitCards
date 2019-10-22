
import React, { Component } from 'react';
import Card from './component/Card'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardList:[]
        };
    }
    componentDidMount() {
      const url = "https://api.myjson.com/bins/j1msy"
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ cardList: data })
            })
            .catch(console.log)
    }

    renderCardList = () =>{
        if (!this.state.cardList) {
            return null;
        }
        return (
            <div>
                {this.state.cardList.map((item,index) => <Card key={index} item={item} />)}
            </div>
        );
    }

    render() {
        return (
            <div className="App">
                {this.renderCardList()}
            </div>
        );
    }
}

export default App;
