const { SharpApiCoreService, SharpApiJobTypeEnum } = require('@sharpapi/sharpapi-node-core');

/**
 * Service for detecting URLs in text using SharpAPI.com
 */
class SharpApiDetectUrlsService extends SharpApiCoreService {
  /**
   * Parses the provided text for any possible URLs. Might come in handy in case of processing and validating
   * big chunks of data against URLs or if you want to detect URLs in places where they're not supposed to be.
   *
   * @param {string} text
   * @returns {Promise<string>} - The status URL.
   */
  async detectUrls(text) {
    const data = { content: text };
    const response = await this.makeRequest('POST', SharpApiJobTypeEnum.CONTENT_DETECT_URLS.url, data);
    return this.parseStatusUrl(response);
  }
}

module.exports = { SharpApiDetectUrlsService };