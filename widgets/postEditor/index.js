import {AtomicBlockUtils, ContentBlock, ContentState, Editor, EditorState, KeyBindingUtil, RichUtils, convertFromHTML, convertToRaw, getDefaultKeyBinding} from 'draft-js'
import Category from '../../widgets/category'
import {Component} from 'react'
import Div from '../../components/div'
import Input from '../../components/input'
import Immutable from 'immutable'
import H3 from '../../components/h3'
import PostAvatar from '../../widgets/postAvatar'
import Select from '../../components/select'
import Tags from '../../widgets/tags'
import ThumbnailDnD from '../../widgets/thumbnailDnD'
import Tools from '../../widgets/tools'
import {connect} from 'redux-zero/react'
import fn from '../../states/fn'
import {stateToHTML} from 'draft-js-export-html'
import style from './style.css'

const mapToProps = ({ s , d}) => ({ s, d });
const {hasCommandModifier} = KeyBindingUtil

class PostEditor extends Component {
    constructor(props) {
        super(props)
        this.styling = this.styling.bind(this)
        this.onChange = this.onChange.bind(this)
        this.handleKeyCommand = this.handleKeyCommand.bind(this)
        this.convertFromRaw = this.convertFromRaw.bind(this)
        this.titleKeyDown = this.titleKeyDown.bind(this)
        this.wrapper =  this.wrapper.bind(this)
        this.addImageBlock = this.addImageBlock.bind(this)
        this.addCodeBlock = this.addCodeBlock.bind(this)
        this.addTableBlock = this.addTableBlock.bind(this)
        this.addUlBlock = this.addUlBlock.bind(this)
        this.addOlBlock = this.addOlBlock.bind(this)
        this.addMediaBlock = this.addMediaBlock.bind(this)
        this.dndImages = this.dndImages.bind(this)
        this.toggleTab = this.toggleTab.bind(this)
        this.blockRenderMap = Immutable.Map({
            'header-two': {
                element: 'h2'
            },
            'unstyled': {
                element: 'div',
            }
        })
        this.state = {
            editorState: EditorState.createEmpty(),
            currentKey: '',
            focus: false,
            tab: 0
        }
    }
    onChange = (editorState) => {
        this.setState({editorState})
        let selectionState = editorState.getSelection();
        let anchorKey = selectionState.getAnchorKey();
        let currentContent = editorState.getCurrentContent();
        let currentContentBlock = currentContent.getBlockForKey(anchorKey);
        let start = selectionState.getStartOffset();
        let end = selectionState.getEndOffset();
        let focus = selectionState.getHasFocus();
        let selectedText = currentContentBlock.getText().slice(start, end);
        this.setState({
            currentKey: anchorKey,
            focus
        })
        //console.log(currentContent)
        //console.log(currentContentBlock.getText())
        //console.log(anchorKey)
        //console.log(selectedText)
        //console.log()
    }

    toggleTab = () => {
        this.state.tab === 0 ? this.setState({ tab: 1 }) : this.setState({ tab: 0 })
    }
    addImageBlock = () => {}
    addCodeBlock = () => {}
    addTableBlock = () => {}
    addUlBlock = () => {}
    addOlBlock = () => {}
    addMediaBlock = () => {}
    dndImages = () => {}

    convertFromRaw = () => {
        let raw = convertToRaw(this.state.editorState.getCurrentContent())
        let html = stateToHTML(this.state.editorState.getCurrentContent())
        //console.log(raw)
        //console.log(html)
    }

    wrapper = contentBlock => {
        const type = contentBlock.getType()
        if (type === 'unstyled') {
            return {
                component: Tools,
                props: {
                    currentKey: this.state.currentKey,
                    focus: this.state.focus
                },
                editable: true,
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
            case 'unstyled':
                return 'editor-content-p'
                break;
            default:
                return null
        }
    }

    render() {
        //console.log(this.selectionState)
        //console.log(this.currentContentBlock.text)
        //console.log(this.contentState.getBlockMap().length)
        //console.log(this.contentState.getFirstBlock().getText())
        //console.log(this.contentState.getLastBlock().getText())
        //console.log(this.contentState.createFromBlockArray)
        //console.log(this.editorState.currentContent)
        return (
            <section className={style.r}>
                <section className={style.center}>
                    <div className={style.centerWrap}>
                        <div className={style.tab} style={this.state.tab === 1 ? {left: '-100%'} : {left: 0} }>
                            <div className={style.content}>
                                <div className={style.type}>
                                    <Select type="list" size="m" value="News" />
                                </div>
                                <h1 ref="title" className={style.title} placeholder="Title" onKeyDown={this.titleKeyDown} contentEditable suppressContentEditableWarning></h1>
                                <div className={style.avatarWrap}>
                                </div>
                                <div className={style.editor}>
                                    <Editor
                                        ref="content"
                                        editorState={this.state.editorState}
                                        handleKeyCommand={this.handleKeyCommand}
                                        placeholder="Write your story..."
                                        blockRenderMap={this.blockRenderMap}
                                        blockRendererFn={this.wrapper}
                                        blockStyleFn={this.styling}
                                        onChange={this.onChange}
                                    />
                                    </div>
                                    <button onClick={this.convertFromRaw}>Convert from Raw</button>
                                </div>
                            </div>
                            <div className={style.tab} style={this.state.tab === 0 ? {left: '100%'} : {left: 0} }>
                                <div className={style.content}>
                                    <p>hodsa</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.tabControll}>
                                <ul>
                                    <li onClick={this.toggleTab} style={this.state.tab === 1 ? {background: '#eee'} : {background: '#fff'} } >Content</li>
                                    <li onClick={this.toggleTab} style={this.state.tab === 0 ? {background: '#eee', color: '#ccc'} : {background: '#fff'} } >Items</li>
                                </ul>
                        </div>
                    </section>
                    <section className={style.right}>
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
//<ThumbnailDnD />

export default connect(mapToProps, fn)(PostEditor)
