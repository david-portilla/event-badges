import React from 'react'
import './styles/PageLoading.css'
import './Loader'
import Loader from './Loader'

export default function PageLoading () {
  return (
    <div className="PageLoading">
      {/* Loading... */ }
      <Loader />
    </div>
  )
}
