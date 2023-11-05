import { useRef, useEffect, useState } from "react"
import React from "react"
import { ReactDOM } from "react"

const Video = ({ src }) => {
  const iframeRef = useRef(null)
  const [contentRef, setContentRef] = useState(null)

  useEffect(() => {
    const iframe = ReactDOM.findDOMNode(iframeRef.current)
    const content = ReactDOM.findDOMNode(contentRef.current)

    iframe.src = src
    content.innerHTML = iframe.contentWindow.document.body.innerHTML
  }, [src])

  return (
    <div>
      <iframe ref={iframeRef} />
      <div ref={contentRef} />
    </div>
  )
}

export default Video