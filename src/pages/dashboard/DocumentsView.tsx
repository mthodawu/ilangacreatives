import React from 'react';
import Documents  from './../../components/dashboard/Documents';

const DocumentsView: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Documents</h2>
        </div>
        <Documents />
      </div>
    </div>
  );
};

export default DocumentsView;