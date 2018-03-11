import React, { Component } from 'react';
import { connect } from "react-redux";
import { logout } from '../../actions/auth'
import './Main.css';
import List from '../List/';

class Main extends Component {
    state = {
        init: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        items: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }

    handleChange = event => {
        const { name } = event.target;

        this.setState({ ...this.state, [name]: [] });
    }

    logout = () => {
        this.props.logout(this.state);
    }

    filterList = (event) => {
        const { value } = event.target;
        let updatedList = this.state.init;

        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().search(value.toLowerCase()) !== -1;
        });

        this.setState({ items: updatedList });
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='filter__window'>
                    <div className="filter__header">
                        <input className='filter__input' type="text" placeholder="Search" onChange={this.filterList} />
                    </div>
                    <div class='filter__items'>
                        <List items={this.state.items} />
                    </div>
                    <div className='action__wrapper filter'>
                        <button className='action__submit' onClick={this.logout}>Sign Out</button>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Main);