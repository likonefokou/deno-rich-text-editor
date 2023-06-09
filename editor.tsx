import {
  html,
  Component,
  EditorState,
  EditorView,
  Schema,
  schema,
  addListNodes,
  exampleSetup,
} from "./deps.ts";

export default class Editor extends Component<{onReady: (editor: EditorView) => void}> {
  render() {
    return html`<div id="editor"/>`;
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  componentDidMount(): void {
    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks,
    });

    const editor = new EditorView(document.querySelector('#editor'), {
        state: EditorState.create({
            plugins: exampleSetup({schema: mySchema})
        })
    });
    this.props.onReady(editor);
  }
}
