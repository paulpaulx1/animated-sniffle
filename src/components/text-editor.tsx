import MDEditor from '@uiw/react-md-editor';
import { useState, useEffect, useRef } from 'react';
import './text-editor.css';

const TextEditor: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('# Header');
  const markupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        markupRef.current &&
        event.target &&
        markupRef.current.contains(event.target as Node)
      ) {
        return;
      }

      setEditing(false);
    };
    document.addEventListener('click', listener, { capture: true });
    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);
  if (editing) {
    return (
      <div className='text-editor' ref={markupRef}>
        <MDEditor value={value} onChange={(v) => setValue(v || '')} />
      </div>
    );
  }
  return (
    <div className='text-editor card' onClick={() => setEditing(true)}>
      <div className='card-content'>
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
};

export default TextEditor;