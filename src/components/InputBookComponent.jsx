import React from 'react'

const InputBookComponent = () => {
  return (
    <div className='BookComponentDiv'>
      <p>Add a book in the system:</p>
      <form>
            <input type="text" placeholder='Book title'/> <br />
            <input type="text" placeholder='Book author'/> <br />
            <input type="text" placeholder='Publishing year'/> <br />
            <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default InputBookComponent
