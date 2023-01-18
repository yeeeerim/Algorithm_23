function solution(today, terms, privacies) {
  const answer = [];

  privacies.map((privacy, index) => {
    const [pDate, pGrade] = privacy.split(" ");
    const month = terms
      .find((term) => {
        const [tGrade, month] = term.split(" ");
        if (pGrade === tGrade) {
          return month;
        }
      })
      .split(" ")[1];

    const privacyToDate = new Date(pDate);
    const todayToDate = new Date(today);

    if (addMonths(privacyToDate, Number(month)) <= todayToDate) {
      answer.push(index + 1);
    }
  });
  return answer;
}

function addMonths(date, month) {
  let copyDate = date;
  const result = copyDate.getMonth() + month;
  copyDate.setMonth(result);
  return copyDate;
}