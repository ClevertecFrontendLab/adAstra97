import React from 'react';
import './main-page.scss';
import { Layout } from 'antd';
import { SiderBox } from '@components/SiderBox';
import { HeaderBox } from '@components/HeaderBox';
const { Footer, Content } = Layout;

export const MainPage: React.FC = () => (
    <Layout className='main-page'>
        <SiderBox />
        <Layout className='main-page__layout'>
            <HeaderBox />
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    </Layout>
);
