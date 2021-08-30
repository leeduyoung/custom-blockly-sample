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
  let workspace: Blockly.WorkspaceSvg | null = null

  console.log('Blockly: ', Blockly)
  const loadBlockly = async (extensionsActive: Extension[]): Promise<void> => {
    if (blocklyDiv) {
      if (workspace) {
        workspace.dispose()
      }

      // FIXME:
      const toolbox = dummyData
      await getToolBoxXml(extensionsActive)
      // const toolbox = await getToolBoxXml(extensionsActive)

      workspace = Blockly.inject(blocklyDiv, {
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
        },
        media: 'blockly/media/',
        collapse: false,
        toolbox,
      }) as Blockly.WorkspaceSvg

      await workspace.addChangeListener(() => {
        const python = getPython()
        onChange('', python)
      })
    }
  }

  const getPython = (): string => {
    if (!workspace) {
      throw new Error('No workspace!')
    }

    return Blockly.Python.workspaceToCode(workspace)
  }

  React.useEffect(() => {
    loadBlockly(['Web General'])
  }, [])

  return <div id="blockly" ref={(div) => (blocklyDiv = div)}></div>
}
export default BlocklyView

const dummyData = `
<xml><category name="Imports" colour="#ff0066" iconclass="blocklyTreeIconCustom imports">

  <label text="Imports" web-class="myLabelStyle"></label>

  <block type="import_time"></block>
  <block type="import_math"></block>
  <block type="random"></block>
  <block type="import_pygal"></block>
  <block type="import_processing"></block>

</category>
<category name="Variables" custom="VARIABLE" colour="#0000CD" iconclass="blocklyTreeIconCustom variables">
  <button text="A button" callbackKey="myFirstButtonPressed"></button>
  <block type="variables_set">
    <value name="varset">
      <shadow type="textinline">
        <field name="text">0</field>
      </shadow>
    </value>
  </block>
  <block type="variables_get"></block>
  <block type="textinline"></block>
</category><category name="Statements" colour="#F89621" iconclass="blocklyTreeIconCustom statements">

  <label text="Statements" web-class="myLabelStyle"></label>
  <block type="websleepnew">
      <value name="sleep">
        <shadow type="textinline">
          <field name="text">1</field>
        </shadow>
      </value>
  </block> 
 
  <block type="webtypeanything">
      <value name="stuff">
        <shadow type="textinline">
          <field name="text">     </field>
        </shadow>
      </value>
  </block>

  
  <!-- <block type="webequalsblocknew">
      <value name="text1">
        <shadow type="textinline">
          <field name="text">var</field>
        </shadow>
      </value>
      <value name="text2">
        <shadow type="textinline">
          <field name="text">0</field>
        </shadow>
      </value>
  </block> -->

  <!-- <block type="webtextinline"></block> -->
  <block type="webdf">
    <value name="def">
      <shadow type="textinline">
          <field name="text">function_name</field>
        </shadow>
      </value>
    <value name="params">
      <shadow type="textinline">
          <field name="text"></field>
        </shadow>
      </value>
  </block>
  <block type="webpass"></block>

  <block type="webprintnew">
      <value name="text">
        <shadow type="textinline">
          <field name="text">Hello World</field>
        </shadow>
      </value>
  </block>
  <block type="webvarprint">
  <value name="var">
        <shadow type="textinline">
          <field name="text">Variable</field>
        </shadow>
      </value>
  </block>
  <block type="input_web">
  <value name="NAME">
        <shadow type="stringinline">
          <field name="text">What is your name?</field>
        </shadow>
      </value>
  </block>
  <block type="global">
      <value name="text">
        <shadow type="textinline">
          <field name="text">variable</field>
        </shadow>
      </value>
  </block>
  <block type="webint">
    <value name="bool">
      <shadow type="textinline">
        <field name="text">1</field>
      </shadow>
    </value>
  </block>

  <block type="webstr">
    <value name="bool">
      <shadow type="textinline">
        <field name="text">1</field>
      </shadow>
    </value>
  </block>
  <block type="webcomma">
    <value name="in1">
      <shadow type="stringinline">
        <field name="text">1</field>
      </shadow>
    </value>
    <value name="in2">
      <shadow type="stringinline">
        <field name="text">1</field>
      </shadow>
    </value>
  </block>
  <block type="stringinline"></block>

</category>
<category name="Logic" colour="#49B04D" iconclass="blocklyTreeIconCustom logic">

  <label text="Logic" web-class="myLabelStyle"></label>
  <block type="webifinline">
    <value name="iftext">
      <shadow type="textinline">
        <field name="text">True</field>
      </shadow>
    </value>
  </block>
  <block type="webelifinline">
    <value name="iftext">
      <shadow type="textinline">
        <field name="text">True</field>
      </shadow>
    </value> 
  </block>
  <block type="webelse"></block>
  <block type="webinternal">
    <value name="first">
      <shadow type="textinline"> 
        <field name="text">0</field>
      </shadow>
    </value>
    <value name="last">
      <shadow type="textinline">
        <field name="text">0</field>
      </shadow>
    </value>
  </block>
  <block type="webandor">
    <value name="first">
      <shadow type="textinline">
        <field name="text">True</field>
      </shadow>
    </value>
    <value name="last">
      <shadow type="textinline">
        <field name="text">True</field>
      </shadow>
    </value>
  </block>
  <block type="webnot">
    <value name="bool">
      <shadow type="textinline">
        <field name="text">True</field>
      </shadow>
    </value>
  </block>

</category>
<category name="Lists" colour="#15BAD4" iconclass="blocklyTreeIconCustom lists">

  <label text="Lists" web-class="myLabelStyle"></label>
  <block type="create_list">
    <value name="text">
      <shadow type="textinline">
        <field name="text">1, 2, 3, 4</field>
      </shadow>
    </value>
  </block>

  <block type="calllist"></block>

  <block type="selectlist">
    <value name="NAME">
      <shadow type="textinline">
        <field name="text">3</field>
      </shadow>
    </value>
  </block>

  <block type="selectlist2">
    <value name="NAME">
      <shadow type="textinline">
        <field name="text">3</field>
      </shadow>
    </value>
  </block>

  <block type="optionlist">
    <value name="text">
      <shadow type="textinline">
        <field name="text">3</field>
      </shadow>
    </value>
  </block>

</category>
<category name="Loops" colour="#644A9E" iconclass="blocklyTreeIconCustom loops">

  <label text="Loops" web-class="myLabelStyle"></label>

  <block type="webwhileout">
    <value name="cond">
      <shadow type="textinline">
        <field name="text">True</field>
      </shadow>
    </value>
  </block>
  <block type="webfor">
    <value name="letter">
      <shadow type="textinline">
        <field name="text">i</field>
      </shadow>
    </value>
    <value name="no">
      <shadow type="textinline">
        <field name="text">number</field>
      </shadow>
    </value>
  </block>
  <block type="webadvancedforloops">
    <value name="x">
      <shadow type="textinline">
        <field name="text">x</field>
      </shadow>
    </value>
    <value name="y">
      <shadow type="textinline">
        <field name="text">y</field>
      </shadow>
    </value>
  </block>
  <block type="web_break"></block>
  <block type="loop_get"></block>
</category>
<category name="Definitions" colour="#CDDA36" iconclass="blocklyTreeIconCustom definitions">

  <label text="Definitions" web-class="myLabelStyle"></label>
  <block type="webdefine">
    <value name="1">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
    <value name="2">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>
  <block type="webreturn2">
    <value name="return">
      <shadow type="textinline">
        <field name="text"></field> 
      </shadow>
    </value>
  </block>
  <block type="webclass">
    <value name="class">
      <shadow type="textinline">
        <field name="text">classname</field>
      </shadow>
    </value>
  </block>
  <block type="self">
    <value name="varset">
      <shadow type="textinline">
        <field name="text">0</field>
      </shadow>
    </value>
  </block>
</category>
<category name="Math" colour="#1B173D" iconclass="blocklyTreeIconCustom math">

  <label text="Math" web-class="myLabelStyle"></label>

  <block type="operators2">
    <value name="first">
      <shadow type="textinline">
        <field name="text">True</field>
      </shadow>
    </value>
    <value name="last">
      <shadow type="textinline">
        <field name="text">True</field>
      </shadow>
    </value>
  </block>

  <block type="math_acos">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_acosh">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_asin">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_asinh">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_atan">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_atanh">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_ceil">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_cos">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_acosh">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_degrees">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_exp">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_fabs">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_factorial">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_floor">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_hypot">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_log">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_log10">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_pow">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_radians">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_sin">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_sinh">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_st">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_tan">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_tanh">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="math_trunc">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>


</category>
<category name="Turtle" colour="240" iconclass="blocklyTreeIconCustom turtle">
    <block type="import_turtle"></block>
    <block type="turtle"></block>
    <block type="screeninit"></block>
    <block type="colourmode">
        <value name="text">
            <shadow type="textinline">
                <field name="text">255, 0, 0</field>
            </shadow>
        </value>
    </block>
    <block type="background">
        <value name="text">
            <shadow type="textinline">
                <field name="text">255, 0, 0</field>
            </shadow>
        </value>
    </block>
    <block type="directions">
        <value name="text">
            <shadow type="textinline">
                <field name="text">90</field>
            </shadow>
        </value>
    </block>
    <block type="turtlespeed">
        <value name="text">
            <shadow type="textinline">
                <field name="text">100</field>
            </shadow>
        </value>
    </block>
    <block type="turtleshape">
        <value name="text">
            <shadow type="stringinline">
                <field name="text">turtle</field>
            </shadow>
        </value>
    </block>
    <block type="colour">
        <value name="text">
            <shadow type="textinline">
                <field name="text">255, 0, 0</field>
            </shadow>
        </value>
    </block>
    <block type="colourpen">
        <value name="text">
            <shadow type="textinline">
                <field name="text">255, 0, 0</field>
            </shadow>
        </value>
    </block>
    <block type="penud"></block>
    <block type="penwidth">
        <value name="text">
            <shadow type="textinline">
                <field name="text">20</field>
            </shadow>
        </value>
    </block>
    <block type="circle">
        <value name="text">
            <shadow type="textinline">
                <field name="text">50</field>
            </shadow>
        </value>
    </block>
    <block type="goto">
        <value name="text">
            <shadow type="textinline">
                <field name="text">5, 5</field>
            </shadow>
        </value>
    </block>
</category>  
<category name="Graphs" colour="#008FD1" iconclass="blocklyTreeIconCustom graphs">


  <label text="Graphs" web-class="myLabelStyle"></label>

  <block type="chart_type">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="chart_title">
    <value name="text">
      <shadow type="stringinline">
        <field name="text">My awesome chart</field>
      </shadow>
    </value>
  </block>

  <block type="chart_add">
    <value name="text">
      <shadow type="stringinline">
        <field name="text">Label</field>
      </shadow>
    </value>

    <value name="text1">
      <shadow type="textinline">
        <field name="text">1, 3, 8, 3</field>
      </shadow>
    </value>
  </block>

  <block type="chart_xlabels">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="chart_render"></block>

</category>
<category name="Random" colour="#8BC248" iconclass="blocklyTreeIconCustom random">


  <label text="Random" web-class="myLabelStyle"></label>

  <block type="random_choice">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="random_randint">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="random_random">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>
 
  <block type="random_randrange">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="random_seed">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="random_shuffle">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

    <block type="random_uniform">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

</category>
<category name="Processing" colour="#c51a4a" iconclass="blocklyTreeIconCustom processing">


  <label text="Processing" web-class="myLabelStyle"></label>

  <block type="p_arc">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_background">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_blue">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_red">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_green">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_colorMode">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_ellipse">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_ellipseMode">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_exit"></block>

  <block type="p_fill">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_framerate_set">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_framerate_get"></block>

  <block type="p_get">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_line">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_loadPixels">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_loop">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_noloop">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_noloop">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_nofill">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_nosmooth">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_smooth">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_nostroke">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_point">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_quad">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_rect">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_rectmode">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_rotate">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_run"></block>

  <block type="p_scale">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_set">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_size">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_stroke">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_nostroke">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_stroke3">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_text">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_translate">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

  <block type="p_triangle">
    <value name="text">
      <shadow type="textinline">
        <field name="text"></field>
      </shadow>
    </value>
  </block>

</category>
</xml>
`
