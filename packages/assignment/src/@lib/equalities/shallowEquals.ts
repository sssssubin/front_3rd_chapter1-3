export function shallowEquals(objA: unknown, objB: unknown): boolean {
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  if (objA === objB) return true;

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  if (typeof objA !== "object" || typeof objB !== "object") return false;

  // 3. 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(objA as object);
  const keysB = Object.keys(objB as object);

  if (keysA.length !== keysB.length) return false;

  // 4. 모든 키에 대해 얕은 비교 수행
  const keysBSet = new Set(keysB);

  for (const key of keysA) {
    if (!keysBSet.has(key)) return false;

    if (
      (objA as Record<string, unknown>)[key] !==
      (objB as Record<string, unknown>)[key]
    )
      return false;
  }

  return true;
}
