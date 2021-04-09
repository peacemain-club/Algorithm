function solution(participant, completion) {
  const sorted_participant = participant.sort();
  const sorted_completion = completion.sort();
  
  let answer = '';
  for (let i = 0; i < completion.length; i++) {
    if (sorted_completion[i] !== sorted_participant[i]) {
      answer = sorted_participant[i];
      break;
    }
  }
  
  if (!answer) {
    answer = sorted_participant[participant.length - 1];
  }
  
  return answer;
}