import React from 'react';
import './main-page.scss';
import { Layout } from 'antd';
import { SiderBox } from '@components/SiderBox';
import { HeaderBox } from '@components/HeaderBox';
import { MainCards, MainPreview } from '@components/MainContent';
import { FooterBox } from '@components/FooterBox';
const { Content } = Layout;

export const MainPage: React.FC = () => (
    <Layout className='main-page'>
        <SiderBox />
        <Layout className='main-page__layout'>
            <HeaderBox />
            <Content className='main-page__content'>
                <MainPreview/>
                <MainCards/>
            </Content>
            <FooterBox/>
        </Layout>
    </Layout>
);
