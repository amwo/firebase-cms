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
            return (
                <div className={this.props.form === 'cap' ? style.cap : this.props.form === 'lid' ? style.lid : style.r}>
                    <input className={this.props.invert ? style.textDark : style.textLight} type={this.props.type === 'password' ? 'password' : this.props.type === 'email' ? 'email' : 'text'} value={this.props.value} placeholder={this.props.placeholder} onKeyDown={this.props.onKeyDown} onChange={this.props.onChange} autoFocus={this.props.autoFocus} readOnly={this.props.readOnly} autoComplete={this.props.autoComplete} disabled={this.props.disabled}/>
                    {this.props.loading ? <div className={style.btSpinner}></div> : this.props.lastIcon ? <button className={style.lastIcon}><img src={this.props.lastIcon} width="12" height="" alt="Icon" /></button> : null }
                </div>
            )
        }
    }
}

export default connect(mapToProps, fn)(Input)
