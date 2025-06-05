const sqr = (num: number) => {
  return num * num;
};


function memoize(fn: (num: number) => number) {
  const cache: Record<number, number> = {};

  return function innerFunc(num: number): number {
    if (num in cache) {
      console.log("from cache");
      return cache[num]
    } else {
      const result = fn(num);
      cache[num] = result;
      console.log("calculation");
      return result;
    }
  };
}

// Надо написать функцию мемоизации memoize, которая принимает функцию вызов которой нужно замемоизировать.
// Если функция, которую ты замемоизировал вызывается повторно с одним и тем же аргументом, то вычисление не происходит, а сразу же возвращает результат (из кэша).

export const memoizedSqr = memoize(sqr);

