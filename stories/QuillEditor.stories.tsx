import { QuillEditor } from '../src/index';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
  title: 'Example/QuillEditor',
  component: QuillEditor,
  argTypes: {
    content: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template: any = (args: any) => ({
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  render() {
    return <QuillEditor {...args}></QuillEditor>;
  },
});

export const Content = Template.bind({});
Content.args = {
  content: "I'm content of quill editor.",
};

export const Value = Template.bind({});
Value.args = {
  value: "I'm value of quill editor.",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: "I'm disabled quill editor.",
};

export const Options = Template.bind({});
Options.args = {
  options: {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ['clean'],
        ['link', 'image', 'video'],
      ],
    },
  },
  value: "I'm options of quill editor.",
};
