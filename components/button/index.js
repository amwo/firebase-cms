//import style from './style.css'
import {Component} from 'react'
import ICON_ADD from '../../assets/icons/icon-add.svg'
import {connect} from 'redux-zero/react'
import fn from '../../states/fn'

const mapToProps = ({s}) => ({s})

class Button extends Component {
    constructor(props) {
        super(props)
        this.showAdd = this.showAdd.bind(this)
    }

    showAdd = () => {
        this.props.showAdd(this.props.s.visibilities.add)
    }

    render() {
        switch(this.props.type) {
            case 'icon':
                return (
                    <button className="icon">
                        {this.props.src ? <img src={this.props.src} width="" height="" alt="" /> : 'T'}
                        <style jsx>{`
                            .icon {
                                background: #fafafa;
                                border: 2px solid #fff;
                                outline: 0;
                                width: 44px;
                                height: 44px;
                                border-radius: 7px;
                                -webkit-border-radius: 7px;
                                -moz-border-radius: 7px;
                                box-shadow: 0 0 15px rgba(0,0,0,.2);
                                cursor: pointer;
                                transition: all 0.25s ease;
                                -moz-transition: all 0.25s ease;
                                -webkit-transition: all 0.25s ease;
                                -o-transition: all 0.25s ease;
                            }
                            .icon:hover {
                                border: 2px solid #000;
                            }
                        `}</style>
                    </button>
                )
            case 'add':
                return (
                    <button className="add" onClick={this.showAdd} style={this.props.s.visibilities.add ? {right: 115, transform: 'rotate(-45deg)'} : {right: 36, transform: ''} }>
                        <img src={ICON_ADD} width="20" height="" alt="" />
                        <style jsx>{`
                            .add {
                                border: 0;
                                outline: 0;
                                cursor: pointer;
                                background: #e6142c;
                                width: 56px;
                                height:56px;
                                border-radius: 50%;
                                -webkit-border-radius: 50%;
                                -moz-border-radius: 50%;
                                box-shadow: 0 0 15px rgba(0,0,0,.3);
                                position: fixed;
                                bottom: 28px;
                                z-index: 999;
                                transition: all 0.25s ease;
                                -moz-transition: all 0.25s ease;
                                -webkit-transition: all 0.25s ease;
                                -o-transition: all 0.25s ease;
                            }
                            .add img {
                                filter: brightness(0) invert(1);
                            }
                        `}</style>
                    </button>
                )
            case 'section':
                return (
                    <div className="section">
                        <ul>
                            <li className="current">Content</li>
                            <li>List</li>
                            <li className="line"></li>
                        </ul>
                        <style jsx>{`
                            .section {
                                border: 0;
                                outline: 0;
                                cursor: pointer;
                                background: #fff;
                                width:220px;
                                height:56px;
                                border-radius: 40px;
                                -webkit-border-radius: 40px;
                                -moz-border-radius: 40px;
                                box-shadow: 0 0 15px rgba(0,0,0,.24);
                                position: fixed;
                                right: 106px;
                                bottom: 36px;
                                z-index: 999;
                                transition: all 0.25s ease;
                                -moz-transition: all 0.25s ease;
                                -webkit-transition: all 0.25s ease;
                                -o-transition: all 0.25s ease;
                            }
                            .section ul{
                                height: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                position: relative;
                            }
                            .section ul li {
                                font-size: 14px;
                                width: 100%;
                                text-align: center;
                                list-style-type: none;
                                position: relative;
                                z-index:1;
                                transition: all 0.25s ease;
                                -moz-transition: all 0.25s ease;
                                -webkit-transition: all 0.25s ease;
                                -o-transition: all 0.25s ease;
                            }
                            .section ul li:hover{
                                color: #888;
                            }
                            .section ul li:first-child {
                                padding: 20px 0;
                                margin-left: 20px;
                            }
                            .section ul li:nth-child(2) {
                                padding: 20px 0;
                                margin-right: 20px;
                            }
                            .section .line {
                                position: absolute;
                                left: 10px;
                                top: 8px;
                                background: #e6142c;
                                box-shadow: 0 0 15px rgba(0,0,0,.3);
                                border-radius: 50px;
                                -webkit-border-radius: 50px;
                                -moz-border-radius: 50px;
                                height: 40px;
                                width: 110px;
                                z-index:0;
                            }
                            .section .current {
                                color: #fff;
                            }
                            .section .current:hover {
                                color: #fff;
                            }
                        `}</style>
                    </div>
                )
            default:
                return <button className={style.r}>{this.props.title}</button>
        }
    }
}

export default connect(mapToProps, fn)(Button)
