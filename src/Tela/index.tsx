import React, { useState } from "react";
import xml2js from "react-native-xml2js";
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
  const [xmlData, setXmlData] = useState("");

  const handleButtonPress = () => {
    if (text.trim() !== "" && data.length < 4) {
      setData([...data, text]);
      setText("");
    }
  };

  const handleButtonDelete = () => {
    setData([]);
    setSortOrder("default");
    setXmlData("");
  };

  const handleTextChange = (text: string) => {
    setText(text);
  };

  const handleSortOrderChange = (order: "default" | "asc" | "desc") => {
    setSortOrder(order);
    setXmlData("");
  };

  const generateXml = () => {
    const builder = new xml2js.Builder();
    const xml = builder.buildObject({ data });
    setXmlData(xml);
  };

  const sortedData = [...data];

  if (sortOrder === "asc") {
    sortedData.sort();
  } else if (sortOrder === "desc") {
    sortedData.sort((a, b) => b.localeCompare(a));
  }

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
        <Button onClick={generateXml} title="Gerar XML" />
        {xmlData && <TextOrder>XMsL Gerado: {xmlData}</TextOrder>}
      </DataShow>
    </Container>
  );
}
