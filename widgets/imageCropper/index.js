import {Component} from 'react'
import style from './style.css'

class ImageCropper extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className={style.r}>
                <div classnName={style.image}>
                </div>
            </section>
        )
    }
}

export default ImageCropper
