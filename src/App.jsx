import "./App.css";
import { Button } from "./components/styledComponents/Button";
import useCalulation from "./components/customHooks/UseCalculation";
import { Container, MainWrapper } from "./components/styledComponents/Container";
import CheckList from "./components/PasswordValidation/CheckList";
import { Length, RangeInput, RangeLengthDiv } from "./components/styledComponents/RangeLength";
import Password from "./components/PasswordGen/Password";

const App = () => {
  const {
    range,
    validation,
    handleRange,
    handleValidation,
    handlePassGen,
    text} = useCalulation()
  const checkListData = [
    {name: "uppercase", label: "Include Uppercase Letters",  onChange: handleValidation,
    checked: validation.uppercase},
    {name: "lowercase", label: "Include Lowercase Letters", onChange: handleValidation,
    checked: validation.lowercase, },
    {name: "number", label: "Include Number", onChange: handleValidation,
    checked: validation.number,},
    {name: "symbol", label: "Include Symbols", onChange: handleValidation,
    checked: validation.symbol },
  ];
  return (
    <Container>
      <Password text={text()} />
      <MainWrapper className="validations">
        <RangeLengthDiv>
          <Length>Length: {range}</Length>
          <RangeInput onChange={handleRange} type="range" value={range} />
        </RangeLengthDiv>
        <CheckList db={checkListData}/>
        <Button onClick={handlePassGen}>Generate</Button>
      </MainWrapper>
    </Container>
  );
};

export default App;
