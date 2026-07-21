import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Sparkles } from "lucide-react";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  time: string;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    text: "Hi there! Welcome to Angeltors. How can I help you today?",
    isUser: false,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  }
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const newBotMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! Our team will get back to you shortly.",
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, newBotMsg]);
    }, 1000);
  };

  return (
    <div className="relative z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 right-0 mb-4 w-[350px] sm:w-[380px] overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-angeltors-ink px-5 py-4 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-angeltors-accent/20 flex items-center justify-center border border-angeltors-accent/30 relative">
                  <Sparkles className="w-5 h-5 text-angeltors-cyan" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-angeltors-ink"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">Angeltors Assistant</h3>
                  <p className="text-xs text-slate-300 font-medium">We typically reply in minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50 flex flex-col gap-4">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex flex-col ${msg.isUser ? "items-end" : "items-start"}`}
                >
                  <div className={`flex items-end gap-2 max-w-[85%] ${msg.isUser ? "flex-row-reverse" : "flex-row"}`}>
                    
                    {/* Avatar */}
                    <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-white shadow-sm border border-slate-100 mb-1">
                      {msg.isUser ? (
                        <User className="w-3.5 h-3.5 text-slate-400" />
                      ) : (
                        <Bot className="w-4 h-4 text-angeltors-accent" />
                      )}
                    </div>

                    {/* Bubble */}
                    <div 
                      className={`px-4 py-2.5 rounded-2xl text-[14px] font-medium leading-relaxed ${
                        msg.isUser 
                          ? "bg-angeltors-ink text-white rounded-br-sm" 
                          : "bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  <span className={`text-[10px] font-medium text-slate-400 mt-1.5 px-9`}>
                    {msg.time}
                  </span>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              <form 
                onSubmit={handleSendMessage}
                className="flex items-center gap-2"
              >
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-angeltors-accent focus:ring-1 focus:ring-angeltors-accent/20 transition-all placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 shrink-0 rounded-full bg-angeltors-ink flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-angeltors-ink/90 transition-colors shadow-sm active:scale-95"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-angeltors-ink text-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.3)] flex items-center justify-center relative border border-white/10"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-angeltors-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-angeltors-cyan border-2 border-angeltors-ink"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
