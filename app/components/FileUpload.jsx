"use client";
import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// import { FilePondFile } from 'react-filepond';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className='w-full'>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={5}
        server='http://10.12.46.153:8080/'
        name='files'
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
};

export default FileUpload;
