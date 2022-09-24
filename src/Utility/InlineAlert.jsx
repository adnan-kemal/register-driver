import { Alert } from 'antd';
import React from 'react';

const InlineAlert = ({type,message})=>{
	switch(type){
		case 'success':
			return <Alert message={message} type="success" showIcon className="tw-mb-5"/>
			break;
		case 'error':
			return <Alert message={message} type="error" showIcon className="tw-mb-5"/>
			break;
		case 'info':
			return <Alert message={message} type="info" showIcon className="tw-mb-5"/>
			break;
		case 'warning':
			return <Alert message={message} type="warning" showIcon className="tw-mb-5"/>
			break;
		default:
			return <Alert message={message} type="info" showIcon className="tw-mb-5"/>
			break;
	}
}
export default InlineAlert;