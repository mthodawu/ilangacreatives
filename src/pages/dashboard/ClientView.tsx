import React from 'react';
import Clients from './../../components/dashboard/Clients';

const ClientView: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Client Management</h2>
        </div>
        <Clients />
      </div>
    </div>
  );
};

export default ClientView;