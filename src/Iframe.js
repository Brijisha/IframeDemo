import React, { useEffect, useRef } from 'react';

function Iframe(props) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = props.src;
    iframe.style.width = props.width || '100%';
    iframe.style.height = props.height || '100%';
    iframe.style.border =  props.border || 'none';

    iframeRef.current.appendChild(iframe);

    return () => {
      iframeRef.current.removeChild(iframe);
    };
  }, [props.src, props.width, props.height]);

  return <div ref={iframeRef}></div>;
}

export default Iframe;


