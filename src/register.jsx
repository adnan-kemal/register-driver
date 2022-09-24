import React, {useState}from "react";
import "antd/dist/antd.css";
import"./App.css";
import { Form,Input,Button, Select, Upload, message } from "antd";

const options = [
  { value: 'automotive', label: 'automative' },
  { value: 'busses', label: 'busses' },
 
];


function register()
{
  const [details,setDetails]=useState({
    fname:"",
    lname:"",
    experience:"",
  
  
  })
 
  
  
  return(
    <div>
      <Form 
      name="driver registration"
       layout="inline" 
       className="relative left-0 top-3 lg:w-[100%] " 
       onFinish={(values)=>{
        console.log(values)
       }

      }>
         
        <Form.Item 
        label=" First Name" 
        name="fname"
        className="tw-w-[300px] mx-my-2 " 
        
        rules={[
          {
            required: true,
            message:"please enter your First name"
          },
          {
            whitespace:false
          }
        ]}
        hasFeedback
        >
          <Input 
          placeholder="enter name here"
          name="fname"
       
          className="mb-2"></Input>
                </Form.Item>

                <Form.Item 
        label=" Last Name" 
        name="lname"
        className="tw-w-[300px] mx-my-2 " 
        
        rules={[
          {
            required: true,
            message:"please enter your Last name"
          },
          {
            whitespace:false
          }
        ]}
        hasFeedback
        >
                  
          <Input
          name="lname"
          
          placeholder="enter name here" className="mb-2">

          </Input>
       </Form.Item>
   <Form.Item
             label="Year of Experience" 
             name="experience"
             rules={[
              {
                required: true,
                message:"Required to enter amount of Years servicing AASTU"
              },
              {
                whitespace:false
              }
            ]}
            hasFeedback
              >
          <Input
           placeholder="Years in AASTU"
           name="experience"
           
            className="mb-2"></Input>
                </Form.Item>
                <Form.Item
                 label="License" 
                 name="license"
                 rules={[
                  {
                    required: true,
                    message:"please enter your Last name"
                  },
                  {
                    whitespace:false
                  }
                ]}
                hasFeedback
                 >
                  <Select placeholder="Select your license type">
                    <Select.Option value="automotives">automotives</Select.Option>
                    <Select.Option value="busses">busses</Select.Option>
                  
                  </Select>
                
        
      
                </Form.Item>

             
        <Form.Item 
         label="Attachment"
         >
           <Upload.Dragger 
           listType="picture"
            name="attachment"
            accept=".png,.jpeg"
            action={"http://localhost:5173"}
            beforeUpload={(file)=>{
              console.log(file);
              if(file.size<1000000)
              {
                console.log("file size should be more than 1mb");
                

              }
              else if (file.size>5000000)
              {
                console.log("file size shouldnt be more than 5mb")
              }
            }}
           

            >

            Drop here or click button
            <br />
           <Button 
          
           >Upload</Button>

          
           </Upload.Dragger>

        </Form.Item>

      <Form.Item>
       <Button
       type="primary" 
       htmlType="submit"
             
        > 

        Submit
       </Button>
      </Form.Item>
                
      </Form>






    </div>
  )

}
export default register;