// File: ../functional/extractImageDimensions.tsx

export function extractImageDimensions(
  url: string
): { width: number; height: number } | null {
  const regex = /(\d+)x(\d+)\.png$/;
  const match = url.match(regex);

  if (match && match[1] && match[2]) {
    const width = parseInt(match[1], 10);
    const height = parseInt(match[2], 10);
    return { width, height };
  } else {
    return null;
  }
}
