import axios from "axios"
import { useEffect, useState } from "react"

const API_URL = "http://localhost:3000/api/v1/resources"

function getResources() {
  return axios.get(API_URL).then((response) => response.data);
}

function Resources() {
  const [resources, setResources] = useState(null)

  useEffect(() => {
    getResources().then((data) => {
      setResources(data)
    })
  }, [])

  return (
    <>
      <p>Hello World 🌍</p>
      <p>{resources ? JSON.stringify(resources) : "Loading..."}</p>
    </>
  )
}

export default Resources
