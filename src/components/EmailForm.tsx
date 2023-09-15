import React, { useState } from "react";
import "./Email.css";

interface EmailFormProps {
  onSubmit: (email: string) => void;
}

function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>This is how EngageBud looks like in action!</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Try Your Luck</button>
    </form>
  );
}

export default EmailForm;
