import { Button, Layout, Typography } from 'antd';
import './HeaderBox.scss';
import { Breadcrumbs } from '@components/Breadcrumbs';
import { SettingOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

export const HeaderBox = () => (
    <Header className='header'>
        <Breadcrumbs />
        <div className='header__content'>
            <Title level={1} className='header__title'>
                Приветствуем тебя <br className='indent'/> в CleverFit — приложении, <br/>которое поможет тебе добиться своей
                мечты!
            </Title>
            <Button className='header__settings'>
              <SettingOutlined/>
              <span className='header__settings_text'>Настройки</span>
            </Button>
        </div>
    </Header>
);
