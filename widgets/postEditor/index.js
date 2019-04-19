import {Component} from 'react'
import {connect} from 'redux-zero/react';
import fn from '../../states/fn';
import style from './style.css'
import {Editor, EditorState, ContentState, AtomicBlockUtils, RichUtils, getDefaultKeyBinding, KeyBindingUtil, convertToRaw, convertFromHTML} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import Div from '../../components/div'
import H1 from '../../components/h1'
import H3 from '../../components/h3'
import Select from '../../components/select'
import Category from '../../widgets/category'
import Tags from '../../widgets/tags'
import ThumbnailDnD from '../../widgets/thumbnailDnD'
import PostAvatar from '../../widgets/postAvatar'
import Tools from '../../widgets/tools'
import Immutable from 'immutable'

const mapToProps = ({ s , d}) => ({ s, d });
const {hasCommandModifier} = KeyBindingUtil

class PostEditor extends Component {
    constructor(props) {
        super(props)
        this.styling = this.styling.bind(this)
        this.onChange = (editorState) => this.setState({editorState})
        this.insertBlocksFromHtml = this.insertBlocksFromHtml.bind(this)
        this.handleKeyCommand = this.handleKeyCommand.bind(this)
        this._onBoldClick = this._onBoldClick.bind(this)
        this.convertFromRaw = this.convertFromRaw.bind(this)
        this.titleKeyDown = this.titleKeyDown.bind(this)
        this.wrapper =  this.wrapper.bind(this)
        this.blockRenderMap = Immutable.Map({
            'header-two': {
                element: 'h2'
            },
            'unstyled': {
                element: 'div',
            }
        })
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    convertFromRaw = () => {
        let contentState = this.state.editorState.getCurrentContent()
        let raw = convertToRaw(contentState)
        let html = stateToHTML(contentState)
        //console.log(contentState)
        //console.log(raw)
        //console.log(html)
    }

    wrapper = contentBlock => {
        const type = contentBlock.getType()
        if (type === 'unstyled') {
            return {
                component: Tools,
                editable: true,
                props: {
                    foo: 'bar',
                },
            }
        }
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
        //console.log(type)
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

    insertBlocksFromHtml = (editorState, htmlString) => {
        const newBlockMap = htmlToDraft(htmlString);
        const contentState = editorState.getCurrentContent();
        const blockMap = contentState.getBlocksAsArray();
        newBlockMap.contentBlocks = blockMap.concat(newBlockMap.contentBlocks);

        const newContentState = ContentState.createFromBlockArray(newBlockMap, contentState.getEntityMap());
        return EditorState.moveSelectionToEnd(EditorState.createWithContent(newContentState));
    }

    _onBoldClick() {
        this.insertBlocksFromHtml(this.state.editorState, '<h1>Hogehoge</h1>')
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    render() {
        const e =this.state.editorState
        const c = e.getCurrentContent()
        const m = c.getBlocksAsArray()
        const s = e.getSelection()
        const k = s.getAnchorKey()
        //console.log(m)
        //console.log(s)
        //console.log(k)
        return (
            <section className={style.r}>
                <section className={style.center}>
                    <div className={style.content}>
                        <div className={style.type}>
                            <Select type="list" size="m" value="News" />
                        </div>
                        <h1 ref="title" className={style.title} placeholder="Title" onKeyDown={this.titleKeyDown} contentEditable suppressContentEditableWarning>Oshima Island’s Perfect Guide -Must-see spots, Activities, Accommodation and Access</h1>
                        <div className={style.avatarWrap}>
                        </div>
                        <div className={style.editor}>
                            <Editor
                                ref="content"
                                editorState={this.state.editorState}
                                handleKeyCommand={this.handleKeyCommand}
                                onChange={this.onChange}
                                placeholder="Edit"
                                blockRenderMap={this.blockRenderMap}
                                blockRendererFn={this.wrapper}
                                blockStyleFn={this.styling}
                            />
                        </div>
                    </div>
                </section>
                <section className={style.right}>
                        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                        <button onClick={this.convertFromRaw}>Convert from Raw</button>
                    <ThumbnailDnD />
                    <Div type="m">
                        <H3 title="Author" />
                        <Div type="s">
                            <PostAvatar />
                        </Div>
                    </Div>
                    <Div type="m">
                        <H3 title="Category" />
                        <Div type="s">
                            <Category />
                        </Div>
                    </Div>
                    <Div type="m">
                        <H3 title="Tags" />
                        <Div type="s">
                            <Tags />
                        </Div>
                    </Div>
                    <Div type="m">
                        <H3 title="State" />
                        <Div type="s">
                        </Div>
                    </Div>
                </section>
            </section>
        );
    }
}

export default connect(mapToProps, fn)(PostEditor)
