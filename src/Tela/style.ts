import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #3e2a35;
`;

export const DataInsertion = styled.View`
  margin-top: 10%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Options = styled.View`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ButtonOption = styled.TouchableOpacity`
  width: 110px;
  height: 25px;
  background-color: #efa8b8;
  border-radius: 15px;
`;

export const TextOrder = styled.Text`
  color: #fff;
  font-size: 15px;
  text-align: center;
`;

export const DataShow = styled.View`
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Names = styled.Text`
  font-size: 25px;
  color: #fff;
`;
