'use client'
import { Form, Input, Button } from "@/atoms";
import { UserOutlined, MailOutlined, MessageOutlined, PhoneOutlined } from "@ant-design/icons";

const ContactUs = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div
      style={{
        border: "1px dashed #1f1f1f",
        // color: "#fff",
        padding: "40px",
        textAlign: "center",
        maxWidth: "50%",
        margin: "auto",
        marginTop: "10%",
      }}
    >
      <h1 style={{color: "orange", textAlign: "center", marginBottom: 25, fontSize: "50px"}}>Contact Us</h1>
      <Form
        name="contact-form"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Your Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Invalid email address" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Your Email" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please enter your contact number!" },
            { type: "number", message: "Invalid contact number" },
          ]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="Your Phone" />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: "Please enter your message!" }]}
        >
          <Input.TextArea
            prefix={<MessageOutlined />}
            placeholder="Your Message"
            rows={6}
          />
        </Form.Item>
        <Form.Item style={{marginTop: "50px"}}>
          <Button htmlType="submit" size="large" style={{backgroundColor: "orange", padding: "0 50px"}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;
