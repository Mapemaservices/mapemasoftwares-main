import React from 'react';
import { X } from 'lucide-react';

interface PopupCardProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const PopupCard: React.FC<PopupCardProps> = ({ open, onClose, children, title }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-primary/20 animate-pop-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors duration-200 bg-muted/20 rounded-full p-2 shadow hover:shadow-lg"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        {title && <h2 className="text-2xl font-bold mb-4 text-primary-gradient">{title}</h2>}
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
