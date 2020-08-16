import styled, { css } from 'styled-components';

export const Header = styled.div`
  width: 92%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const TaskList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ul + ul {
    border-left: 1px solid #cecece;
  }
`;

export const ColumList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  > h1 {
    font-size: 20px;
    width: 75%;
    margin-bottom: 20px;
  }
`;

export const Task = styled.li`
  width: 260px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 3px 20px -6px rgba(135, 135, 135, 0.37);
  transition: 0.2s ease;
  margin-bottom: 20px;

  ${(props) =>
    props.done &&
    css`
      opacity: 0.5;
    `}

  &:hover {
    border-bottom: 5px solid #8e84ff;
    border-radius: 5px 5px 0 0;
  }

  h1 {
    font-size: 18px;
  }

  > p {
    color: #6f6f6f;
    margin: 10px 0 15px;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    width: 100%;

    > span {
      display: flex;
      align-items: center;
      font-weight: 700;
      color: #8e84ff;

      svg {
        padding-right: 5px;
      }
    }

    button {
      background: #8e84ff;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: #7067de;
      }
    }
  }
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 0;
  width: 80px;

  ${(props) =>
    props.status === 'Urgente' &&
    css`
      background: #ffbfbf;
      color: #ff5959;
    `}

  ${(props) =>
    props.status === 'Tranquilo' &&
    css`
      background: #d3fee7;
      color: #48e08e;
    `}

  ${(props) =>
    props.status === 'Moderado' &&
    css`
      background: #dbd8ff;
      color: #6d61ff;
    `}

  ${(props) =>
    props.status === 'Done' &&
    css`
      background: #eff0f3;
      color: #959595;
    `}

  border-radius: 50px;
  font-weight: 700;
  font-size: 12px;
  margin: 10px 0 0;
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;

  img {
    height: 100px;
  }
`;
