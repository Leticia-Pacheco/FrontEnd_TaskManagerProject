import styled from 'styled-components';
import { FaLock, FaEnvelope, FaUserAlt } from 'react-icons/fa';

export const FormRegister = styled.form`
  width: 100%;
  min-height: 100px;
  height: auto;
  overflow: hidden;

  > p {
    font-size: 12px;
    font-weight: bold;

    color: var(--primaryPurple);
  }

  > input {
    width: 100%;
    height: 36px;

    font-size: 14px;

    padding-left: 25px;
    margin-bottom: 10px;

    border: solid 1px var(--primaryPurple);
  }
`;

export const IconUsuary = styled(FaUserAlt)`
  position: absolute;
  left: 535px;

  font-size: 15px;

  margin-top: 10px;

  color: var(--primaryPurple);

  cursor: pointer;
`;

export const IconEmail = styled(FaEnvelope)`
  position: absolute;
  left: 535px;

  font-size: 15px;

  margin-top: 10px;

  color: var(--primaryPurple);

  cursor: pointer;
`;

export const IconLock = styled(FaLock)`
  position: absolute;
  left: 535px;

  font-size: 15px;

  margin-top: 10px;

  color: var(--primaryPurple);

  cursor: pointer;
`;
