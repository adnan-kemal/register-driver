import React, { useState } from 'react';
import { Button } from 'antd';

const ButtonCustom = ({value,load})=>{
	const [loading, setLoading] = useState(load);
	return(
		<Button type="primary" loading={loading} htmlType="submit" size="small" className="tw-font-semibold tw-border-0">
                {value}
              </Button>
	)
}

export default ButtonCustom