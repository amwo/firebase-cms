import Article from '../../components/article'
import {Component} from 'react'
import ICON_BACK from '../../assets/icons/icon-back.svg'
import ICON_BRANDS from '../../assets/icons/icon-brands.svg'
import ICON_DASHBOARD from '../../assets/icons/icon-dashboard.svg'
import ICON_DOWN_ARROW from '../../assets/icons/icon-down-arrow.svg'
import ICON_MEMBERS from '../../assets/icons/icon-members.svg'
import ICON_SETTINGS from '../../assets/icons/icon-settings.svg'
import LOGO from '../../assets/logo.png'
import Select from '../../components/select'
import H3 from '../../components/h3'
import Div from '../../components/div'
import Switch from '../../components/switch'
import Link from 'next/link'
import Router from 'next/router'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import style from './style.css'
import ProjectNavigation from '../../widgets/projectNavigation'

const mapToProps = ({ s , d, f}) => ({ s, d, f });

class Navigations extends Component {
    constructor(props) {
        super(props)
        this.open = this.open.bind(this)
        this.back = this.back.bind(this)
        this.state = {
            header: false
        }
    }

    back = () => {
        Router.push(`/page?title=news`, `/news`)
        this.props.closePostView()
    }

    open = () => {
        this.setState({
            header: !this.state.header
        })
    }

    render() {
        return(
            <div>
                <section className={style.postProps} style={this.props.s.visibilities.props ? {left: 0} : null}>
                    <div className={style.propsInner}>
                        <Div type="m">
                            <Select type="list" size="m" value="News" />
                        </Div>
                        <Div type="m">
                            <table>
                                <tbody>
                                    <tr>
                                        <th><H3 title="Index" /></th>
                                        <td><Switch /></td>
                                    </tr>
                                    <tr>
                                        <th><H3 title="AMP" /></th>
                                        <td><Switch /></td>
                                    </tr>
                                    <tr>
                                        <th><H3 title="Publish" /></th>
                                        <td><Switch /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Div>
                        <section className={style.components}>
                            <Div type="m">
                                <H3 title="Components" />
                            </Div>
                            <div className={style.componentSearch}>
                                    <input type="text" value="" placeholder="Search Component" />
                            </div>
                            <div className={style.componentItems}>
                            </div>
                        </section>
                            {this.props.s.visibilities.props ? <button onClick={this.back} className={style.prevButton}><img style={this.state.header ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}} src={ICON_DOWN_ARROW} width="14" height="" alt="Down Arrow" /></button> : null }
                        </div>
                </section>
                <section className={style.r}>
                    <div className={this.state.header ? `${style.cover} ${style.on}` : `${style.cover}`}></div>
                    <div className={style.header} style={this.state.header ? {height: 280} : {height: 95}}>
                        <button className={style.down} onClick={this.open} style={this.state.header ? {border: '1px solid #ebebeb'} : null}>
                            <img style={this.state.header ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}} src={ICON_DOWN_ARROW} width="10" height="" alt="Down Arrow" />
                        </button>
                        <img src={LOGO} width="90" height="auto" alt="" />
                        <h2>{this.props.f.settings.title ? this.props.f.settings.title : 'Title'}</h2>
                        <p className={style.url}><a href="https://www.tokyoislands.jp" target="_blank">https://www.tokyoislands.jp</a></p>
                        <nav>
                            <ul>
                                <li><Link href="/settings"><a><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>Settings</a></Link></li>
                                <li><Link href="/brands"><a><i><img src={ICON_BRANDS} width="" height="15" alt="" /></i>Brands</a></Link></li>
                                <li><Link href="/members"><a><i><img src={ICON_MEMBERS} width="" height="15" alt="" /></i>Members</a></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={style.navs}>
                        <div className="in">
                            <div className={style.nav} style={this.props.s.visibilities.nav ? {left: '-240px'} : {left: 0}}>
                                <nav className={style.firstNav}>
                                    <ul>
                                        <li className={style.current}><Link href="/"><a><i><img src={ICON_DASHBOARD} width="" height="15" alt="" /></i>Dashboard</a></Link></li>
                                    </ul>
                                    <ProjectNavigation />
                                </nav>
                            </div>
                            <div className={style.nav} style={this.props.s.visibilities.nav ? {left: 0} : {left: '240px'}}>
                                <nav className={style.secondNav}>
                                    <section className={style.secondNavHeader}>
                                        <Link href="/"><a className={style.back}><i><img src={ICON_BACK} width="" height="15" alt="" /></i></a></Link>
                                    </section>
                                    <div className={style.articleItems}>
                                        <Article href={'/post'} id="124"/>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default connect(mapToProps, fn)(Navigations)
