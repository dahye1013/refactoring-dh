class Score {
  /**
   * [명령 받는 인수를 생성자로 옮기기]
   * -> 명령의 수명주기나 사용자 정의 기능 지원하게되면 매개변수가 복잡해질 때 편리하다.
   * -> 하나의 실행 대기열 queue 통해서 전달 사용도 가능해짐
   */
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }
  excute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (this._medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }

    let certificationGrade = "regular";
    if (
      this._scoringGuide.stateWithLowCertification(this._candidate.originState)
    ) {
      certificationGrade = "low";
      result -= 5;
    }

    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}

const score = (candidate, medicalExam, scoringGuide) => {
  return new Score(candidate, medicalExam, scoringGuide).excute();
};
