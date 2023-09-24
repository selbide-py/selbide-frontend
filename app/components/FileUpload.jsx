'use client';
import React, { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const userId = '650f70a91f21e8dfab6ff523';

  const handleProcessFile = (
    fieldName,
    file,
    metadata,
    load,
    error,
    progress,
    abort
  ) => {
    // Customize the HTTP request before sending it to the server
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('user_id', userId);

    const xhr = new XMLHttpRequest();
    xhr.open(
      'POST',
      'https://web-production-8d29.up.railway.app/file_upload',
      true
    );

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        const percentComplete = (e.loaded / e.total) * 100;
        progress(percentComplete);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        // File upload was successful, you can handle the response here
        load(xhr.responseText);
      } else {
        // File upload failed, handle the error
        error('Upload failed. Please try again.');
      }
    };

    xhr.onerror = () => {
      // Handle network errors here
      error('Network error. Please try again later.');
    };

    xhr.send(formData);

    // Provide an abort function in case the user wants to cancel the upload
    return {
      abort: () => {
        xhr.abort();
        abort();
      },
    };
  };

  return (
    <div className='w-full'>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={false} // Allow only one file
        maxFiles={1} // Maximum one file
        server={{
          process: handleProcessFile, // Use the custom process function
          // You can configure other server options here if needed
        }}
        name='file'
        labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
};

export default FileUpload;
