const payAmount = (employee) => {
  let result;
  //퇴사O
  if (employee.isSeperated) result = { amount: 0, reasonCode: "SEP" };
  else {
    //은퇴O
    if (employee.isRetired) result = { amount: 0, reasonCode: "RET" };
    else {
      // 재직O - 급여 계산 로직
      result = { amount: 100, reasonCode: "WRK" };
    }
  }
  return result;
};
