import {Component} from 'react'
import style from './style.css'
import Button from '../../components/button'
import {EditorBlock} from 'draft-js';

class Tools extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={style.r}>
                <div>
                    <EditorBlock {...this.props} />
                </div>
                <div className={style.toolbox}>
                    <button contentEditable={false}>I</button>
                    <button contentEditable={false}>B</button>
                </div>
            </div>
        )
    }
}

export default(Tools)
