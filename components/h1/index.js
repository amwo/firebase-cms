import {Component} from 'react'

class H1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1 className="r">
                    {this.props.title}
                <style jsx>
                        {`
                        .r {
                               font-size: 33px;
                               font-weight: bold
                            }
                        `}
                </style>
            </h1>
        )
    }
}

export default H1
