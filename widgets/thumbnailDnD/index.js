import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import style from './style.css'

const mapToProps = ({ s , d}) => ({ s, d });

class ThumbnailDnD extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={style.r}>
                <div className={style.dnd}>
                </div>
            </div>
        )
    }
}

export default connect(mapToProps, fn)(ThumbnailDnD)
