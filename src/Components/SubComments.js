import React from 'react';


import SubComment from './SubComment';

const SubComments = ({isOpen, subComments}) => {
  return(
    <React.Fragment>
    {
      (isOpen && subComments) && (
        subComments.map((subCom) => {
          return (
            <SubComment commentId={subCom} key={subCom}/>
          )
        })

      )
    } 
    </React.Fragment>
  )
}

export default SubComments;