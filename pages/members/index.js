import Page from '../../layouts/page';
import Content from '../../layouts/content';
import Input from '../../components/input';
import Div from '../../components/div';
import { Component } from 'react'
import { connect } from 'redux-zero/react';
import fn from '../../states/fn';

const mapToProps = ({s, d}) => ({ s, d })

class Members extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.visibilityNav(false)
        this.props.fetchMembers()
    }

    render() {
        return (
            <Page title="Members">
                <Content>
                    <p>Brands page can manage your brand assets on this project.</p>
                    <Div type="s">
                    </Div>
                </Content>
            </Page>
        )
    }
}

export default connect(mapToProps, fn)(Members)
