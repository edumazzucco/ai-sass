import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";

const ConversationPage = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Get acess to natural conversation with powerful knowledge of the IA."
        icon={MessageSquare}
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default ConversationPage;
