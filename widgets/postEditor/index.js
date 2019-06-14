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
import DragAndDrop from '../../widgets/dragAndDrop'
import Tools from '../../widgets/tools'
import {connect} from 'redux-zero/react'
import fn from '../../states/fn'
import {stateToHTML} from 'draft-js-export-html'
import style from './style.css'
import Cropper from 'cropperjs';

const mapToProps = ({ s , d, f}) => ({ s, d ,f});
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
        this.titleFocus = this.titleFocus.bind(this)
        this.titleFocusOut = this.titleFocusOut.bind(this)
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
            tab: 0,
        }
    }

    componentWillMount() {
        this.props.initPost({
            title: '',
            thumbnail: '',
        })
    }

    titleFocus = () => {
        this.props.showComponents()
    }

    titleFocusOut = () => {
        this.props.hideComponents()
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
        console.log(html)
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
        //this.state.focus ? this.props.showComponents() : this.props.hideComponents()
        return (
            <section className={style.r}>
                <section className={style.center}>
                    <div className={style.centerWrap}>
                        <div className={style.tab} style={this.state.tab === 1 ? {left: '-100%'} : {left: 0} }>
                            <div className={style.content}>
                                <div className={style.type}>
                                    <Select type="list" size="m" value="News" />
                                </div>
                                <h1 ref="title" onBlur={this.titleFocusOut} onFocus={this.titleFocus} className={style.title} placeholder="Title" onKeyDown={this.titleKeyDown} contentEditable suppressContentEditableWarning></h1>
                                <div className={style.avatarWrap}>
                                </div>
                                <div className={style.editor}>
                                    <Editor
                                        onFocus={this.titleFocus}
                                        onBlur={this.titleFocusOut}
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
                                    <DragAndDrop />
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Thumbnail</th>
                                                <td><ThumbnailDnD /></td>
                                            </tr>
                                            <tr>
                                                <th>Street No.</th>
                                                <td><Input type="text" size="s" value="noen" /></td>
                                            </tr>
                                            <tr>
                                                <th>Build. Name</th>
                                                <td><Input type="text" size="s" value="noen" /></td>
                                            </tr>
                                            <tr>
                                                <th>Address</th>
                                                <td><Input type="text" size="s" value="noen" /></td>
                                            </tr>
                                            <tr>
                                                <th>Postal Code</th>
                                                <td><Input type="text" size="s" value="noen" /></td>
                                            </tr>
                                            <tr>
                                                <th>Phone Number</th>
                                                <td><Input type="text" size="s" value="noen" /></td>
                                            </tr>
                                            <tr>
                                                <th>Website</th>
                                                <td><Input type="text" size="s" value="noen" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className={style.tabControll}>
                            <ul>
                                <li onClick={this.toggleTab} style={this.state.tab === 1 ? {background: '#eee', color: '#ccc'} : {background: '#fff'} } >Content</li>
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

export default connect(mapToProps, fn)(PostEditor)
