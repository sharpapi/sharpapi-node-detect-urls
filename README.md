![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# URL Detector API for Node.js

## 🔗 Detect and extract URLs from text — powered by SharpAPI AI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-detect-urls.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-urls)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-detect-urls.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI URL Detector** parses text content and extracts URLs with protocol information and validation. Perfect for link extraction, content moderation, and security analysis.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [License](#license)

---

## Requirements

- Node.js >= 16.x
- npm or yarn

---

## Installation

### Step 1. Install the package via npm:

```bash
npm install @sharpapi/sharpapi-node-detect-urls
```

### Step 2. Get your API key

Visit [SharpAPI.com](https://sharpapi.com/) to get your API key.

---

## Usage

```javascript
const { SharpApiDetectUrlsService } = require('@sharpapi/sharpapi-node-detect-urls');

const apiKey = process.env.SHARP_API_KEY; // Store your API key in environment variables
const service = new SharpApiDetectUrlsService(apiKey);

const text = `
Visit our website at https://example.com for more information.
Check out our blog: www.example.com/blog
Contact us at support page: example.com/contact
`;

async function detectUrls() {
  try {
    // Submit detection job
    const statusUrl = await service.detectUrls(text);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Detected URLs:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

detectUrls();
```

---

## API Documentation

### Methods

#### `detectUrls(text: string): Promise<string>`

Detects and extracts URLs from the provided text.

**Parameters:**
- `text` (string, required): The text content to scan for URLs

**Returns:**
- Promise<string>: Status URL for polling the job result

**Example:**
```javascript
const statusUrl = await service.detectUrls(textWithUrls);
const result = await service.fetchResults(statusUrl);
```

### Response Format

The API returns detected URLs with parsed components:

```json
{
  "urls": [
    {
      "url": "https://example.com",
      "protocol": "https",
      "domain": "example.com",
      "path": "/",
      "is_valid": true,
      "is_secure": true,
      "parameters": {}
    },
    {
      "url": "www.example.com/blog",
      "protocol": "http",
      "domain": "example.com",
      "path": "/blog",
      "is_valid": true,
      "is_secure": false,
      "parameters": {}
    }
  ]
}
```

---

## Examples

### Basic URL Detection

```javascript
const { SharpApiDetectUrlsService } = require('@sharpapi/sharpapi-node-detect-urls');

const service = new SharpApiDetectUrlsService(process.env.SHARP_API_KEY);

const socialPost = `
Check out these awesome resources:
- https://docs.example.com
- www.github.com/username/project
- example.com/api/docs
`;

service.detectUrls(socialPost)
  .then(statusUrl => service.fetchResults(statusUrl))
  .then(result => {
    const urls = result.getResultJson();
    console.log(`Found ${urls.length} URLs:`);
    urls.forEach((url, index) => {
      console.log(`${index + 1}. ${url.url} (${url.protocol})`);
    });
  })
  .catch(error => console.error('Detection failed:', error));
```

### Security-Focused URL Analysis

```javascript
const service = new SharpApiDetectUrlsService(process.env.SHARP_API_KEY);

const userContent = `
Click here: http://suspicious-site.com
Or visit: https://secure-site.com
`;

const statusUrl = await service.detectUrls(userContent);
const result = await service.fetchResults(statusUrl);
const urls = result.getResultJson();

const insecureUrls = urls.filter(url => !url.is_secure);

if (insecureUrls.length > 0) {
  console.log('⚠️ Warning: Found insecure URLs:');
  insecureUrls.forEach(url => {
    console.log(`  - ${url.url} (${url.protocol})`);
  });
}
```

### Link Extraction from Documents

```javascript
const service = new SharpApiDetectUrlsService(process.env.SHARP_API_KEY);

const document = `
API Documentation: https://api.example.com/v2/docs
Support Portal: https://support.example.com
Community Forum: https://community.example.com/discussions
`;

const statusUrl = await service.detectUrls(document);
const result = await service.fetchResults(statusUrl);
const urls = result.getResultJson();

const linkDirectory = urls.map(url => ({
  domain: url.domain,
  full_url: url.url,
  secure: url.is_secure
}));

console.log('Extracted Links:', linkDirectory);
```

---

## Use Cases

- **Content Moderation**: Detect and validate URLs in user-generated content
- **Link Extraction**: Parse URLs from documents, emails, and web pages
- **Security Analysis**: Identify insecure or suspicious links
- **SEO Audits**: Extract and analyze all links from content
- **Social Media Monitoring**: Track shared links and references
- **Spam Detection**: Identify spam URLs in comments and messages
- **Archive & Backup**: Extract links for archival purposes

---

## Detection Capabilities

The URL detector handles various formats:

- **Full URLs**: https://example.com/path?query=value
- **Protocol-less**: www.example.com or example.com
- **Subdomains**: subdomain.example.com
- **Paths**: example.com/path/to/resource
- **Query Parameters**: example.com?param1=value1&param2=value2
- **Fragments**: example.com/page#section
- **International Domains**: Internationalized domain names (IDN)

---

## API Endpoint

**POST** `/content/detect_urls`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVe)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/urls-detector)

---

## Related Packages

- [@sharpapi/sharpapi-node-detect-emails](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-emails) - Email detection
- [@sharpapi/sharpapi-node-detect-phones](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-phones) - Phone number detection
- [@sharpapi/sharpapi-node-detect-spam](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-spam) - Spam detection
- [@sharpapi/sharpapi-node-client](https://www.npmjs.com/package/@sharpapi/sharpapi-node-client) - Full SharpAPI SDK

---

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

## Support

- **Documentation**: [SharpAPI.com Documentation](https://sharpapi.com/documentation)
- **Issues**: [GitHub Issues](https://github.com/sharpapi/sharpapi-node-client/issues)
- **Email**: contact@sharpapi.com

---

**Powered by [SharpAPI](https://sharpapi.com/) - AI-Powered API Workflow Automation**
