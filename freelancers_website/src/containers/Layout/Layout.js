import React, {Component} from 'react';
import './Layout.css';
import AuxiliaryComponent from '../../hoc/AuxiliaryComponent';
import Toolbar from '../../components/Toolbar/Toolbar';
import {connect} from 'react-redux';

class Layout extends Component {
    render() {
        return (
            <AuxiliaryComponent>
                <Toolbar
                    changed={this.props.changed}
                    isAuth={this.props.isAuthenticated}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </AuxiliaryComponent>
        )
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);