import React from 'react'
import { FunctionComponent , FunctionComponent2 , FunctionComponent3 , FunctionComponent4 ,  FunctionComponent5 , FunctionComponent6} from "./function-component";

const ReactComponent = () => {
  const functionComponent = FunctionComponent()
  return (
    <>
    {functionComponent}
    {FunctionComponent()}
    {/* Call Function Component - JSX Format  */}
    <FunctionComponent/>
    {FunctionComponent2('internalcss' , 'this is component2')}

     {/* کاری که پراپز برای ما انجام میدهد دقیقا مشابه کاری است که در کامپوننت 3 اتفاق میفتد */}
    {FunctionComponent3( {title: 'internalcss' , message: 'this is component3'})}
    <FunctionComponent4 title="internalcss" message="this is component4 (with props)" />
    <FunctionComponent4 title={"internalcss"} message={'this is component4 (with props)'} />

    <FunctionComponent5 title={"children & props & destructure props " } message={'this is component5'}>
    <p>children content</p>
    </FunctionComponent5>
    <FunctionComponent6 title={"children & props & destructure props " } message={'this is component6'}>
    <p>children content</p>
    </FunctionComponent6>
    </>
  )
}

export default ReactComponent