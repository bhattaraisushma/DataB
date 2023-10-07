import React from 'react'

const Download = ({jsonData}) => {
  console.log(jsonData.features)
    return (
    <div className=''>
        
        <button className=" btn btn-outline btn-accent " onClick={()=>handleDownloadClick(jsonData.features)}>Downlaod</button>
        
    </div>
  )
}

  const handleDownloadClick = (jsonData) => {
    const json = JSON.stringify(jsonData);
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
  };

export default Download