import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import Default from '../../layouts/default'
import PostEditor from '../../widgets/postEditor'

const mapToProps = ({ s , d}) => ({ s, d });

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Default>
                <PostEditor />
            </Default>
        )
    }
}

export default connect(mapToProps, fn)(Home)
