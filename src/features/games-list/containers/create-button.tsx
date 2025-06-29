"use client";

import { Button } from "@/shared/ui/button";
import { createGameAction } from "../actions/create-game";
import { useActionState } from "@/shared/lib/react";
import { mapLeft, right } from "@/shared/lib/either";

export function CreateButton() {

  const [state, dispatch, isPending] =useActionState(
    createGameAction,
    right(undefined),
  );

  return (
      <Button 
        disabled={isPending} 
        onClick={dispatch}
        error={mapLeft(
          state,
          (e) =>
            ({
              ["can-create-only-one-game"]: "Вы можете создать только одну игру",
              ["user-not-found"]: "Пользователя нет",
            })[e],
        )}>Создать игру</Button>
      
  );
}