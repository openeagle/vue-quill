import { defineComponent, onMounted, reactive, ref, watch } from 'vue';
// @ts-ignore
import _Quill from 'quill';
import defaultOptions from './options';

const Quill = (window as any).Quill || _Quill;

export default defineComponent({
  name: 'QuillEditor',
  props: {
    content: String,
    value: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    globalOptions: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  setup(props, { attrs, emit, slots }) {
    const $editor = ref();
    const state = reactive({
      _options: {},
      _content: '',
    });
    let quill: any;
    let content: any;
    onMounted(() => {
      if ($editor.value) {
        // Options
        const options = {
          ...defaultOptions,
          ...props.globalOptions,
          ...props.options,
        };

        // Instance
        quill = new Quill($editor.value, options);

        quill.enable(false);

        // Set editor content
        if (props.value || props.content) {
          quill.pasteHTML(props.value || props.content);
        }

        // Disabled editor
        if (!props.disabled) {
          quill.enable(true);
        }

        // Mark model as touched if editor lost focus
        quill.on('selection-change', (range: any) => {
          if (!range) {
            emit('blur', quill);
          } else {
            emit('focus', quill);
          }
        });

        // Update model if text changes
        quill.on('text-change', (delta: any, oldDelta: any, source: any) => {
          let html = $editor.value.children[0].innerHTML;
          const text = quill.getText();
          if (html === '<p><br></p>') html = '';
          content = html;
          emit('input', content);
          emit('change', { html, text, quill });
        });

        // Emit ready event
        emit('ready', quill);
      }
    });
    watch(
      () => props.content,
      (newVal, oldVal) => {
        if (quill) {
          if (newVal && newVal !== content) {
            content = newVal;
            quill.pasteHTML(newVal);
          } else if (!newVal) {
            quill.setText('');
          }
        }
      },
    );
    watch(
      () => props.value,
      (newVal, oldVal) => {
        if (quill) {
          if (newVal && newVal !== content) {
            content = newVal;
            quill.pasteHTML(newVal);
          } else if (!newVal) {
            quill.setText('');
          }
        }
      },
    );
    watch(
      () => props.disabled,
      (newVal, oldVal) => {
        if (quill) {
          quill.enable(!newVal);
        }
      },
    );
    return () => {
      return (
        <div class="quill-editor">
          {slots.toolbar?.()}
          <div ref={$editor}></div>
        </div>
      );
    };
  },
});
