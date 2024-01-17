import React from 'react'

const style: React.CSSProperties = {
  border:'var(--gap-s) solid var(--color-1)',
  borderRightColor:'var(--color-4)',
  width:'var(--gap)',
  height:'var(--gap)',
  borderRadius: '50px',
  animation: 'spin 1s infinite'
}

export const LoadingVenda = () => {
  return (
    <div style={style}></div>
  )
}
