import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function About_Us() {
  const navigate = useNavigate()

  useEffect(() => {
    const auth = false;
  }, [])
  return (
    <div>About</div>
  )
}

export default About_Us