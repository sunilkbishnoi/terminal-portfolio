import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><br></br>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Secondary Education - 10th GSEB",
    desc: "Shree Narayana International School, Vadodara | 2020",
  },
  {
    title: "Higher Secondary Education - 12th GSEB",
    desc: "SSV School 2, Vadodara | 2022",
  },
  {
    title: "B.Tech in CSE (Cybersecurity)",
  desc: "ITM (SLS) Baroda University, Vadodara | 2023 - 2027",
  },
];

export default Education;
