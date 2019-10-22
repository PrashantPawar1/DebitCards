
import React, { Component } from 'react';
import logo from './../more (1).png';
import './../App.css';

class Card extends Component {


    render() {
        return (
                <div className="card">
                    <div className="row">
                        <div className="cardInfo">
                            <div className="avatar">
                            </div>
                            <div className="cardDetails">
                                <div className="cardName">
                                    {this.props.item.Provider}
                                </div>
                                <div className="accountNumber">
                                    {this.props.item.Accounts[0].Number}
                                </div>
                            </div>
                        </div>
                        <div className="accountDetails">
                            <div className="blockedName">
                                {this.props.item.Status}
                            </div>
                            <div className="accountInfo">
                                <div className="amount">
                                    {"₹"+this.props.item.Accounts[0].Balance}
                                </div>
                                <div className="cardNumber">
                                    {"A/C:"+this.props.item.Accounts[0].Number}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={logo} alt="more"/>
                    </div>
                </div>
        );
    }
}

export default Card;
