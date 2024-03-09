import React, { useState } from "react";
import {
  Container,
  DataInsertion,
  Options,
  ButtonOption,
  TextOrder,
  DataShow,
  Names,
} from "./style";
import { Input } from "../Input";
import { Button } from "../Button";

export function Tela() {
  const [text, setText] = useState("");
  const [data, setData] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"default" | "asc" | "desc">(
    "default"
  );

  const handleButtonPress = () => {
    if (text.trim() !== "" && data.length < 4) {
      setData([...data, text]);
      setText("");
    }
  };

  const handleButtonDelete = () => {
    setData([]);
    setSortOrder("default");
  };

  const sortedData = [...data];

  if (sortOrder === "asc") {
    sortedData.sort();
  } else if (sortOrder === "desc") {
    sortedData.sort((a, b) => b.localeCompare(a));
  }

  const handleTextChange = (text: string) => {
    setText(text);
  };

  const handleSortOrderChange = (order: "default" | "asc" | "desc") => {
    setSortOrder(order);
  };

  return (
    <Container>
      <DataInsertion>
        <Input onTextChange={handleTextChange} text={text} setText={setText} />
        <Button onClick={handleButtonPress} title="Clique aqui pra adicionar" />
      </DataInsertion>
      <Options>
        <ButtonOption onPress={() => handleSortOrderChange("default")}>
          <TextOrder>Lido</TextOrder>
        </ButtonOption>
        <ButtonOption onPress={() => handleSortOrderChange("asc")}>
          <TextOrder>Crescente</TextOrder>
        </ButtonOption>
        <ButtonOption onPress={() => handleSortOrderChange("desc")}>
          <TextOrder>Decrescente</TextOrder>
        </ButtonOption>
      </Options>
      <DataShow>
        {sortedData.map((item, index) => (
          <Names key={index}>{item}</Names>
        ))}
        <Button
          onClick={handleButtonDelete}
          title="Clique aqui para apagar dados"
        />
      </DataShow>
    </Container>
  );
}
