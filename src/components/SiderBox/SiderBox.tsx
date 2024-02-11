import React, { useState } from 'react';

import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import ExitIcon from '@public/icons/exit.svg?react';
import Logo from '@public/icons/logo.svg?react';
import LogoShort from '@public/icons/logo-short.svg?react';
import './SiderBox.scss';

const { Sider } = Layout;

const SiderBox: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [isMobileScreen, setMobileScreen] = useState<boolean>(false);
    const [widthSider, setWidthSider] = useState<number>(64);

    const changeBreakpoints = (broken: boolean) => {
        if (broken) {
            setMobileScreen(true);
            setWidthSider(0);
        } else {
            setMobileScreen(false);
            setWidthSider(64);
        }
    };

    return (
        <div className='sider-box'>
            <Sider
                breakpoint='sm'
                onBreakpoint={(broken) => changeBreakpoints(broken)}
                trigger={null}
                collapsible
                collapsed={collapsed}
                className='sider'
                width={isMobileScreen ? 108 : 206}
                collapsedWidth={widthSider}
            >
                <div className={`logo ${isMobileScreen && collapsed ? 'hidden-item' : ''}`}>{collapsed ? <LogoShort /> : (isMobileScreen ? <Logo width={72}/> : <Logo />)}</div>
                <Menu
                    theme='light'
                    className='menu'
                    mode='inline'
                    items={[
                        {
                            key: '1',
                            icon: isMobileScreen ? '' : <CalendarTwoTone twoToneColor='#061178' />,
                            label: 'Календарь',
                            className: `calendar ${isMobileScreen && collapsed ? 'hidden-item' : ''}`,
                        },
                        {
                            key: '2',
                            icon: isMobileScreen ? '' : <HeartFilled style={{ color: '#061178' }} />,
                            label: 'Тренировки',
                            className: `${isMobileScreen && collapsed ? 'hidden-item' : ''}`,
                        },
                        {
                            key: '3',
                            icon: isMobileScreen ? '' : <TrophyFilled style={{ color: '#061178' }} />,
                            label: 'Достижения',
                            className: `${isMobileScreen && collapsed ? 'hidden-item' : ''}`,
                        },
                        {
                            key: '4',
                            icon: isMobileScreen ? '' : <IdcardOutlined style={{ color: '#061178' }} />,
                            label: 'Профиль',
                            className: `${isMobileScreen && collapsed ? 'hidden-item' : ''}`,
                        },
                        {
                            key: '5',
                            icon: isMobileScreen? '' : <ExitIcon height={15} />,
                            label: 'Выход',
                            style: {zIndex: `${isMobileScreen && collapsed ? '-1' : '1'}`},
                            className: `exit ${isMobileScreen && collapsed ? 'hidden-item' : ''}`,
                        },
                    ]}
                />
            </Sider>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'switcher',
                onClick: () => setCollapsed(!collapsed),
            })}
        </div>
    );
};

export default SiderBox;
