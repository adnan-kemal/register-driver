import React from 'react'
import { Input } from 'antd';
const InputCustom = ({placeholder, prefix})=>{
    return(
            <Input prefix={prefix}
              className="tw-py-2 tw-border-1 tw-rounded-lg tw-font-semibold"
              placeholder={placeholder} />
    )
}

export default InputCustom;