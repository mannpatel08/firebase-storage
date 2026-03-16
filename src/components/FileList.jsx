import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "../features/fileSlice";
import FileCard from "./FileCard";

const FileList = () => {

  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(fetchFiles());
  }, []);

  return (

    <div className="file-list">

      {files.map((file, index) => (
        <FileCard key={index} file={file} />
      ))}

    </div>
  );
};

export default FileList;