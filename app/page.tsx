'use client'

import { useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const handleSubmit = async () => {
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })

    const data = await response.json()
    setShortUrl(window.location.origin + data.shortUrl)
  }

  return (
    <main style={{ padding: '40px' }}>
      <h1>Link Shortener</h1>

      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: '400px',
          padding: '10px',
          marginRight: '10px',
        }}
      />

      <button onClick={handleSubmit}>
        Shorten URL
      </button>

      {shortUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Generated Link:</h3>
          <a href={shortUrl} target="_blank">
            {shortUrl}
          </a>
        </div>
      )}
    </main>
  )
}