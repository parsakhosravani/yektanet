'use client'

import React,{ButtonHTMLAttributes, FunctionComponent} from 'react'

interface ButtonPropsType {
    textButton:string
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
    onClick?:()=>void
}

export const Button: FunctionComponent<ButtonPropsType> = ({textButton,type,onClick}) => {
    return ( <button onClick={onClick} type={type}>{textButton}</button> );
}
 