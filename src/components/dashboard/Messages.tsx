import React, { useState } from 'react';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Messages</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="divide-y">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 cursor-pointer ${
                  !message.read ? 'bg-blue-50' : ''
                }`}
                onClick={() => setSelectedMessage(message)}
              >
                <h3 className="font-semibold">{message.sender}</h3>
                <p className="text-sm text-gray-600 truncate">
                  {message.content}
                </p>
                <span className="text-xs text-gray-500">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="col-span-2 bg-white rounded-lg shadow p-6">
          {selectedMessage ? (
            <>
              <h2 className="text-xl font-semibold mb-4">
                {selectedMessage.sender}
              </h2>
              <p className="text-gray-700">{selectedMessage.content}</p>
            </>
          ) : (
            <p className="text-gray-500 text-center">
              Select a message to view
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;