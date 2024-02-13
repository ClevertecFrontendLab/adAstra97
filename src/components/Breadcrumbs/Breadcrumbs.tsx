import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import './Breadcrumbs.scss';

export const Breadcrumbs = () => {
    interface IBreadcrumbs {
        label: string;
        link: string;
    }

    const breadcrumbs: IBreadcrumbs[] = [{ label: 'Главная', link: '/' }];

    return (
        <Breadcrumb>
            {breadcrumbs.map((breadcrumb, index) => (
                <Breadcrumb.Item key={index}>
                    <Link to={breadcrumb.link}>{breadcrumb.label}</Link>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};
