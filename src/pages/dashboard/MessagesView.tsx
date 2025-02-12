import React from 'react';
import Messages  from './../../components/dashboard/Messages';

const MessagesView: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Messages</h2>
        </div>
        <Messages />
      </div>
    </div>
  );
};

export default MessagesView;