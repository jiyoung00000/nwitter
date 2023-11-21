import styled from "styled-components";


export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const HomeForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`;

export const HomeInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const HomeButton = styled.button`
  padding: 10px 20px;
  background-color: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const HomeNweetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

export const HomeNweetItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const HomeNweetText = styled.p`
  margin-left: 10px;
`;

export const HomeImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const HomeClearButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #e0245e;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
