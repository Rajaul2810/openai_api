import React from 'react'

const Translate = ({ doTask, setPromt, ans }) => {
    return (
        <section className='pb-3'>
            <div className='d-flex justify-content-center pt-3 pb-3'>
                <div className="mb-3 w-50">
                    <label for="exampleFormControlTextarea1" className="form-label">Write Your text </label>
                    <textarea className="form-control shadow-sm p-3 mb-4 bg-body rounded" onChange={(e) => setPromt(e.target.value)} id="exampleFormControlTextarea1" rows="4" />
                    <button type="button" className="btn btn-primary btn-lg" onClick={doTask}>Submit Task</button>
                </div>
            </div>
            {
                ans && <span className='d-flex justify-content-center'><p className='p-5 m-3 w-75' style={{borderLeft:'5px solid red', backgroundColor:'white',borderRadius:'6px' }}>{ans}</p></span>
            }
        </section>
    )
}

export default Translate