import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>hacker</User>@<WebsiteName>terminal.sunilbishnoi</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
