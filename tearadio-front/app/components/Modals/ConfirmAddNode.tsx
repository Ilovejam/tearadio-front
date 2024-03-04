"use client";
import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface ConfirmAddNoteProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onAddNote: (note: any) => void;
  showThankYou: boolean;
}

const ConfirmAddNote: React.FC<ConfirmAddNoteProps> = ({ isOpen, onClose, onConfirm, onAddNote, showThankYou }) => {
  const [note, setNote] = useState('');

  if (!isOpen) return null;
  if (showThankYou) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded flex justify-center items-center">
          <h2 className="text-lg font-bold">Thank you!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <h2 className="text-lg font-bold">Select an Action</h2>
        <div className="my-2">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded mr-2"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            <CheckCircleIcon className="h-5 w-5 inline" /> Confirm
          </button>
        
        </div>
        <div>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Enter your note here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>
        
      </div>
    </div>
  );
};

export default ConfirmAddNote;
