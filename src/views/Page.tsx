import React, { useState } from 'react'
import BlocklyView from './BlocklyView'

const ViewModeBlockly = 'blocks'
const ViewModePython = 'python'
const ViewModeSplit = 'python'

type ViewMode = typeof ViewModeBlockly | typeof ViewModePython | typeof ViewModeSplit

export type Extension =
  | 'edubit'
  | 'DriveBit'
  | 'BitBotXL'
  | 'MoveMini'
  | 'Minibit'
  | 'micro:bit General'
  | 'Pi General'
  | 'Web General'
  | 'CircuitPython General'
  | 'Calliope General'
  | 'scrollbit'
  | 'enviro:bit'
  | 'GiggleBot'
  | 'EnviroBit'
  | 'Circuit Playground Easy'

interface DocumentState {
  xml: string | null
  python: string | null
  pythonClean: boolean
}

interface PageState {
  // platform?: PlatformInterface
  viewMode: ViewMode
  includeTurtle: boolean
  modal:
    | null
    | 'platform'
    | 'turtle'
    | 'IE'
    | 'generating'
    | 'extensionsnew'
    | 'share'
    | 'shareoptions'
    | 'terminal'
    | 'languages'
    | 'samples'
    | 'themes'
    | 'extensions'
    | 'functions'
    | 'pythonOverwritten'
    | 'https'
    | 'noCode'
    | 'codeOverwrite'
    | 'progress'
    | 'auth'
    | 'error'
    | 'files'
  prevModal:
    | null
    | 'platform'
    | 'turtle'
    | 'IE'
    | 'generating'
    | 'share'
    | 'extensionsnew'
    | 'shareoptions'
    | 'terminal'
    | 'languages'
    | 'samples'
    | 'themes'
    | 'extensions'
    | 'functions'
    | 'pythonOverwritten'
    | 'https'
    | 'noCode'
    | 'codeOverwrite'
    | 'progress'
    | 'auth'
    | 'error'
    | 'files'
  extensionsActive: Extension[]
  progress: number
  shareURL: string
  doc: Readonly<DocumentState>
  fileName: string
  shareFileName: string
}

function Page(): JSX.Element {
  const [values, setValues] = useState<PageState>(initState)

  const onBlocklyChange = (xml: string, python: string) => {
    console.log('xml: ', xml)
    console.log('python: ', python)
  }

  return (
    <section id="workspace">
      <BlocklyView
        visible={values.viewMode === 'blocks'}
        xml={values.doc.xml}
        onChange={(xml, python) => onBlocklyChange(xml, python)}
      />
    </section>
  )
}
export default Page

const initState: PageState = {
  viewMode: ViewModeBlockly,
  modal: 'platform',
  includeTurtle: false,
  prevModal: null,
  extensionsActive: ['Web General'],
  progress: 0,
  shareURL: '',
  shareFileName: '',
  fileName: 'Untitled',
  doc: {
    xml: null,
    python: null,
    pythonClean: true,
  },
}
