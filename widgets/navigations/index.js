import {Component} from 'react'
import LOGO from '../../assets/logo.png'
import style from './style.css'
import Link from 'next/link'
import Router from 'next/router';

import ICON_DOWN_ARROW from '../../assets/icons/icon-down-arrow.svg'
import ICON_SETTINGS from '../../assets/icons/icon-settings.svg'
import ICON_MEMBERS from '../../assets/icons/icon-members.svg'
import ICON_BRANDS from '../../assets/icons/icon-brands.svg'
import ICON_DASHBOARD from '../../assets/icons/icon-dashboard.svg'
import ICON_BACK from '../../assets/icons/icon-back.svg'
import Article from '../../components/article'

class Navigations extends Component {
    constructor(props) {
        super(props)
        this.open = this.open.bind(this)
        this.toSecond = this.toSecond.bind(this)
        this.toFirst = this.toFirst.bind(this)
        this.state = {
            header: false,
            second: false
        }
    }

    open = () => {
        this.setState({
            header: !this.state.header
        })
    }

    toFirst = () => {
        this.setState({
            second: false
        })
            Router.push('/')
    }

    toSecond = href => {
        this.setState({
            second: true
        })
        Router.push(href)
    }

    render() {
        return(
            <section className={style.r}>
                <div className={style.cover} style={this.state.header ? {display: 'block', opacity: 1} : {display: 'none', opacity: 0}}></div>
                <div className={style.header} style={this.state.header ? {height: 280} : {height: 95}}>
                    <button className={style.down} onClick={this.open} style={this.state.header ? {border: '1px solid #ebebeb'} : null}>
                        <img style={this.state.header ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}} src={ICON_DOWN_ARROW} width="10" height="" alt="Down Arrow" />
                    </button>
                    <img src={LOGO} width="90" height="auto" alt="" />
                    <h2>Tokyo Islands</h2>
                    <p className={style.url}><a href="">https://www.tokyoislands.jp</a></p>
                    <nav>
                        <ul>
                            <li><a href="#"><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>Settings</a></li>
                            <li><a href="#"><i><img src={ICON_BRANDS} width="" height="15" alt="" /></i>Brand Assets</a></li>
                            <li><a href="#"><i><img src={ICON_MEMBERS} width="" height="15" alt="" /></i>Members</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={style.navs}>
                    <div className="in">
                        <div className={style.nav} style={this.state.second ? {left: '-240px'} : {left: 0}}>
                            <nav className={style.firstNav}>
                                <ul>
                                    <li className={style.current}><Link href="/"><a><i><img src={ICON_DASHBOARD} width="" height="15" alt="" /></i>Dashboard</a></Link></li>
                                </ul>
                                <section className={style.hr}>
                                    <span>Posts</span>
                                </section>
                                <ul>
                                    <li onClick={() => this.toSecond('/news')}><a><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>News</a></li>
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
                        <div className={style.nav} style={this.state.second ? {left: 0} : {left: '240px'}}>
                            <nav className={style.secondNav}>
                                <section>
                                <button onClick={this.toFirst} ><i><img src={ICON_BACK} width="" height="15" alt="" /></i>Back</button>
                                </section>
                                <div className={style.articleItems}>
                                    <Article />
                                    <Article />
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Navigations
