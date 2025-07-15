"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";

import { ButtonLink } from "../ui/button-link";
import { ErrorMessage } from "../ui/error-message";
import { useActionState } from "@/shared/lib/react";
import { SignInFormState, signInAction } from "../actions/sign-in";
import { routes } from "@/kernel/routes";

export function SignInForm() {
  const [formState, action, isPending] = useActionState(
    signInAction,
    {} as SignInFormState,
  );

  return (
    <AuthFormLayout
      title="Войти"
      description="С возвращением, войдите в свой аккаунт"
      action={action}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}>Войти</SubmitButton>}
      error={<ErrorMessage error={formState.errors?._errors} />}
      link={
        <ButtonLink
          text="Нет аккаунта?"
          linkText="Зарегестрироваться"
          url={routes.signUp()}
        />
      }
    />
  );
}