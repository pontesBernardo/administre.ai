import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  AbacusIcon,
  ChatGptIcon,
  MoreVerticalIcon,
  PencilEdit02Icon,
  Sidebar,
} from "@hugeicons/core-free-icons";
import { useState } from "react";

type Chat = {
  id: string;
  title: string;
};

const chats: Chat[] = [
  { id: "chat-1", title: "Como calcular holerite?" },
  { id: "chat-2", title: "Crie uma planilha financeira" },
  { id: "chat-3", title: "Relatório completo anual" },
  { id: "chat-4", title: "Histórico de compras" },
  { id: "chat-5", title: "Planejamento tributário" },
];

export function ChatSidebar() {
  const [activeChatId, setActiveChatId] = useState<string | null>(
    chats[0]?.id ?? null
  );

  return (
    <aside className="w-64 h-full bg-card flex flex-col space-y-6 p-4">
      <div className="w-full flex justify-between">
        <HugeiconsIcon
          icon={ChatGptIcon}
          size={25}
          className="cursor-pointer"
        />
        <HugeiconsIcon
          icon={Sidebar}
          size={20}
          className="cursor-pointer text-muted-foreground"
        />
      </div>

      <div className="flex flex-col gap-1">
        <Button variant="ghost" size="lg" className="justify-start">
          <HugeiconsIcon icon={PencilEdit02Icon} size={25} />
          New Chat
        </Button>

        <Button variant="ghost" size="lg" className="justify-start">
          <HugeiconsIcon icon={AbacusIcon} size={25} />
          Integrations
        </Button>
      </div>

      <div className="flex flex-col gap-1 flex-1 min-h-0">
        <p className="text-sm text-muted-foreground">Your chats</p>

        <ScrollArea className="mt-2 pr-4 h-[calc(110%-64px)]">
          <div className="flex flex-col gap-1 pb-20">
            {chats.map((chat) => {
              const isActive = activeChatId === chat.id;

              return (
                <Button
                  key={chat.id}
                  variant="ghost"
                  size="lg"
                  onClick={() => setActiveChatId(chat.id)}
                  className={`group font-normal justify-between relative
            ${isActive ? "bg-neutral-800" : ""}
          `}
                >
                  <span className="truncate">{chat.title}</span>

                  <HugeiconsIcon
                    icon={MoreVerticalIcon}
                    size={18}
                    className="absolute right-3 opacity-0 group-hover:opacity-100 text-muted-foreground"
                  />
                </Button>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      <footer className="mt-auto w-full bg-card border-t py-2">
        <Button
          variant="ghost"
          size="lg"
          className="w-full justify-start gap-4 h-12"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-start justify-start">
            <h1 className="font-normal text-sm">Shadd</h1>
            <p className="font-light text-xs">Freemium</p>
          </div>
        </Button>
      </footer>
    </aside>
  );
}
