import React, { Fragment, useState} from 'react';

const Image = (props) => {
  //need file from state
  //need fileName from state

  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose File')

  const onChangeHandler = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file)

  }

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div>
        <input type="file" id="customFile" onChange={onChangeHandler}/>
        <label htmlFor="customFile">{fileName}</label>
        </div>

        <input type='submit' value="Upload" />
      </form>
    </Fragment>
  );
};

export default Image;
