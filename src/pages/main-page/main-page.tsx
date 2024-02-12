import React from 'react';
import './main-page.scss';
import { Layout } from 'antd';
import { SiderBox } from '@components/SiderBox';
const { Header, Footer, Content } = Layout;

export const MainPage: React.FC = () => {
    return (
        <Layout className='main-page'>
            <SiderBox />
            <Layout className='main-page__layout'>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
};
