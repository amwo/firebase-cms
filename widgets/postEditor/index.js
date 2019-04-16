import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import style from './style.css'
import {Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil, convertToRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import H1 from '../../components/h1'
import Select from '../../components/select'
import Immutable from 'immutable'

const mapToProps = ({ s , d}) => ({ s, d });
const {hasCommandModifier} = KeyBindingUtil

class PostEditor extends Component {
    constructor(props) {
        super(props)
        this.styling = this.styling.bind(this)
        this.onChange = (editorState) => this.setState({editorState})
        this.handleKeyCommand = this.handleKeyCommand.bind(this)
        this._onBoldClick = this._onBoldClick.bind(this)
        this.convertFromRaw = this.convertFromRaw.bind(this)
        this.titleKeyDown = this.titleKeyDown.bind(this)
        this.blockRenderMap = Immutable.Map({
            'header-two': {
                element: 'h2'
            },
            'unstyled': {
                element: 'h2'
            }
        })
        this.state = {
            editorState: EditorState.createEmpty(),
            raw: ''
        }
    }
    convertFromRaw = () => {
        let contentState = this.state.editorState.getCurrentContent()
        let raw = convertToRaw(contentState)
        let html = stateToHTML(contentState)
        console.log(contentState)
        console.log(raw)
        console.log(html)
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState)
            return 'handled';
        }
        return 'not-handled'
    }

    titleKeyDown = e => {
        if(e.keyCode === 13) {
            e.preventDefault()
            this.refs['content'].focus()
        }
    }

    styling = (content) => {
        const type = content.getType();
        switch(type) {
            case 'blockquote':
                return 'superFancyBlockquote';
            case 'bold':
                return 'superFancyBlockquote';
            default:
                return null
        }
    }

    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    render() {
        return (
            <section className={style.r}>
                <section className={style.left}>
                    <div className={style.default}>
                        <div className={style.typeWrap}>
                            <Select type="list" size="l" value="News" />
                        </div>
                        <ul>
                            <li>Content</li>
                            <li>Items</li>
                        </ul>
                    </div>
                </section>
                <section className={style.center}>
                    <div className={style.content}>
                    <h1 ref="title" className={style.title} placeholder="Title" onKeyDown={this.titleKeyDown} contentEditable></h1>
                    <div className={style.editor}>
                        <Editor
                            ref="content"
                            editorState={this.state.editorState}
                            handleKeyCommand={this.handleKeyCommand}
                            onChange={this.onChange}
                            placeholder="Edit"
                            blockRenderMap={this.blockRenderMap}
                            blockStyleFn={this.styling}
                        />
                    </div>
                    <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                    <button onClick={this.convertFromRaw}>Convert from Raw</button>
                    </div>
                </section>
                <section className={style.right}>
                </section>
            </section>
        );
    }
}

export default connect(mapToProps, fn)(PostEditor)
