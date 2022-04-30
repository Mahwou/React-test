import React, { ChangeEventHandler, useState } from "react"

//import _ from "loadash"

type PropsType = [{
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>
},Function]

export const useInput = (data: string): PropsType => {
  const [value, setData] = useState<string>(data)


  return [
    {
      value,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => setData(event.target.value)
    },

    () => setData(data)
  ]
}
