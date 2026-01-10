![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# URLs Detector API for Node.js

## 🔗 Detect and extract URLs from text — powered by SharpAPI AI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-detect-urls.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-urls)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-detect-urls.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI URL Detector** parses text content and extracts any URLs found within. Perfect for link validation, content moderation, and extracting references from unstructured text.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [Use Cases](#use-cases)
7. [API Endpoint](#api-endpoint)
8. [Related Packages](#related-packages)
9. [License](#license)

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

const text = 'Visit https://example.com or www.sample.org for more info';

async function processText() {
  try {
    // Submit processing job
    const statusUrl = await service.detectUrls(text);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Result:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processText();
```

---

## API Documentation

### Methods

The service provides methods for processing content asynchronously. All methods return a status URL for polling results.

**Parameters:**
- `content` (string, required): The content to process
- `language` (string, optional): Output language
- `voice_tone` (string, optional): Desired tone (e.g., professional, casual)
- `context` (string, optional): Additional context for better results

For complete API specifications, see the [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVn).

### Response Format

The API returns structured JSON data. Response format varies by endpoint - see documentation for details.

---

## Examples

### Basic Example

```javascript
const { SharpApiDetectUrlsService } = require('@sharpapi/sharpapi-node-detect-urls');

const service = new SharpApiDetectUrlsService(process.env.SHARP_API_KEY);

// Customize polling behavior if needed
service.setApiJobStatusPollingInterval(10);  // Poll every 10 seconds
service.setApiJobStatusPollingWait(180);     // Wait up to 3 minutes

// Use the service
// ... (implementation depends on specific service)
```

For more examples, visit the [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/urls-detector).

---

## Use Cases

- **Content Moderation**: Detect unauthorized links in user content
- **Link Validation**: Extract and verify URLs from documents
- **SEO Analysis**: Find all links in web content
- **Reference Extraction**: Pull URLs from research documents
- **Security Scanning**: Identify potentially malicious links
- **Citation Management**: Extract web references from text

---

## API Endpoint

**POST** `/content/detect_urls`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVn)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/urls-detector)

---

## Related Packages

- [@sharpapi/sharpapi-node-detect-emails](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-emails)
- [@sharpapi/sharpapi-node-detect-phones](https://www.npmjs.com/package/@sharpapi/sharpapi-node-detect-phones)
- [@sharpapi/sharpapi-node-web-scraping](https://www.npmjs.com/package/@sharpapi/sharpapi-node-web-scraping)

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
