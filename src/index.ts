import { App } from 'vue';
// @ts-ignore
import _Quill from 'quill';
import QuillEditor from './QuillEditor';

const Quill = (window as any).Quill || _Quill;

const install = (app: App, globalOptions: any) => {
  if (globalOptions) {
    QuillEditor.props.globalOptions.default = () => globalOptions;
  }
  app.component(QuillEditor.name, QuillEditor);
};

const VueQuillEditor = { Quill, QuillEditor, install };

export default VueQuillEditor;
export { Quill, QuillEditor, install };
