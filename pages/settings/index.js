import Page from '../../layouts/page';
import Content from '../../layouts/content';
import Input from '../../components/input';
import Div from '../../components/div';
import { Component } from 'react'
import { connect } from 'redux-zero/react';
import fn from '../../states/fn';

const mapToProps = ({s, d, f}) => ({ s, d, f})

class Settings extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.visibilityNav(false)
    }

    render() {
        return (
            <Page title="Settings">
                <Content>
                    <p>Settings page provides basic settings for this project.</p>
                    <Div type="s">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <td><Input size="s" type="text" value={this.props.f.settings.title ? this.props.f.settings.title : null} placeholder="Website Title"/></td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td><Input size="s" type="text" value={this.props.f.settings.description ? this.props.f.settings.description : null}placeholder="Website description"/></td>
                                </tr>
                                <tr>
                                    <th>URL</th>
                                    <td><Input size="s" type="text" placeholder="Website URL"/></td>
                                </tr>
                                <tr>
                                    <th>Collections</th>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </Div>
                </Content>
            </Page>
        )
    }
}

export default connect(mapToProps, fn)(Settings)
