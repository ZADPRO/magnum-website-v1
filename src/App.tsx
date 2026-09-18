import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './router/RouterContext';
import { HomePage } from './pages/HomePage';
import { QAServicesPage } from './pages/QAServicesPage';
import { AccessibilityPage } from './pages/AccessibilityPage';
import { ContactPage } from './pages/ContactPage';
import { GenericServicePage } from './pages/GenericServicePage';
import { servicesMegaMenuData, mainNavRoutes } from './router/routesData';
import { useAOS } from './utils/useAOS';

const AppRoutes: React.FC = () => {
  const { currentPath } = useRouter();
  useAOS();

  // Root / and /home routes render dedicated Scalo HomePage
  if (currentPath === '/' || currentPath === '/home') {
    return <HomePage />;
  }

  // Dedicated Contact Page route
  if (currentPath === '/contact') {
    return <ContactPage />;
  }

  // Dedicated Accessibility Testing (A11y) page route
  if (currentPath === '/services/software-development/accessibility-testing' || currentPath === '/services/accessibility-testing') {
    return <AccessibilityPage />;
  }

  // Full QA Services & Accessibility page route
  if (currentPath === '/services/software-development/qa-services') {
    return <QAServicesPage />;
  }

  // Check subcategory child routes
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
          />
        );
      }
    }
  }

  // Check main nav routes
  const mainRoute = mainNavRoutes.find(r => r.path === currentPath);
  if (mainRoute) {
    return (
      <GenericServicePage
        title={mainRoute.title}
        category="Magnum Quality Assurance"
      />
    );
  }

  // Default fallback to HomePage
  return <HomePage />;
};

export function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
}

export default App;
