import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import Router from 'next/router'
import style from './style.css'

import Default from '../../layouts/default'

const mapToProps = ({ s , d}) => ({ s, d });

class Input extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.type === 'text' || this.props.type === 'email' || this.props.type === 'password') {
            return <input className={this.props.invert ? style.textDark : style.textLight} type="text" value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange} autoFocus={this.props.autoFocus} autoComplete={this.props.autoComplete}/>
        }
    }
}

export default connect(mapToProps, fn)(Input)
