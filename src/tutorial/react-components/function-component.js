import React from 'react'
// import React , {PureComponent} from 'react'

// function FunctionComponent(){}

// let | const FunctionComponent = function (){return JSX}

// arrow-function
// let | const FunctionComponent = () => {return JSX}
const componentStyle ={backgroundColor:'#f1f5cc', color:'#000',margin:'20px auto',textAlign:'center' }

export const FunctionComponent = () => {
    // inline Styles
    return(
        <div style={{backgroundColor:'#f1f5', color:'#f5f5f5',margin:'20px auto',textAlign:'center' }}>
            <hr />
            <h2>
                Hello World ! |  React FunctionComponent 
            </h2>
        <h3>
           Emmet 
           <br/>
           method 1:  emmet - setting - search - lang - emmet - add item - key:javascript & value:javascriptreact = enable emmet in js file 
           <br/>
           method 2:  you can use .jsx for use emmet in react  
        </h3>
        </div>
    )
}
export const FunctionComponent2 = (title , message) => {
    // internal Style 
    return(
        <div style={componentStyle}>
            <hr />
            <h2>{title}</h2>
        <h3>{message}
        </h3>
        </div>
    )
}

export const FunctionComponent3 = (options) => {
    // internal Style 
    return(
        <div style={componentStyle}>
            <hr />
            <h2>
               {options.title} 
            </h2>
        <h3>
           {options.message} 
        </h3>
        </div>
    )
}

// Using Props
export const FunctionComponent4 = (props) => {
    // internal Style 
    return(
        <div style={componentStyle}>
            <hr />
            <h2>
               {props.title} 
            </h2>
        <h3>
           {props.message} 
        </h3>
        </div>
    )
}


// Using Props with destructure 
export const FunctionComponent5 = (props) => {
    const {title , message , children} = props
    // internal Style 
    return(
        <div style={componentStyle}>
            <hr />
            <h2>
               {title} 
            </h2>
        <h3>
           {message} 
        </h3>
        {children}
        </div>
    )
}

// Using Props with destructure method2 
export const FunctionComponent6 = ({title , message , children}) => {
    // internal Style 
    return(
        <div style={componentStyle}>
            <hr />
            <h2>
               {title} 
            </h2>
        <h3>
           {message} 
        </h3>
        {children}
        </div>
    )
}
