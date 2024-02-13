import { Typography } from 'antd';
import './MainPreview.scss';

export const MainPreview = () => (
    <>
        <Typography.Paragraph className='preview'>
            С CleverFit ты сможешь: <br />— планировать свои тренировки на календаре, выбирая тип и
            уровень нагрузки;
            <br />— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с
            нормами и рекордами;
            <br />— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о
            тренировках;
            <br />— выполнять расписанные тренировки для разных частей тела, следуя подробным
            инструкциям и советам профессиональных тренеров.
        </Typography.Paragraph>
        <Typography.Paragraph className='preview'>
            CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
            откладывай на завтра — начни тренироваться уже сегодня!
        </Typography.Paragraph>
    </>
);