import Article from '../../components/article'
import {Component} from 'react'
import ICON_BACK from '../../assets/icons/icon-back.svg'
import ICON_BRANDS from '../../assets/icons/icon-brands.svg'
import ICON_DASHBOARD from '../../assets/icons/icon-dashboard.svg'
import ICON_DOWN_ARROW from '../../assets/icons/icon-down-arrow.svg'
import ICON_MEMBERS from '../../assets/icons/icon-members.svg'
import ICON_SETTINGS from '../../assets/icons/icon-settings.svg'
import LOGO from '../../assets/logo.png'
import Link from 'next/link'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import style from './style.css'

const mapToProps = ({ s , d}) => ({ s, d });

class Navigations extends Component {
    constructor(props) {
        super(props)
        this.open = this.open.bind(this)
        this.state = {
            header: false
        }
    }

    open = () => {
        this.setState({
            header: !this.state.header
        })
    }

    render() {
        return(
            <section className={style.r}>
                <div className={this.state.header ? `${style.cover} ${style.on}` : `${style.cover}`}></div>
                <div className={style.header} style={this.state.header ? {height: 280} : {height: 95}}>
                    <button className={style.down} onClick={this.open} style={this.state.header ? {border: '1px solid #ebebeb'} : null}>
                        <img style={this.state.header ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}} src={ICON_DOWN_ARROW} width="10" height="" alt="Down Arrow" />
                    </button>
                    <img src={LOGO} width="90" height="auto" alt="" />
                    <h2>Tokyo Islands</h2>
                    <p className={style.url}><a href="">https://www.tokyoislands.jp</a></p>
                    <nav>
                        <ul>
                            <li><Link href="/settings"><a><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>Settings</a></Link></li>
                            <li><a href="#"><i><img src={ICON_BRANDS} width="" height="15" alt="" /></i>Brand Assets</a></li>
                            <li><a href="#"><i><img src={ICON_MEMBERS} width="" height="15" alt="" /></i>Members</a></li>
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
                                <section className={style.hr}>
                                    <span>Posts</span>
                                </section>
                                <ul>
                                    <li><Link href="/news"><a><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>News</a></Link></li>
                                    <li><a href="#"><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>Blog</a></li>
                                </ul>
                                <section className={style.hr}>
                                    <span>Statics</span>
                                </section>
                                <ul>
                                    <li><a href="#"><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>Islands</a></li>
                                    <li><a href="#"><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>Activities</a></li>
                                    <li><a href="#"><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>Accommodations</a></li>
                                    <li><a href="#"><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>Restaurants</a></li>
                                    <li><a href="#"><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>Pages</a></li>
                                </ul>
                                <section className={style.hr}>
                                    <span>Management</span>
                                </section>
                                <ul>
                                    <li><a href="#"><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>Contact</a></li>
                                    <li><a href="#"><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>Ship Booking</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={style.nav} style={this.props.s.visibilities.nav ? {left: 0} : {left: '240px'}}>
                            <nav className={style.secondNav}>
                                <section className={style.secondNavHeader}>
                                    <Link href="/"><a className={style.back}><i><img src={ICON_BACK} width="" height="15" alt="" /></i></a></Link>
                                </section>
                                <div className={style.articleItems}>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                    <Article href={'/post'} id="124"/>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(mapToProps, fn)(Navigations)
