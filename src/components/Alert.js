import React from 'react'

const Alert = () => {
    return (
        <div className="alert alert-warning d-flex align-items-center" role="alert">
        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
        <div>
       Fill the form
        </div>
      </div>
    )
}

export default Alert
