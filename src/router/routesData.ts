export interface ServiceChildRoute {
  title: string;
  path: string;
  isFullPage?: boolean;
}

export interface ServiceSubcategory {
  id: string;
  title: string;
  children: ServiceChildRoute[];
}

export const servicesMegaMenuData: ServiceSubcategory[] = [
  {
    id: 'consulting-design',
    title: 'Consulting & Design',
    children: [
      { title: 'Product Design', path: '/services/consulting-design/product-design' },
      { title: 'PoC Services', path: '/services/consulting-design/poc-services' },
      { title: 'Business Analysis', path: '/services/consulting-design/business-analysis' },
      { title: 'Software Assessment', path: '/services/consulting-design/software-assessment' },
      { title: 'Software Design & Technology', path: '/services/consulting-design/software-design-technology' },
      { title: 'UI/UX Consulting', path: '/services/consulting-design/ui-ux-consulting' },
      { title: 'Scrum Consulting', path: '/services/consulting-design/scrum-consulting' },
      { title: 'Mergers & Acquisitions', path: '/services/consulting-design/mergers-acquisitions' },
      { title: 'IT Carve-Out', path: '/services/consulting-design/it-carve-out' },
      { title: 'Project Management', path: '/services/consulting-design/project-management' }
    ]
  },
  {
    id: 'software-development',
    title: 'Software Development',
    children: [
      { title: 'Architecture Design', path: '/services/software-development/architecture-design' },
      { title: 'Custom Software Development', path: '/services/software-development/custom-software-development' },
      { title: 'Modernization & Migration', path: '/services/software-development/modernization-migration' },
      { title: 'MVP Services', path: '/services/software-development/mvp-services' },
      { title: 'System Integration', path: '/services/software-development/system-integration' },
      { title: 'White Label Software', path: '/services/software-development/white-label-software' },
      { title: 'QA & Testing', path: '/services/software-development/qa-services', isFullPage: true }
    ]
  },
  {
    id: 'data',
    title: 'Data',
    children: [
      { title: 'Data Analytics', path: '/services/data/data-analytics' },
      { title: 'Data Ecosystem', path: '/services/data/data-ecosystem' },
      { title: 'Data Management', path: '/services/data/data-management' },
      { title: 'Data Migration', path: '/services/data/data-migration' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud',
    children: [
      { title: 'Cloud Migration', path: '/services/cloud/cloud-migration' },
      { title: 'Cloud Strategy', path: '/services/cloud/cloud-strategy' },
      { title: 'AWS Consulting', path: '/services/cloud/aws-consulting' },
      { title: 'Azure Consulting', path: '/services/cloud/azure-consulting' }
    ]
  },
  {
    id: 'modernization-migration',
    title: 'Modernization & Migration',
    children: [
      { title: 'Legacy Modernization', path: '/services/modernization-migration/legacy-modernization' },
      { title: 'App Refactoring', path: '/services/modernization-migration/app-refactoring' }
    ]
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    children: [
      { title: 'Firmware Development', path: '/services/embedded-systems/firmware-development' },
      { title: 'IoT Solutions', path: '/services/embedded-systems/iot-solutions' }
    ]
  }
];

export const mainNavRoutes = [
  { title: 'AI Solutions', path: '/ai-solutions' },
  { title: 'IT Outsourcing', path: '/it-outsourcing' },
  { title: 'Technologies', path: '/technologies' },
  { title: 'Industries', path: '/industries' },
  { title: 'Case studies', path: '/case-studies' },
  { title: 'About us', path: '/about-us' },
  { title: 'Blog', path: '/blog' },
  { title: 'Career', path: '/career' }
];
