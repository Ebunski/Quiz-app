import styled from "styled-components";

const ProgressBar = styled.div`
  width: 100%;
  margin-top: 1rem;

  height: 10px;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  color: green;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => (props.width ? props.width : "10px")};
    border-radius: 10px;
    background-color: #f54500;
  }
`;

export default ProgressBar;
