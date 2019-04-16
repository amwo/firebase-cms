import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import style from './style.css'
import {Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil, convertToRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import Div from '../../components/div'
import H1 from '../../components/h1'
import H3 from '../../components/h3'
import Select from '../../components/select'
import Category from '../../widgets/category'
import Tags from '../../widgets/tags'
import ThumbnailDnD from '../../widgets/thumbnailDnD'
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
                element: 'div'
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
        console.log(command)
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
        console.log(type)
        switch(type) {
            case 'bold':
                return 'editor-content-bold'
                break;
            case 'unstyled':
                return 'editor-content-p'
                break;
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
                <section className={style.center}>
                    <div className={style.content}>
                        <div className={style.type}>
                            <Select type="list" size="m" value="News" />
                        </div>
                    <h1 ref="title" className={style.title} placeholder="Title" onKeyDown={this.titleKeyDown} contentEditable suppressContentEditableWarning>Oshima Island’s Perfect Guide -Must-see spots, Activities, Accommodation and Access</h1>
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
                        <ThumbnailDnD />
                    <Div type="m">
                        <H3 title="Category" />
                        <Category />
                    </Div>
                    <Div type="m">
                        <H3 title="Tags" />
                        <Tags />
                    </Div>
                    <Div type="m">
                        <H3 title="State" />
                    </Div>
                </section>
            </section>
        );
    }
}

export default connect(mapToProps, fn)(PostEditor)
