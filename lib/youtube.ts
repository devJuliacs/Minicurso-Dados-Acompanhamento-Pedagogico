const YOUTUBE_ID_PATTERN =
  /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/

export function getYoutubeEmbedUrl(url: string): string | null {
  const match = url.trim().match(YOUTUBE_ID_PATTERN)
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null
}
