import React, { useState } from "react";

import { Container } from "./style";

interface InputProps {
  onTextChange: (newText: string) => void;
  text: string;
  setText: (newText: string) => void;
}

export function Input({ onTextChange, text, setText }: InputProps) {
  return (
    <Container
      value={text}
      onChangeText={(newText) => {
        setText(newText); // Atualiza o estado com o novo texto
        onTextChange(newText); // Chama a função onTextChange passando o novo texto
      }}
      placeholder="Digite seu texto"
    ></Container>
  );
}
