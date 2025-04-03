import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-purple mb-4">404</h1>
        <p className="text-2xl font-semibold mb-4">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-purple hover:bg-purple-dark text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
