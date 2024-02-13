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

export const SiderBox: React.FC = () => {
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
        <div className={`sider-box ${isMobileScreen ? 'fixed' : ''}`}>
            <div className='sider-box__inner'>
                <Sider
                    breakpoint='sm'
                    onBreakpoint={(broken) => changeBreakpoints(broken)}
                    trigger={null}
                    collapsible
                    collapsed={isMobileScreen ? !collapsed : collapsed}
                    className='sider'
                    width={isMobileScreen ? 108 : 206}
                    collapsedWidth={widthSider}
                    style={{ paddingTop: `${isMobileScreen ? '0' : '30px'}` }}
                >
                    <div
                        className={`logo ${
                            isMobileScreen && !collapsed ? 'hidden-item mobile' : ''
                        }`}
                    >
                        {isMobileScreen && collapsed ? (
                            <Logo width={72} />
                        ) : collapsed ? (
                            <LogoShort />
                        ) : (
                            <Logo />
                        )}
                    </div>
                    <Menu
                        theme='light'
                        className='menu'
                        mode='inline'
                        items={[
                            {
                                key: '1',
                                icon: isMobileScreen ? (
                                    ''
                                ) : (
                                    <CalendarTwoTone
                                        twoToneColor='#061178'
                                        style={{
                                            fontSize: '16px',
                                            marginLeft: `${collapsed ? '8px' : '0'}`,
                                        }}
                                    />
                                ),
                                label: 'Календарь',
                                className: `calendar ${
                                    isMobileScreen && !collapsed ? 'hidden-item' : ''
                                }`,
                                style: {
                                    paddingLeft: `${isMobileScreen ? '8px' : '16px'}`,
                                    paddingRight: `${isMobileScreen ? '8px' : '16px'}`,
                                },
                            },
                            {
                                key: '2',
                                icon: isMobileScreen ? (
                                    ''
                                ) : (
                                    <HeartFilled
                                        style={{
                                            color: '#061178',
                                            fontSize: '16px',
                                            marginLeft: `${collapsed ? '8px' : '0'}`,
                                        }}
                                    />
                                ),
                                label: 'Тренировки',
                                className: `${isMobileScreen && !collapsed ? 'hidden-item' : ''}`,
                                style: {
                                    paddingLeft: `${isMobileScreen ? '8px' : '16px'}`,
                                    paddingRight: `${isMobileScreen ? '8px' : '16px'}`,
                                },
                            },
                            {
                                key: '3',
                                icon: isMobileScreen ? (
                                    ''
                                ) : (
                                    <TrophyFilled
                                        style={{
                                            color: '#061178',
                                            fontSize: '16px',
                                            marginLeft: `${collapsed ? '8px' : '0'}`,
                                        }}
                                    />
                                ),
                                label: 'Достижения',
                                className: `${isMobileScreen && !collapsed ? 'hidden-item' : ''}`,
                                style: {
                                    paddingLeft: `${isMobileScreen ? '8px' : '16px'}`,
                                    paddingRight: `${isMobileScreen ? '8px' : '16px'}`,
                                },
                            },
                            {
                                key: '4',
                                icon: isMobileScreen ? (
                                    ''
                                ) : (
                                    <IdcardOutlined
                                        style={{
                                            color: '#061178',
                                            fontSize: '16px',
                                            marginLeft: `${collapsed ? '8px' : '0'}`,
                                        }}
                                    />
                                ),
                                label: 'Профиль',
                                className: `${isMobileScreen && !collapsed ? 'hidden-item' : ''}`,
                                style: {
                                    paddingLeft: `${isMobileScreen ? '8px' : '16px'}`,
                                    paddingRight: `${isMobileScreen ? '8px' : '16px'}`,
                                },
                            },
                            {
                                key: '5',
                                icon: isMobileScreen ? '' : <ExitIcon height={15} />,
                                label: 'Выход',
                                style: {
                                    zIndex: `${isMobileScreen && !collapsed ? '-1' : '1'}`,
                                    paddingLeft: `${isMobileScreen ? '8px' : '16px'}`,
                                    paddingRight: `${isMobileScreen ? '8px' : '16px'}`,
                                    textAlign: `${isMobileScreen ? 'center' : 'left'}`,
                                },
                                className: `exit ${
                                    isMobileScreen && !collapsed ? 'hidden-item' : ''
                                }`,
                            },
                        ]}
                    />
                </Sider>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: `switcher ${isMobileScreen ? 'mobile' : ''}`,
                    onClick: () => setCollapsed(!collapsed),
                    'data-test-id': `sider-switch${isMobileScreen? '-mobile' : ''}`,
                })}
            </div>
        </div>
    );
};
