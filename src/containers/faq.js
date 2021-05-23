import faqsData from '../tagData/faq.json';
import React from 'react';
import { Accordion } from '../components/accordion';
import Form from '../components/form';

export function FaqsContainer(props){
    return (
        <Accordion>
            <Accordion.Title>
                Câu hỏi thường gặp
            </Accordion.Title>
            <Accordion.Frame>
            {
                faqsData.map(item => ( 
                        <Accordion.Item key={item.id}>
                            <Accordion.Header>{item.question}</Accordion.Header>
                            <Accordion.Body>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                ))
            }
            </Accordion.Frame>
            <Form>
                <Form.Text>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</Form.Text>
                <Form.Input placeholder='Email' />
                <Form.Button>Bắt đầu</Form.Button>
            </Form>
        </Accordion>
    )
}
