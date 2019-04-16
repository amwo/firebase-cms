import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';

const mapToProps = ({ s , d}) => ({ s, d });

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.visibilityNav(false)
    }

    render() {
        return <h1>Home</h1>
    }
}

export default connect(mapToProps, fn)(Home)
