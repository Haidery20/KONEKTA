import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      content: "Hi there! I'm here to help you with Konekta. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: messages.length,
      content: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 1,
        content: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('help') || lowerInput.includes('support')) {
      return `I can help you with:
1. Getting started with Konekta
2. Understanding our pricing plans
3. Setting up your account
4. Using our features
5. Troubleshooting issues

What would you like to know more about?`;
    }

    if (lowerInput.includes('pricing') || lowerInput.includes('plans')) {
      return `We offer three pricing plans:
1. Basic - Perfect for individuals
2. Professional - Ideal for small teams
3. Enterprise - Custom solutions for large organizations

Would you like to know more about any specific plan?`;
    }

    if (lowerInput.includes('setup') || lowerInput.includes('account')) {
      return `To get started:
1. Sign up for an account
2. Choose your preferred plan
3. Set up your profile
4. Start using our features

Need help with any specific step?`;
    }

    return "I'm here to help! How can I assist you today?";
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <button
          onClick={toggleChat}
          className="bg-[#4a5d4a] text-white p-3 rounded-full hover:bg-[#3d4d3d] transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-0 right-0 w-[360px] h-[600px] bg-white rounded-tl-2xl shadow-xl z-50"
        >
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-[#4a5d4a]">Konekta Assistant</h3>
              <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="h-[480px] overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#4a5d4a]/10 text-[#4a5d4a]'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a5d4a]/50"
              />
              <button
                onClick={sendMessage}
                className="bg-[#4a5d4a] text-white px-4 py-2 rounded-lg hover:bg-[#3d4d3d] transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ChatBot;
