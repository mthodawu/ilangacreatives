import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Document {
  id: number;
  name: string;
  type: string;
  createdAt: Date;
  size: string;
}

const Documents = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Documents</h1>
        <div className="space-x-4">
          <Link 
            to="/dashboard/documents/invoicing"
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Generate Invoice
          </Link>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
            Upload Document
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{doc.name}</span>
              <span className="text-sm text-gray-500">{doc.type}</span>
            </div>
            <div className="text-sm text-gray-600">
              <p>Size: {doc.size}</p>
              <p>Created: {doc.createdAt.toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;