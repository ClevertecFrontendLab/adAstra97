import React from 'react';
import './main-page.scss';
import { Layout } from 'antd';
import SiderBox from '@components/SiderBox/SiderBox';
const { Header, Footer, Content } = Layout;

export const MainPage: React.FC = () => {
    return (
        <div className='main-page'>
            <Layout className='main-page__layout'>
                <SiderBox/>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
};
