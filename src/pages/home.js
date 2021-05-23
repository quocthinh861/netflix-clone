import React from 'react'
import Form from '../components/form';
import Feature from '../components/feature';
import { FaqsContainer } from '../containers/faq';
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/head';
import { JumpotronContainer } from '../containers/jumpotron';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Xem ở mọi nơi. Hủy bất kỳ lúc nào.
                    </Feature.SubTitle>
                    <Form>
                        <Form.Input placeholder='Email' />
                        <Form.Button>Bắt đầu</Form.Button>
                        <Form.Text>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</Form.Text>
                    </Form>
                </Feature>
            </HeaderContainer>
            <JumpotronContainer/>
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
