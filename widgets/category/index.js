import {Component} from 'react'
import style from './style.css'
import Button from '../../components/button'

class Category extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <form className={style.r}>
                <p>
                    <input type="radio" id="test1" name="radio-group" defaultChecked />
                    <label htmlFor="test1">Apple</label>
                </p>
                <p>
                    <input type="radio" id="test2" name="radio-group" />
                    <label htmlFor="test2">Peach</label>
                </p>
                <p>
                    <input type="radio" id="test3" name="radio-group" />
                    <label htmlFor="test3">Orange</label>
                </p>
            </form>
        )
    }
}

export default Category
