/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { StudioPage } from './pages/StudioPage';
import { JournalPage } from './pages/JournalPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { AssetLicencePage } from './pages/AssetLicencePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderCurrentRoute = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }
    if (currentPath === '/projects') {
      return <ProjectsPage />;
    }
    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '').split('/')[0];
      return <ProjectDetailPage slug={slug} />;
    }
    if (currentPath === '/studio') {
      return <StudioPage />;
    }
    if (currentPath === '/journal') {
      return <JournalPage />;
    }
    if (currentPath.startsWith('/journal/')) {
      const slug = currentPath.replace('/journal/', '').split('/')[0];
      return <ArticleDetailPage slug={slug} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    if (currentPath === '/asset-licence') {
      return <AssetLicencePage />;
    }
    if (currentPath === '/privacy') {
      return <PrivacyPage />;
    }

    return <NotFoundPage />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EB] dark:bg-[#121311] text-[#20221F] dark:text-[#F4F1EB] transition-colors duration-500">
      <Navbar />
      <main className="flex-grow">
        {renderCurrentRoute()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
