import {Component} from 'react'
import {connect} from 'redux-zero/react'
import style from './style.css'
import Link from 'next/link'
import ICON_SETTINGS from '../../assets/icons/icon-settings.svg'

const mapToProps = ({ f }) => ({ f })

class ProjectNavigation extends Component {
    constructor(props) {
        super(props)
        this.sort = this.sort.bind(this)
        this.state = {}
    }

    sort = (obj) => {
        let arr = []
        for(let k in obj) {
            arr.push(obj[k])
        }
        // Sort type string
        arr = arr.sort((p,n)=> {
            if (p.type > n.type) {
                return 1
            } else {
                return -1
            }
        })
        // Sort each group
        let result = {}
        for (let i = 0, prev = {},r = {}; i < arr.length; i++) {
            if(prev.type === arr[i].type) {
                result[arr[i].type] = [...result[arr[i].type], arr[i]]
            } else {
                result[arr[i].type] = [arr[i]]
            }
            prev = arr[i]
        }
        return result
    }


    render() {
        const Menu = () => {
            if(this.props.f.settings.collections) {
                let data = this.sort(this.props.f.settings.collections)

                let Group = Object.keys(data).map((k, i) => {
                    data[k] = data[k].sort((p,n)=> {
                        if (p.title > n.title) {
                            return 1
                        } else {
                            return -1
                        }
                    })
                    let Items = data[k].map((d,i) => {
                        return <li key={i}><Link href={`/page?title=${d.title.toLowerCase()}`} as={`/${d.title.toLowerCase()}`}><a><i><img src={ICON_SETTINGS} width="" height="15" alt="" /></i>{d.title}</a></Link></li>
                    })
                    return (
                        <div key={i}>
                            <section className={style.hr}>
                                <span>{k}</span>
                            </section>
                            <ul>
                                    {Items}
                            </ul>
                        </div>
                    )
                })

                return <nav>{Group}</nav>
            } else {
                return(
                    <nav>
                        <section className={style.hr}>
                            <span>Skelton</span>
                        </section>
                        <ul>
                            <li>Skelton</li>
                            <li>Skelton</li>
                        </ul>
                    </nav>
                )
            }
        }

        return <Menu />
    }
}

export default connect(mapToProps)(ProjectNavigation)
