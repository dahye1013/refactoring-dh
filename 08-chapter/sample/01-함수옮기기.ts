{
  const distance = (p1: number, p2: number): number => Math.abs(p1 - p2);
  const calculateTime = () => 10000;

  const trackSummary = (points: number[]): object => {
    const calculateDistance = () => {
      let result = 0;
      for (let i = 1; i < points.length; i++) {
        result += distance(points[i - 1], points[i]);
      }
      return result;
    };

    const totalTime: number = calculateTime();
    const totalDistance: number = calculateDistance();
    const pace = totalTime / 60 / totalDistance;

    return {
      time: totalTime,
      distance: totalDistance,
      pace: pace,
    };
  };
  console.log(trackSummary([30, 250, 150, 550, 660]));
}
