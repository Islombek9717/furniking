import styled from "styled-components";

export const Bottom = styled.div`
  display: flex;
  width: 1186px;
  margin: 0 auto;
  margin-top: 115px;
  justify-content: space-between;
`;

Bottom.Socials = styled.div`
  width: 318px;
  display: flex;
  flex-direction: column;
`;
Bottom.Logo = styled.div`
  display: flex;
  align-items: center;
`;

Bottom.Heading = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #555555;
  margin-left: 5px;
`;

Bottom.Text = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  color: #555555;
  margin: 15px 0;
`;

Bottom.Media = styled.div`
  display: flex;
  img {
    margin-right: 15px;
  }
`;

Bottom.FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
`;

Bottom.ItemTitle = styled.a`
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #555555;
  text-decoration: none;
  cursor: pointer;
`;
Bottom.Links = styled.a`
  font-weight: 500;
  font-size: 18px;
  line-height: 35px;
  letter-spacing: 0.01em;
  color: #555555;
  text-decoration: none;
  cursor: pointer;
`;
