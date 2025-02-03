import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";

const AiChat = () => {
  const [message, setMessage] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Perplexity API key to continue.",
        variant: "destructive",
      });
      return;
    }

    try {
      setMessages(prev => [...prev, { role: "user", content: message }]);
      
      const response = await fetch("https://api.perplexity.ai/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-sonar-small-128k-online",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant that provides information about my portfolio and experience.",
            },
            { role: "user", content: message },
          ],
          temperature: 0.2,
          max_tokens: 1000,
        }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.choices[0].message.content }]);
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to get response from AI. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="ai-chat" className="py-20 bg-primary/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Chat with AI Assistant</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 mb-6">
            <Input
              type="password"
              placeholder="Enter your Perplexity API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="mb-4"
            />
            
            <div className="space-y-4 mb-4 max-h-[400px] overflow-y-auto">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      msg.role === "user"
                        ? "bg-secondary text-secondary-foreground ml-auto"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about my experience..."
                className="flex-1"
              />
              <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiChat;