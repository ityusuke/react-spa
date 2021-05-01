import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { name, img } = props;

  return (
    <Scontainer>
      <SImg width={200} src={img} alt={name} />
      <Sname>{name}</Sname>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  text-align: center;
  border-radius: 50%;
`;
const Sname = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
