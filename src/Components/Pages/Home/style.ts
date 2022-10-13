import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
    
`;

export const AlbumTitle = styled.div`
display: flex;
justify-content: center;
  border: solid 1px;
  margin: 10px 0;
  height: 2rem;

  p {
    color: white;
    font-size: 25px;
  }
  `;