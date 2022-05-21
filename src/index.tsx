import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'app/domains/Common/components/error-boundary';
import AppMain from 'app/app-main';
import * as serviceWorker from './serviceWorkerRegistration';
import 'assets/css/index.css';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;
const root = createRoot(MOUNT_NODE);

root.render(
    <StrictMode>
        <ErrorBoundary>
            <AppMain />
        </ErrorBoundary>
    </StrictMode>,
);

serviceWorker.register();
