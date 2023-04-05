import React, { useState } from 'react'
import './Home.css'
import Card from '../Card/Card'
import Translate from '../Translate/Translate'
import { Configuration, OpenAIApi } from 'openai'


const Home = () => {
  const [option, setOption] = useState({})
  const [promt, setPromt] = useState('')

  const [ans, setAns] = useState('')

  const configuration = new Configuration({
    apiKey:process.env.REACT_APP_OPENAI_API_KEY,

  });

  const openai = new OpenAIApi(configuration);

  const handleClick = (option) => {
    setOption(option)
  }


  const doTask = async () => {
    let object = { ...option, prompt: promt }
    console.log(object)
    const response = await openai.createCompletion(object);
    console.log(response.data.choices[0].text)
    setAns(response.data.choices[0].text)
  }

  return (
    <div style={{ backgroundColor: '#EEE', height: '100%' }}>

      {Object.values(option).length === 0 ? <Card handleClick={handleClick} /> : <Translate doTask={doTask} setPromt={setPromt} ans={ans} />}
    </div>

  )
}

export default Home