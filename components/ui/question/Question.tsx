'use client'
import { Text } from '@/components/lib/Text';
import { Textarea } from '@/components/lib/Textarea';
import { FunctionComponent, TextareaHTMLAttributes } from 'react';

interface QuestionPropsType {
    question:string
    value:string,
    onChange:()=> TextareaHTMLAttributes<HTMLTextAreaElement>['onChange']
}
 
export const Question: FunctionComponent<QuestionPropsType> = ({question,value,onChange}) => {
    return ( 

    <div className='flex flex-col'>
        <Text text={question}/>
        <Textarea value={value} onChange={onChange}  />
    </div> 
    
)
}
 