import React from 'react'
import { Extension } from './Page'
import { getToolBoxXml } from '../blocks'

interface BlocklyViewProps {
  visible: boolean
  xml: string | null
  onChange(xml: string, python: string): void
}

function BlocklyView({ visible, xml, onChange }: BlocklyViewProps): JSX.Element {
  let blocklyDiv: any
  let workspace: Blockly.WorkspaceSvg

  console.log('Blockly: ', Blockly)
  const loadBlockly = async (extensionsActive: Extension[]) => {
    if (blocklyDiv) {
      if (workspace) {
        workspace.dispose()
      }

      const toolbox = await getToolBoxXml(extensionsActive)
      workspace = Blockly.inject(blocklyDiv, {
        zoom: {},
        media: 'blockly/media/',
        collapse: false,
        toolbox,
      }) as Blockly.WorkspaceSvg
    }
  }

  React.useEffect(() => {
    loadBlockly([])
  }, [])

  return <div id="blockly" ref={(div) => (blocklyDiv = div)}></div>
}
export default BlocklyView
