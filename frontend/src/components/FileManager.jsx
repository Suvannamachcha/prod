// /frontend/src/components/FileManager.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const FileManager = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage.from('uploads').list();
    if (error) console.error(error);
    else setFiles(data);
  };

  const uploadFile = async () => {
    if (!selectedFile) return;
    const { error } = await supabase.storage
      .from('uploads')
      .upload(`user-files/${selectedFile.name}`, selectedFile);
    if (error) console.error(error);
    else fetchFiles();
  };

  const deleteFile = async (fileName) => {
    const { error } = await supabase.storage
      .from('uploads')
      .remove([`user-files/${fileName}`]);
    if (error) console.error(error);
    else fetchFiles();
  };

  return (
    <div>
      <h1>File Manager</h1>
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
      <ul>
        {files.map((file) => (
          <li key={file.name}>
            {file.name}
            <button onClick={() => deleteFile(file.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileManager;
