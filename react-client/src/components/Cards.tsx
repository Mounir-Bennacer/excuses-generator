import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'

export default function Cards() {
  const [intros, setIntros] = useState([])
  const [scapegoats, setScapegoats] = useState([])
  const [delays, setDelays] = useState([])
  const [selectedIntro, setselectedIntro] = useState(-1)

  function handleSelected() {
    console.log('hi')
    // setselectedIntro(intro._id)
  }
  useEffect(() => {
    // http://localhost:8800/api/excuses/intro/get
    axios
      .get('http://localhost:8800/api/excuses/intro/get')
      .then(({ data }) => {
        setIntros(data)
      })
    axios
      .get('http://localhost:8800/api/excuses/scape-goat/get')
      .then(({ data }) => {
        setScapegoats(data)
      })
    axios
      .get('http://localhost:8800/api/excuses/delay/get')
      .then(({ data }) => {
        setDelays(data)
      })
  }, [])

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h1 className="text-center text-5xl font-extrabold uppercase text-gray-900 tracking-wider">
        Canceling plans excuse generator
      </h1>
      <button className="uppercase bg-blue-600 w-full mt-6 px-5 py-5 font-semibold text-white rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg">
        Generate excuse
      </button>
      <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
        <div className="my-2 lg:mt-8">
          <h3 className="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4">
            Choose an intro
          </h3>
          {intros.map(intro => (
            <Card
              key={intro._id}
              card={intro}
              selected={() => selectedIntro === intro._id}
              onClick={handleSelected}
              bgColor="bg-red-500"
            />
          ))}
        </div>
        <div className="mt-6 lg:mt-8">
          <h3 className="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4">
            Choose a scapegoat
          </h3>
          {scapegoats.map(scapegoat => (
            <Card
              key={scapegoat._id}
              card={scapegoat}
              bgColor="bg-yellow-500"
            />
          ))}
        </div>
        <div className="mt-6 lg:mt-8">
          <h3 className="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4">
            Choose a delay
          </h3>
          {delays.map(delay => (
            <Card key={delay._id} card={delay} bgColor="bg-blue-500" />
          ))}
        </div>
      </div>
    </div>
  )
}
