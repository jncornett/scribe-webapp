import React from "react"
import loremHipsum from "lorem-hipsum"

export const Editor = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        {loremHipsum({
          count: 20
        })}
      </div>
    </div>
  </div>
)