import { FC, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from 'app/router/routes';

import { Content, Header } from 'app/domains/Layout/components';
import { NotFoundPage } from 'app/pages/NotFoundPage/async';

const cls = {
    layout: 'flex h-screen bg-light-mode-content-bg dark:bg-dark-mode-content-bg text-gray-500 dark:text-gray-200',
    mainWrapper: 'flex flex-col flex-1 w-full',
};

const LayoutContainer: FC = () => {
    useEffect(() => {
        if (!localStorage.twTheme) return;
        document.querySelector('html')!.classList.add(localStorage.twTheme);
    }, []);

    return (
        <div className={cls.layout}>
            <div className={cls.mainWrapper}>
                <Header />

                <Content>
                    <Routes>
                        {routes.map((route) =>
                            route.component ? (
                                <Route
                                    key={route.path}
                                    path={`${route.path}`}
                                    element={<route.component />}
                                />
                            ) : null,
                        )}
                        <Route path="/" element={<Navigate replace to="/home" />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Content>
            </div>
        </div>
    );
};

export default LayoutContainer;
