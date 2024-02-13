import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import './MainCards.scss';
import { ReactNode } from 'react';
import { Button, Card } from 'antd';

interface ICard {
    title: string;
    icon: ReactNode;
    subtitle: string;
}

const cards: ICard[] = [
    {
        title: 'Расписать тренировки',
        icon: <HeartFilled style={{ color: 'var(--primary-light-6)', fontSize: '12.5px' }} />,
        subtitle: 'Тренировки',
    },
    {
        title: 'Назначить календарь',
        icon: (
            <CalendarTwoTone twoToneColor='var(--primary-light-6)' style={{ fontSize: '12.5px' }} />
        ),
        subtitle: 'Календарь',
    },
    {
        title: 'Заполнить профиль',
        icon: <IdcardOutlined style={{ color: 'var(--primary-light-6)', fontSize: '12.5px' }} />,
        subtitle: 'Профиль',
    },
];

export const MainCards: React.FC = () => {
    return (
        <div className='cards'>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} bordered={false}>
                    <Button type='link'>
                        {card.icon}
                        <span>{card.subtitle}</span>
                    </Button>
                </Card>
            ))}
        </div>
    );
};
