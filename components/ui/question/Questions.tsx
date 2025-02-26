'use client'
import { Button } from '@/components/lib/Button';
import { Fragment, FunctionComponent, useState } from 'react';
import { Question } from './Question';


export const Questions: FunctionComponent = () => {
    const [activeQuestion,setActiveQuestion] = useState(1)
    const [answers,setAnswers] = useState([])

const onSubmitHandler = () => {
        console.log('submit')
    }

    const questions = [{
        id:1,
        question:'question1?',
    },{
        id:2,
        question:'question2?',

    },{
        id:3,
        question:'question3?',

    },{
        id:4,
        question:'question4?',

    },]

    return (

        <form onSubmit={onSubmitHandler}>
        
        {questions.map((item)=>(
            <Fragment key={item.id}>
            
            {activeQuestion === item.id &&
            
            <div>
            <Question onChange={(e)=>setAnswers(
                answers.map((_item, index)=> item.id === index + 1 ? e.target.value : _item )
            )} 
                value={answers[item.id - 1]}
                question={item.question} />
            {


item.id !== 1 &&
<Button onClick={()=>setActiveQuestion(item.id - 1)} textButton='Prev'/>

            }
            {
item.id !== 4 &&

<Button onClick={()=>setActiveQuestion(item.id + 1)} textButton='Next'/>

            }
            </div>
            }
            </Fragment>
        ))}
      <Button type='submit' textButton='Submit' />
        </form>
        
     )
        
}
 