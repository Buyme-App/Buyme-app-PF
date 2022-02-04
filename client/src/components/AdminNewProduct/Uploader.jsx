import React from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';


export default function Uploader () {
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }
  
    return (
    <Dropzone
    getUploadParams={getUploadParams}
    onChangeStatus={handleChangeStatus}
    onSubmit={handleSubmit}
    maxFiles={8}
    maxSizeBytes={1000000}
    inputContent="Drop up to 8 images (jpg, png and gif / up to 1 MB)"
    inputWithFilesContent={files => `${8 - files.length} more`}
    submitButtonDisabled={files => files.length < 8}
    accept="image/*"
    />
    )
}
