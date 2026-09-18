import React from 'react';
import { RouterProvider, useRouter } from './router/RouterContext';
import { QAServicesPage } from './pages/QAServicesPage';
import { GenericServicePage } from './pages/GenericServicePage';
import { servicesMegaMenuData, mainNavRoutes } from './router/routesData';

const AppRoutes: React.FC = () => {
  const { currentPath } = useRouter();

  // Check if currentPath is full QA Services page
  if (currentPath === '/services/software-development/qa-services' || currentPath === '/') {
    return <QAServicesPage />;
  }

  // Check if currentPath matches any subcategory child route
  for (const subcategory of servicesMegaMenuData) {
    for (const child of subcategory.children) {
      if (child.path === currentPath) {
        if (child.isFullPage) {
          return <QAServicesPage />;
        }
        return (
          <GenericServicePage
            title={child.title}
            category={subcategory.title}
            path={child.path}
          />
        );
      }
    }
  }

  // Check if currentPath matches main nav routes
  const mainRoute = mainNavRoutes.find(r => r.path === currentPath);
  if (mainRoute) {
    return (
      <GenericServicePage
        title={mainRoute.title}
        category="Magnum Quality Assurance"
        path={mainRoute.path}
      />
    );
  }

  // Default fallback to QA Services page
  return <QAServicesPage />;
};

export function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
}

export default App;
