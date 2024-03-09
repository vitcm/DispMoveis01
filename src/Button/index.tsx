import React, { useState } from "react";
import { Container, TextButton } from "./style";

interface ButtonProps {
  onClick: () => void;
  title: string;
}

export function Button({ onClick, title }: ButtonProps) {
  return (
    <Container onPressIn={onClick}>
      <TextButton>{title}</TextButton>
    </Container>
  );
}
