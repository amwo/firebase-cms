import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import Page from '../../layouts/page';
//import Chart from '../../widgets/chart'
import { browserUsage, genDateValue } from '@vx/mock-data';

const mapToProps = ({ s , d}) => ({ s, d });

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.visibilityNav(false)
    }

    render() {
        return (
            <Page title="Home">
                <p>title</p>
            </Page>
        )
    }
}
//<Chart width="100%" height="300" margin={{left: 10, right: 10, bottom: 10, top: 10}}/>

export default connect(mapToProps, fn)(Home)
