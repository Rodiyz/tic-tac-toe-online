import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";

export function AuthFormLayout({
  title,
  discription,
  fields,
  actions,
  link,
  action,
  error,
}: {
  title: string,
  discription: string,
  fields: React.ReactNode,
  actions: React.ReactNode,
  link: React.ReactNode,
  error: React.ReactNode,
  action: (formData: FormData) => void,
}) {
  return (
    <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
          <CardDescription className="text-center">{discription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form action={action} className="space-y-4">
            {fields}
            {error}
            {actions}
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          {link}
        </CardFooter>
      </Card>
  );
}


