
import styled from "styled-components";
import {
  UserOutlined
} from '@ant-design/icons';
const StyleCardUser = styled.div`
  width: 300px;
  border: 1px solid black;
  color: black;
  font-size: 24px;
  border-radius: 20px;
  padding: 10px;
  margin: 5px;
`;
export const UserCard = ({ Title, userCount, children }) => {
  return (
    <StyleCardUser>
      <h1>{Title}</h1>
      <p><UserOutlined /> {userCount} </p>
      {children}
    </StyleCardUser>
  );
};

