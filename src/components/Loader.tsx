import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
    </div>
  );
};

export default Loader;