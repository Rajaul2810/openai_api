import React from 'react'
import '../Home/Home.css'
import {openData} from '../../Constant/Data.js'


const Card = ({handleClick}) => {


  return (
    <div className='d-flex justify-content-center'>
      <div className="row w-75 me-3 ms-3 pt-5 pb-5">
        {

          openData.map((item) =>
            
              <div className="col-sm-12 col-md-6 col-lg-6 card1" onClick={()=>handleClick(item.option)}  key={item.id}>
                <div className=" shadow-sm p-3 mb-4 bg-body rounded " style={{borderLeft:`5px solid ${item.color}` }}>
                  < div >
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='icon' style={{backgroundColor:`${item.color}`, color:'#fff', padding:'20px',borderRadius:'6px',marginRight:'10px'}}>
                        {item.icon}
                      </div>
                      <div>
                        <h5>{item.name}</h5>
                        <p className='text-secondary'>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          )
        }
        

      </div>

    </div>
  )
}

export default Card