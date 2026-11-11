import './App.css'
import { Editor } from '@monaco-editor/react'

function App() {
  return (
    <main className="h-screen w-full bg-gray-950 flex gap-4 p-3">
      <aside className="h-full w-1/4 bg-amber-50 rounded-md"></aside>
      <section className="w-3/4 bg-neutral-800 rounded-md overflow-hidden">
        <Editor
          defaultLanguage="javascript"
          defaultValue="// Hi lol"
          theme="vs-dark"
          height="100%"
        />
      </section>
    </main>
  )
}

export default App