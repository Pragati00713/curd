
import React, { useState } from 'react'

const Home = () => {
     const [input, setInput] = useState({
          name: "",
          email: "",
     })
     const [tableData, setTableData] = useState([])
     const handleChange = (e) => {
          setInput(
               {
                    ...input,
                    [e.target.name]: e.target.value

               }
          )

     }
     const handleSubmit = (e) => {
          e.preventDefault()
          // console.log('input', input)
          setTableData([...tableData, input])
          setInput({
               name : " ",
               email : " ",
          })
     }
     // console.log('tableData', tableData)
     const handleDelate=(index)=>{
          const filterData=tableData.filter((item,i)=>i!==index)
          setTableData(filterData)
     }
     const editData=(index)=>{
         const tempData=tableData[index]
     //     console.log(tableData,'tempData')
     // console.log('tempData',tempData)
     setInput(
          {
               name:tempData.name,
               email:tempData.email
          }
     )
     }
     return (
          <>
               <div className='flex bg-slate-300 h-screen justify-center items-center flex-col text-black p-3'>
                    <h1 className='text-4xl text-center underline m-2 p-2'>Curd Operation</h1>
                    <div className=''>
                         <form onSubmit={handleSubmit}>
                              <div>
                                   <label className='font-semibold text-lg'>Name</label>
                                   <input type="text" className='m-2'
                                        name='name'
                                        value={input.name}
                                        onChange={handleChange} />
                              </div>
                              <div>
                                   <label className='font-semibold text-lg'>Email</label>
                                   <input type="text" className='m-2'
                                        name='email'
                                        value={input.email}
                                        onChange={handleChange} />

                              </div>

                              <button type='submit' className='flex bg-red-100 font-semibold text-lg  text-black w-[180px] justify-center items-center '>
                                   Add {" "}</button>

                         </form>
                    </div>
                    <div className='flex w-full items-center justify-center  bg-slate-50 mt-4 '>
                         <table className=''>
                              <thead>
                                   <tr className='underline'>
                                        <th className='p-5'>Name</th>
                                        <th className='p-5'>Email</th>
                                        <th className='p-5'>Actions</th>
                                   </tr>
                              </thead>
                              <tbody>

                                   {
                                        tableData.map((item,i) => (
                                             <tr className='underline'>
                                                  <td className='pl-5'>{item.name}</td>
                                                  <td className='pl-5'>{item.email}</td>
                                                  <td>
                                                       <button className='pl-5 text-blue-600' onClick={()=>editData(i)}>Edit</button>
                                                       <button className='pl-5 text-red-500' onClick={()=>handleDelate(i)}  >Delete</button>
                                                  </td>
                                             </tr>
                                        ))
                                        }
                              </tbody>
                         </table>
                    </div>
               </div>
          </>
     )
}

export default Home