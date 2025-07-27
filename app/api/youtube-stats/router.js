// app/api/youtube-stats/route.js
export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const VIDEO_ID = 'gFM8s2i2emQ'; // Your video ID

  if (!API_KEY) {
    return new Response(JSON.stringify({ error: 'Missing YOUTUBE_API_KEY' }), {
      status: 500,
    });
  }

  try {
    const ytRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${VIDEO_ID}&key=${API_KEY}`
    );
    const json = await ytRes.json();

    if (!json.items || json.items.length === 0) {
      return new Response(JSON.stringify({ error: 'Video not found' }), {
        status: 404,
      });
    }

    const stats = json.items[0].statistics;

    return new Response(
      JSON.stringify({
        viewCount: stats.viewCount,
        likeCount: stats.likeCount,
        commentCount: stats.commentCount,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch YouTube data' }), {
      status: 500,
    });
  }
}
