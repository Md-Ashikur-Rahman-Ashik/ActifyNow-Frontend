import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>ActifyNow | Not Found</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="max-w-lg p-8 bg-blue-400 rounded-lg shadow-xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-lg text-white mb-6">
            We apologize for the inconvenience. We are working tirelessly to
            resolve the issue and get things back on track.
          </p>
          <Link to="/" className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:scale-105 transition-transform">
              Return to Homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
