import PasswordValidation from "./PasswordValidation";

const CheckList = ({db}) => {
  return db.map((list) => <PasswordValidation key={list.name} list={list} />);
};
export default CheckList