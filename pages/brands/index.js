import Page from '../../layouts/page';
import Content from '../../layouts/content';
import Input from '../../components/input';
import Div from '../../components/div';
import { Component } from 'react'
import { connect } from 'redux-zero/react';
import fn from '../../states/fn';

const mapToProps = ({s, d}) => ({ s, d })

class Brands extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.visibilityNav(false)
    }

    render() {
        return (
            <Page title="Brands">
                <Content>
                    <p>Brands page can manage your brand assets on this project.</p>
                    <Div type="s">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Brand Name</th>
                                    <td><Input size="s" type="text" placeholder="Website Title"/></td>
                                </tr>
                                <tr>
                                    <th>Logo</th>
                                    <td><Input size="s" type="text" placeholder="Website Title"/></td>
                                </tr>
                                <tr>
                                    <th>Tagline</th>
                                    <td><Input size="s" type="text" placeholder="Website Title"/></td>
                                </tr>
                                <tr>
                                    <th>Typography</th>
                                    <td><Input size="s" type="text" placeholder="Website description"/></td>
                                </tr>
                                <tr>
                                    <th>Colors</th>
                                    <td><Input size="s" type="text" placeholder="Website URL"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </Div>
                </Content>
            </Page>
        )
    }
}

export default connect(mapToProps, fn)(Brands)
