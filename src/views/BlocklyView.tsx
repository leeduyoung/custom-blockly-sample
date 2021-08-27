import React from 'react'
import { Extension } from './Page'

interface BlocklyViewProps {
  visible: boolean
  xml: string | null
  onChange(xml: string, python: string): void
}

function BlocklyView({ visible, xml, onChange }: BlocklyViewProps): JSX.Element {
  const loadBlockly = (extensionsActive: Extension[]) => {
    // TODO:
  }

  React.useEffect(() => {
    loadBlockly([])
  }, [])

  return <div id="blockly"></div>
}
export default BlocklyView
