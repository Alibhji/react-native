export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';


export function changeCount(num) {
  return {
    type: INCREASE_COUNTER,
    payload: num
    };
}

export function decreaseCount(num) {
  return {
    type: DECREASE_COUNTER,
    payload: num
    };
}