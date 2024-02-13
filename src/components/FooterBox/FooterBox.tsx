import { Button, Card, Layout } from 'antd';

import './FooterBox.scss';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
const { Footer } = Layout;

const CardTitles = () => (
    <>
        <span>Скачать на телефон</span>
        <span>Доступно в PRO-тарифе</span>
    </>
);

export const FooterBox: React.FC = () => {
    return (
        <Footer className='footer'>
            <Button type='link'>Смотреть отзывы</Button>
            <Card title={<CardTitles/>} bordered={false} className='footer__card'>
              <Button type='link'>
                <AndroidFilled/>
                <span>Android OS</span>
              </Button>
              <Button type='link'>
                <AppleFilled/>
                <span>Apple iOS</span>
              </Button>
            </Card>
        </Footer>
    );
};
