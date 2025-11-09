import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { seedBlogs } from './utils/storage';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePost from './pages/CreatePost';
import BlogDetails from './pages/BlogDetails';
import MyPosts from './pages/MyPosts';
import EditPost from './pages/EditPost';
import ErrorPage from './pages/ErrorPage';

function App() {
  useEffect(() => {
    // Seed sample blogs if none exist
    seedBlogs();
  }, []);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/my-posts" element={<MyPosts />} />
                <Route path="/edit/:id" element={<EditPost />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route
                  path="*"
                  element={
                    <ErrorPage
                      key="404"
                    />
                  }
                />
              </Routes>
            </main>
            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  duration: 3000,
                  iconTheme: {
                    primary: '#14b8a6',
                    secondary: '#fff',
                  },
                },
                error: {
                  duration: 3000,
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;

