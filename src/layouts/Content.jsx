import styled from "styled-components";

function Content(props) {
  return (
    <ContentWrap id="content-default">
      <Wrapper className="wrapper">{props.children}</Wrapper>
    </ContentWrap>
  );
}

export default Content;

const ContentWrap = styled.div`
  min-height: 100vh;
  background-color: #0d202b;
  @media (max-width: 1024px) {
    padding-left: 45px;
    padding-right: 45px;
  }
  @media only screen and (max-width: 520px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
