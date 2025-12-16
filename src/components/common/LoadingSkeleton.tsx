const LoadingSkeleton = ({ type = 'card' }: { type?: 'card' | 'text' | 'image' }) => {
  if (type === 'card') {
    return (
      <div className="card animate-pulse">
        <div className="h-48 bg-gray-300 rounded-t-xl" />
        <div className="p-6 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-3 bg-gray-300 rounded w-1/2" />
          <div className="h-3 bg-gray-300 rounded w-full" />
        </div>
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="animate-pulse space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
      </div>
    );
  }

  return <div className="h-64 bg-gray-300 rounded-xl animate-pulse" />;
};

export default LoadingSkeleton;
