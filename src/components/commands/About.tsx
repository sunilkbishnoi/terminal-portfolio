import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Sunil Bishnoi</HighlightSpan>!
      </p>
      <p>
        I'm a<HighlightAlt> 2nd Yr. CSE Student</HighlightAlt> based in Vadodara, Gujarat.
      </p>
      <p>
    I am passionate about cyber defense and <br />
    constantly work towards enhancing security measures in technology. <br />
    I aim to create innovative solutions to prevent cyber threats.
</p>

    </AboutWrapper>
  );
};

export default About;
