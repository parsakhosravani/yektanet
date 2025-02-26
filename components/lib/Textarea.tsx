'use client'

import { FunctionComponent, TextareaHTMLAttributes } from 'react';

interface TextareaPropsType {
    value:string,
    onChange:()=> TextareaHTMLAttributes<HTMLTextAreaElement>['onChange']
}
 
export const Textarea: FunctionComponent<TextareaPropsType> = ({value, onChange}) => {
    

    return ( 
    <textarea
    value={value}
    onChange={onChange}
    />
);

}
 