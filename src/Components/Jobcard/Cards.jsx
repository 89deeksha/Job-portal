import React from 'react'
import dayjs from 'dayjs';

function Cards(props) {
    const skills=["Javascript","Java","Bootstrap","HTML","Node.js","Python"]
    const Diff = dayjs().diff(dayjs(props.postedate), 'day')

    
  return (
    <div className='mx-40  mb-4'>
        <div className='flex justify-between items-center px-6 py-6 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 mt-4'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-lg font-semibold'>{props.title}-{props.company}</h1>
                <p>{props.Jobtype}. {props.Location}. {props.Experience}</p>
                <div className='flex items-center gap-2'>
                {props.skills && props.skills.map((skill,index)=>{
                  return  <p className="text-gray-500 py-1 px-2 rounded-md border border-black" key={index}>{skill}</p>
                })}
            </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <p className='text-gray-500'>Posted:{Diff} days ago</p>
                <a href={props.joblink}>
                <button className='text-blue-400 border-blue border px-10 py-2 rounded-md hover:border-black border'>Apply</button>
                </a>
                
                </div>
            
        </div>
    </div>
  )
}

export default Cards