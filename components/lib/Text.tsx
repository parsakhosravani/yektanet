'use client'

import React,{FunctionComponent} from 'react'

interface TextPropsType {
    text:string
}
 
export const Text: FunctionComponent<TextPropsType> = ({text}) => {
    return ( <span>{text}</span> );
}
 