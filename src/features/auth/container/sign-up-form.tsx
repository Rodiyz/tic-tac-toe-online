"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";

import { ButtonLink } from "../ui/button-link";
import { ErrorMessage } from "../ui/error-message";
import { useActionState } from "@/shared/lib/react";
import { SignUnFormState, signUpAction } from "../actions/sign-up";
import { routes } from "@/kernel/routes";

export function SignUpForm() {
  const [formState, action, isPending] = useActionState(
    signUpAction,
    {} as SignUnFormState,
  );

  return (
    <AuthFormLayout
      title="Регистрация"
      discription="Заполните поля для создания аккаунта"
      action={action}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}>Зарегистрироваться</SubmitButton>}
      error={<ErrorMessage error={formState.errors?._errors} />}
      link={
        <ButtonLink
          text="Уже есть аккаунт?"
          linkText="Войти"
          url={routes.signIn()}
        />
      }
    />
  );
}