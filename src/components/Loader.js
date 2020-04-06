import React from 'react'

const Loader
function Loader(loading) {
  return (
    <>
      {loading ? (
        <div>
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ): null}
    </>
  )
}

export default Loader;
