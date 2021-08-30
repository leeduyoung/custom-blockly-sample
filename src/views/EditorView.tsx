import Editor from '@monaco-editor/react'
import React from 'react'

interface EditorViewProps {
  code: string
}
function EditorView({ code }: EditorViewProps): JSX.Element {
  const handleEditorChange = (value: string | undefined) => {
    console.log('here is the current model value:', value)
  }

  console.log(code)
  return (
    <div
      style={{
        display: 'inline-block',
        width: '40%',
        height: '100%',
      }}
    >
      <Editor
        className="editor"
        height="100%"
        defaultLanguage="python"
        defaultValue={'# some text'}
        value={code}
        theme={'vs-dark'}
        onChange={handleEditorChange}
        options={{ fontSize: 16 }}
      />
    </div>
  )
}

export default EditorView
