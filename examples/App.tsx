import { defineComponent } from 'vue';
import { QuillEditor } from '@/index';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default defineComponent({
  render() {
    return (
      <div>
        <QuillEditor />
      </div>
    );
  },
});
